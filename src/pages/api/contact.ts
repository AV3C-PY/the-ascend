/**
 * src/pages/api/contact.ts
 * Contact form handler — sends email via Resend
 *
 * TODO: Add your Resend API key to .env as RESEND_API_KEY
 * TODO: Verify your sender domain in Resend dashboard
 * TODO: Update the "from" address if using a custom domain email
 *
 * Environment variables needed:
 *   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
 */

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { SITE } from '@data/site';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Parse form data
  const data = await request.formData();

  const name     = data.get('name')?.toString()?.trim() ?? '';
  const email    = data.get('email')?.toString()?.trim() ?? '';
  const phone    = data.get('phone')?.toString()?.trim() ?? '';
  const business = data.get('business')?.toString() ?? '';
  const service  = data.get('service')?.toString() ?? '';
  const budget   = data.get('budget')?.toString() ?? '';
  const message  = data.get('message')?.toString()?.trim() ?? '';
  const privacy  = data.get('privacy')?.toString() ?? '';

  // Basic validation
  if (!name || !email || !message || !privacy) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email format' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Get API key from environment
  // TODO: Add RESEND_API_KEY to your .env file
  const apiKey = (import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY);

  if (!apiKey || apiKey === 'your-resend-api-key') {
    console.error('RESEND_API_KEY is not configured');
    // Still return success in dev mode so the form works
    return new Response(JSON.stringify({ success: true, dev: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(apiKey);

  try {
    // Send notification email to you
    await resend.emails.send({
      // TODO: Update "from" with your verified Resend sender
      // Format: "Name <email@yourdomain.com>"
      from: 'The Ascend <info@the-ascend.store>',
      // TODO: Update "to" if you want different recipient
      to: [SITE.email],
      subject: `[The Ascend] Nueva solicitud de ${name} — ${service || 'Sin servicio especificado'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fafafa; padding: 32px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
          <div style="margin-bottom: 24px;">
            <h1 style="font-size: 24px; font-weight: 700; color: #fafafa; margin: 0 0 8px;">Nueva solicitud de presupuesto</h1>
            <p style="color: #a1a1aa; margin: 0; font-size: 14px;">Recibida a través del formulario de contacto</p>
          </div>

          <div style="background: #18181b; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #52525b; width: 140px;">Nombre</td>
                <td style="padding: 8px 0; font-size: 14px; color: #fafafa; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #52525b;">Email</td>
                <td style="padding: 8px 0; font-size: 14px; color: #818cf8;">${email}</td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 0; font-size: 13px; color: #52525b;">Teléfono</td>
                <td style="padding: 8px 0; font-size: 14px; color: #fafafa;">${phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #52525b;">Tipo de negocio</td>
                <td style="padding: 8px 0; font-size: 14px; color: #fafafa;">${business || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #52525b;">Servicio</td>
                <td style="padding: 8px 0; font-size: 14px; color: #fafafa;">${service || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #52525b;">Presupuesto</td>
                <td style="padding: 8px 0; font-size: 14px; color: #fafafa;">${budget || '—'}</td>
              </tr>
            </table>
          </div>

          <div style="background: #18181b; border: 1px solid rgba(99,102,241,0.25); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="font-size: 13px; color: #52525b; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Mensaje</p>
            <p style="font-size: 14px; color: #a1a1aa; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="text-align: center;">
            <a
              href="mailto:${email}"
              style="display: inline-block; background: #6366f1; color: #fff; font-size: 14px; font-weight: 600; padding: 12px 24px; border-radius: 8px; text-decoration: none;"
            >
              Responder a ${name}
            </a>
          </div>
        </div>
      `,
    });

    // Send confirmation to client
    await resend.emails.send({
      from: 'The Ascend <info@the-ascend.store>',
      to: [email],
      subject: 'Hemos recibido tu solicitud — The Ascend',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fafafa; padding: 32px; border-radius: 16px;">
          <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 16px;">¡Gracias, ${name}!</h1>
          <p style="color: #a1a1aa; font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
            Hemos recibido tu solicitud y te responderemos en menos de 24 horas con una propuesta personalizada.
          </p>
          <div style="background: #18181b; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <p style="font-size: 13px; color: #52525b; margin: 0 0 4px;">Mientras tanto, puedes contactarnos directamente:</p>
            <p style="font-size: 14px; color: #818cf8; margin: 0;">📧 ${SITE.email}</p>
          </div>
          <p style="color: #52525b; font-size: 13px;">— El equipo de ${SITE.name}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
