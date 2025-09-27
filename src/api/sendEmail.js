import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, subject } = req.body;

  try {
    const resend = new Resend(process.env.VITE_RESEND_API_KEY);

    await resend.emails.send({
      from: 'info@weldersplayground.de',
      to: 'info@weldersplayground.de',
      subject: subject || `Neue Anfrage von ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Nachricht:
        ${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend API Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
