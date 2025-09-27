import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendContactEmail = async (data) => {
  try {
    const response = await resend.emails.send({
      from: 'info@weldersplayground.de',
      to: 'info@weldersplayground.de',
      subject: data.subject,
      text: `
Neue Anfrage über das Kontaktformular

Name: ${data.name}
E-Mail: ${data.email}

Nachricht:
${data.message}
      `,
    });

    if (response.error) {
      return { data: { success: false, error: response.error.message } };
    }

    return { data: { success: true, id: response.data?.id } };
  } catch (error) {
    console.error("Resend error:", error);
    return { data: { success: false, error: error.message } };
  }
};
