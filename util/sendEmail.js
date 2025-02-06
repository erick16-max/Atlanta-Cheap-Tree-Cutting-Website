export const sendEmail = async (email, subject) => {
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: subject,
      }),
    });
  
    const result = await response.json();
    console.log(result);
  };
  