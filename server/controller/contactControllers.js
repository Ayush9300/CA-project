import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

export const submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // 1. Save in DB
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    await newContact.save();

    // 2. Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // ⚠️ disables cert check
      },
    });

    // 3. Send mail to Admin
    await transporter.sendMail({
      from: `"TaxBizLegal Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // 4. Send Thank You mail to User
    await transporter.sendMail({
      from: `"TaxBizLegal" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <h2>Hello ${firstName},</h2>
        <p>Thank you for reaching out to us. Our team will contact you shortly.</p>
        <br/>
        <p>Regards,<br/>TaxBizLegal Team</p>
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
