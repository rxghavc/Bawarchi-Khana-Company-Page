import nodemailer from 'nodemailer';

// Validate required env vars once at module load
const { EMAIL_APP_USER, EMAIL_APP_PASSWORD, EMAIL_SEND_TO } = process.env;
if (!EMAIL_APP_USER || !EMAIL_APP_PASSWORD || !EMAIL_SEND_TO) {
  console.warn('[contact api] Missing one or more email environment variables.');
}

// Escape HTML entities to prevent injection inside our template
const escapeHtml = (val: string) => val
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body as {
      name?: string; email?: string; phone?: string; message?: string;
    };

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields.' }), { status: 400 });
    }

    if (!EMAIL_APP_USER || !EMAIL_APP_PASSWORD || !EMAIL_SEND_TO) {
      return new Response(JSON.stringify({ ok: false, error: 'Email service not configured.' }), { status: 500 });
    }

    // Normalise (trim) and then escape for HTML
    const normalise = (val: string) => escapeHtml(val.replace(/[\r\n]+/g, '\n').trim());
    const safeName = normalise(name);
    const safeEmail = normalise(email);
    const safePhone = phone ? normalise(phone) : 'N/A';
    const rawMessage = message.replace(/\r/g, '');
    const safeMessageHtml = escapeHtml(rawMessage).replace(/\n/g, '<br/>');
    const safeMessageText = rawMessage.trim();
    const submittedAt = new Date().toLocaleString('en-GB', { hour12: false });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: EMAIL_APP_USER, pass: EMAIL_APP_PASSWORD },
    });

    const primaryColor = '#A87634';
    const borderColor = '#e5e7eb';
    const textColor = '#111111';
    const labelColor = '#555555';

    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>New Contact Submission</title>
        <style>
            body { font-family: Arial, Helvetica, sans-serif; background:#f7f7f7; margin:0; padding:24px; color:${textColor}; }
            .container { max-width:640px; margin:0 auto; background:#ffffff; border:1px solid ${borderColor}; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05); }
            .header { background:${primaryColor}; color:#fff; padding:20px 28px; }
            .header h1 { margin:0; font-size:20px; letter-spacing:.5px; }
            .content { padding:28px; }
            .grid { width:100%; border-collapse:collapse; }
            .grid th { text-align:left; padding:8px 0 4px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:${labelColor}; }
            .grid td { padding:0 0 16px; font-size:14px; vertical-align:top; }
            .message-box { background:#fafafa; border:1px solid ${borderColor}; padding:16px 18px; border-radius:8px; font-size:14px; line-height:1.55; }
            .footer { margin-top:24px; font-size:11px; color:#777; text-align:center; padding:16px 0 8px; }
            .pill { display:inline-block; background:${primaryColor}; color:#fff; padding:2px 8px; font-size:11px; border-radius:999px; letter-spacing:.5px; }
            @media (max-width:600px){ body{padding:12px;} .content{padding:20px;} }
        </style>
        </head>
        <body>
            <div class="container">
            <div class="header">
                <h1>Bawarchi Khana – New Contact Submission</h1>
            </div>
            <div class="content">
                <table class="grid" role="presentation">
                <tr>
                    <th scope="row">Name</th>
                </tr>
                <tr><td>${safeName}</td></tr>
                <tr>
                    <th scope="row">Email</th>
                </tr>
                <tr><td><a href="mailto:${safeEmail}" style="color:${primaryColor};text-decoration:none;">${safeEmail}</a></td></tr>
                <tr>
                    <th scope="row">Phone</th>
                </tr>
                <tr><td>${safePhone}</td></tr>
                <tr>
                    <th scope="row">Message</th>
                </tr>
                <tr>
                    <td>
                    <div class="message-box">${safeMessageHtml}</div>
                    </td>
                </tr>
                </table>
                <div class="footer">
                Received at ${submittedAt}. Reply directly to this email to respond.
                </div>
            </div>
            </div>
        </body>
        </html>`;

    const mailOptions = {
      from: `Bawarchi Khana <${EMAIL_APP_USER}>`,
      to: EMAIL_SEND_TO,
      replyTo: email,
      subject: `New Contact Submission – ${safeName}`,
      text: `New contact form submission\n--------------------------------\nName: ${safeName}\nEmail: ${safeEmail}\nPhone: ${safePhone}\nSubmitted: ${submittedAt}\n\nMessage:\n${safeMessageText}\n\n--\nBawarchi Khana Contact Form`,
      html,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error('[contact api] Error sending email', err);
    return new Response(JSON.stringify({ ok: false, error: 'Internal server error.' }), { status: 500 });
  }
}
