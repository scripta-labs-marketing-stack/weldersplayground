import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, message, subject } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Alle Felder sind erforderlich.' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await resend.emails.send({
      from: 'Welder\'s Playground <noreply@weldersplayground.de>',
      to: ['info@weldersplayground.de'],
      subject: subject || `Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
    });

    if (data.error) {
      return new Response(
        JSON.stringify({ success: false, error: data.error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data.data?.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
