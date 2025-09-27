import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();
    const { name, email, message, subject } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, E-Mail und Nachricht sind erforderlich.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Welder\'s PlayGround <noreply@weldersplayground.de>',
      to: ['info@weldersplayground.de'],
      subject: subject || `Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #111111; color: white; padding: 20px; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; color: #C1121F;">Welder's PlayGround</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.8;">Neue Kontaktanfrage</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #111111; margin-top: 0; border-bottom: 2px solid #C1121F; padding-bottom: 10px;">
              Kontaktanfrage Details
            </h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #C1121F;">Name:</strong>
              <p style="margin: 5px 0; color: #333;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #C1121F;">E-Mail:</strong>
              <p style="margin: 5px 0; color: #333;">${email}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #C1121F;">Nachricht:</strong>
              <div style="margin: 5px 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>Diese E-Mail wurde über das Kontaktformular auf weldersplayground.de gesendet.</p>
              <p>Antworten Sie direkt an: ${email}</p>
            </div>
          </div>
        </div>
      `,
      text: `
        Welder's PlayGround - Neue Kontaktanfrage
        
        Name: ${name}
        E-Mail: ${email}
        
        Nachricht:
        ${message}
        
        ---
        Diese E-Mail wurde über das Kontaktformular auf weldersplayground.de gesendet.
        Antworten Sie direkt an: ${email}
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es erneut.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { success: false, error: 'Ein Serverfehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
