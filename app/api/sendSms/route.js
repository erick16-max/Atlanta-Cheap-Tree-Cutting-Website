// pages/api/send-sms.js

import { https } from 'follow-redirects';

export async function POST(req) {
  try {
    // Parse the incoming JSON body
    const { phoneNumber, messageText } = await req.json();
    console.log(messageText, phoneNumber)


    // Validate incoming data
    if (!phoneNumber || !messageText) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 }
      );
    }

    const options = {
      method: 'POST',
      hostname: 'kq89mx.api.infobip.com',
      path: '/sms/2/text/advanced',
      headers: {
        'Authorization': 'App 63a8cbf67e17323108d74e1d6b1a5074-646e6e0a-32f2-4b70-b662-790dd1418622',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      maxRedirects: 20,
    };

    const postData = JSON.stringify({
      messages: [
        {
          destinations: [{ to: phoneNumber }],
          from: '447491163443', // Twilio sender number or the number you're using
          text: messageText,
        },
      ],
    });

    // Make the HTTPS request to Infobip API
    const request = https.request(options, (response) => {
      let chunks = [];

      response.on('data', (chunk) => {
        chunks.push(chunk);
      });

      response.on('end', () => {
        const body = Buffer.concat(chunks);
        const responseBody = body.toString();

        // Check if the response body is empty
        if (!responseBody) {
            return new Response(
                JSON.stringify({
                  success: false,
                  message: 'empty field',
                  error: error.message,
                }),
                { status: 500 }
              );
        }

        try {
          const parsedResponse = JSON.parse(responseBody);

          // Assuming the API response is successful
          if (response.statusCode === 200) {
            return new Response(
                JSON.stringify({
                  success: false,
                  message: 'Successfully sent sms',
                }),
                { status: 200 }
              );
          } else {
            return new Response(
                JSON.stringify({
                  success: false,
                  message: 'Unexpected error',
                  error: error.message,
                }),
                { status: 500 }
              );
          }
        } catch (error) {
          // Handle JSON parsing error
          console.error('Error parsing response:', error);
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Unexpected error parsing response',
              error: error.message,
            }),
            { status: 500 }
          );
        }
      });

      response.on('error', (error) => {
        console.error('Error sending SMS:', error);
        return new Response(
            JSON.stringify({
              success: false,
              message: 'Error sending SMS',
              error: error.message,
            }),
            { status: 500 }
          );
        
      });
    });

    request.write(postData);
    request.end();
  } catch (error) {
    console.error('Error in request:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Unexpected error',
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
