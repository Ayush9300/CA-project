import nodemailer from "nodemailer";

export const submitContactForm = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    // Send email to Admin
    await transporter.sendMail({
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New User Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send Thank You email to user
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Thank You - Ezip Panjiyan Center",
      html: `
        <h3>Dear ${firstName},</h3>
        <p>Thank you for contacting <strong>Ezip Panjiyan Center</strong>.</p>
        <p>We’ve received your message and our team will get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>Ezip Panjiyan Center</p>
      `,
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
};
