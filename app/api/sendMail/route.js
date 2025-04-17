  const imageLogoUrl = "https://atlanta-cheap-tree-cutting-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0d91f4e9.png&w=256&q=75" 
import { NextResponse } from "next/server";
  import { Resend } from "resend";

  const resend = new Resend(process.env.RESEND_KEY);
  
  export async function POST(req) {
    try {
      const { to, subject } = await req.json();
      const imageLogoUrl = "https://atlanta-cheap-tree-cutting-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0d91f4e9.png&w=256&q=75" 
    if(!to || !subject){
      return NextResponse.json({message: "all fields required!"})
    }

  
      const response = await resend.emails.send({
        from: "Atlanta Cheet Tree Cutting Solutions <info@atlantacheaptreesolutions.com>",
        to: [to],
        subject: "Atlanta Tree Cutting Booking Alerts" ,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <img src=${imageLogoUrl} alt="Company Logo" style="max-width: 150px; display: block; margin: 0 auto 20px;">
            <h2 style="color: #333; text-align: center;">${subject}</h2>
            <p style="font-size: 16px; color: #555; text-align: center;">
              Thank you for choosing Atlanta Tree Cutting Solutions.
            </p>
            <a href="https://atlanta-cheap-tree-cutting-website.vercel.app/" style="display: block; text-align: center; background-color: #326e36; color: white; padding: 12px; border-radius: 5px; text-decoration: none; font-size: 16px; margin: 20px auto; width: 200px;">
              Book Us
            </a>
            <p style="font-size: 14px; color: #777; text-align: center;">
              If you didn't sign up for this, please ignore this email.
            </p>
          </div>
        `,
      });
  
      return Response.json({ success: true, response }, { status: 200 });
    } catch (error) {
      console.error("Email send errors:", error);
      return Response.json({ success: false, error: error.message }, { status: 500 });
    }
  }
  