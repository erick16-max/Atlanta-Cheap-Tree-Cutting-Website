

export const sendCustomSms = async (messageText, phoneNumber) => {

    console.log(messageText, phoneNumber)
    const response = await fetch("/api/sendSms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messageText: messageText,
        phoneNumber: phoneNumber,
      }),
    });
  
    const result = await response.json();
    return result
  };
  