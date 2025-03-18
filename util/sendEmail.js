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
  };


  export const sendCustomEmail = async (email, subject, time, date, fullname, address) => {
    const response = await fetch("/api/SendCustomEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: subject,
        time: time,
        date: date,
        fullname: fullname,
        address: address
      }),
    });
  
    const result = await response.json();
  };
  