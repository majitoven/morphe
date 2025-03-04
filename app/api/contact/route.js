// /app/api/contact/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Nodemailer transport configuration for cPanel
  const transporter = nodemailer.createTransport({
    host: 'mail.morphe.com.uy', // Your cPanel SMTP host
    port: 465,
    secure: true, 
    auth: {
      user: 'hola@morphe.com.uy', // Your email
      pass: 'Morphe2025!', // Use environment variable for security
    },
  });

  const mailOptions = {
    from: 'hola@morphe.com.uy',
    to: 'mariajose_v13@hotmail.com',
    subject: 'Nuevo mensaje de contacto de Morphe',
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Mensaje enviado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ error: 'Error enviando email' }, { status: 500 });
  }
}
