import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Setup Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",   // 🔹 replace with your email
    pass: "your-app-password",     // 🔹 use App Password (not normal password)
  },
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await transporter.sendMail({
      from: '"SpotEvents" <your-email@gmail.com>',
      to: email,
      subject: "Welcome to SpotEvents 🎉",
      text: `Hello ${name}, thanks for registering!`,
    });

    res.json({ message: "Registration successful! Check your email." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
