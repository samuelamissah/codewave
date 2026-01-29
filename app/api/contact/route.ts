import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
/* eslint-disable @typescript-eslint/no-explicit-any */

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Log the submission to your terminal
    console.log('--- NEW FORM SUBMISSION (SMTP) ---');
    console.log('Details:', JSON.stringify(data, null, 2));

    // 2. Configure SMTP Transporter for Gmail
    // Hardcoding credentials for testing since .env.local isn't being picked up
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kodewav3@gmail.com',
        pass: 'ruxkzlrjmzippoyg',
      },
    });

    // 3. Verify connection configuration
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('SMTP Connection Verification Failed:', verifyError);
      return NextResponse.json(
        { success: false, error: 'Failed to connect to email server' },
        { status: 500 }
      );
    }

    // 4. Define Email Content
    const mailOptions = {
      from: `"CodeWave Solutions" <${process.env.EMAIL_USER || 'kodewav3@gmail.com'}>`,
      to: 'kodewav3@gmail.com',
      subject: data._subject || 'New Contact Form Submission',
      text: `
        New Submission Received:
        
        Name: ${data.name || 'N/A'}
        Email: ${data.email || 'N/A'}
        Company: ${data.company || 'N/A'}
        Service: ${data.service || 'N/A'}
        Interest: ${data.roleInterest || 'N/A'}
        Portfolio: ${data.portfolio || 'N/A'}
        Message: ${data.message || 'N/A'}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3A8DFF;">New Submission Received</h2>
          <p><strong>Name:</strong> ${data.name || 'N/A'}</p>
          <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ''}
          ${data.roleInterest ? `<p><strong>Role Interest:</strong> ${data.roleInterest}</p>` : ''}
          ${data.portfolio ? `<p><strong>Portfolio:</strong> ${data.portfolio}</p>` : ''}
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${data.message || 'No message provided'}</p>
          </div>
        </div>
      `,
    };

    // 4. Send Email
    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError: any) {
      console.error('Nodemailer Error:', mailError);
      return NextResponse.json(
        { success: false, error: mailError.message || 'SMTP delivery failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully via SMTP' 
    });
  } catch (error) {
    console.error('SMTP/API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
