import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { nombre, email, asunto, mensaje } = await req.json();

  try {
    await resend.emails.send({
      from: "The Gaming Corps <no-reply@thegamingcorps.com>",
      to: "contacto@thegamingcorps.com",
      subject: `Nuevo mensaje: ${asunto}`,
      html: `
        <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo mensaje de contacto</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #e2e8f0;
          background-color: #0f172a;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #0f172a, #1e3a8a, #0f172a);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
          border-radius: 8px 8px 0 0;
          padding: 20px;
          text-align: center;
          border-bottom: 1px solid #16448e;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .logo {
          width: 180px;
          margin-bottom: 10px;
        }
        .content {
          background-color: #1e293b;
          padding: 20px;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #60a5fa;
          margin-top: 0;
          font-size: 24px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
        }
        .field {
          margin-bottom: 16px;
          padding: 15px;
          background-color: #0f172a;
          border-radius: 8px;
          border: 1px solid #16448e;
        }
        .field-label {
          display: block;
          color: #60a5fa;
          font-weight: 600;
          margin-bottom: 5px;
          font-size: 14px;
        }
        .field-value {
          color: #e2e8f0;
          font-size: 16px;
        }
        .message-content {
          white-space: pre-wrap;
          line-height: 1.6;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #16448e;
          color: #94a3b8;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://thegamingcorps.com/logo-dark-theme.png" alt="The Gaming Corps Logo" class="logo">
        </div>
        <div class="content">
          <h2>Nuevo mensaje de contacto</h2>
          
          <div class="field">
            <span class="field-label">Nombre:</span>
            <div class="field-value">${nombre}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Email:</span>
            <div class="field-value">${email}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Asunto:</span>
            <div class="field-value">${asunto}</div>
          </div>
          
          <div class="field">
            <span class="field-label">Mensaje:</span>
            <div class="field-value message-content">${mensaje.replace(
              /\n/g,
              "<br>"
            )}</div>
          </div>
          
          <div class="footer">
            © ${new Date().getFullYear()} The Gaming Corps. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </body>
    </html>
      `,
    });

    await resend.emails.send({
      from: "The Gaming Corps <no-reply@thegamingcorps.com>",
      to: email,
      subject: "Gracias por contactarnos",
      html: `
        <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mensaje recibido - The Gaming Corps</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #e2e8f0;
          background-color: #0f172a;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #0f172a, #1e3a8a, #0f172a);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
          border-radius: 8px 8px 0 0;
          padding: 30px 20px;
          text-align: center;
          border-bottom: 1px solid #16448e;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .logo {
          width: 180px;
          margin-bottom: 10px;
        }
        .content {
          background-color: #1e293b;
          padding: 30px;
          border-radius: 0 0 8px 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #60a5fa;
          margin-top: 0;
          font-size: 24px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 20px;
        }
        .message {
          background-color: #0f172a;
          border-radius: 8px;
          padding: 25px;
          margin-bottom: 25px;
          border: 1px solid #16448e;
        }
        .greeting {
          font-size: 18px;
          font-weight: 600;
          color: #60a5fa;
          margin-bottom: 15px;
        }
        .text {
          font-size: 16px;
          color: #e2e8f0;
          margin-bottom: 15px;
        }
        .signature {
          margin-top: 25px;
          padding-top: 15px;
          border-top: 1px solid #16448e;
        }
        .company-name {
          font-weight: 700;
          color: #60a5fa;
          font-size: 16px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #16448e;
          color: #94a3b8;
          font-size: 14px;
        }
        .button {
          display: inline-block;
          background-color: #3b82f6;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 20px;
          transition: background-color 0.3s;
        }
        .button:hover {
          background-color: #2563eb;
        }
        .social-links {
          margin-top: 20px;
          text-align: center;
        }
        .social-icon {
          display: inline-block;
          margin: 0 8px;
        }
        .social-icon img {
          width: 24px;
          height: 24px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://thegamingcorps.com/logo-dark-theme.png" alt="The Gaming Corps Logo" class="logo">
          <h2>¡Mensaje Recibido!</h2>
        </div>
        <div class="content">
          <div class="message">
            <p class="greeting">Hola ${nombre},</p>
            <p class="text">Gracias por escribirnos. Hemos recibido tu mensaje y nuestro equipo lo está revisando.</p>
            <p class="text">Te responderemos lo antes posible, normalmente en un plazo de 24-48 horas.</p>
            <p class="text">Mientras tanto, puedes seguir explorando nuestro contenido sobre videojuegos y tecnología.</p>
            <div style="text-align: center;">
              <a href="https://thegamingcorps.com/blog" class="button">Explorar artículos</a>
            </div>
          </div>
          
          <div class="signature">
            <p class="text">Un saludo,<br/><span class="company-name">The Gaming Corps</span></p>
          </div>
          
          <div class="social-links">
            <a href="https://x.com/TheGamingcorps" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="Twitter">
            </a>
            <a href="https://www.facebook.com/Thegamingcorps" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
            </a>
            <a href="https://www.instagram.com/thegamingcorps__/" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram">
            </a>
            <a href="https://www.tiktok.com/@thegamingcorps" class="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok">
            </a>
          </div>
          
          <div class="footer">
            © ${new Date().getFullYear()} The Gaming Corps. Todos los derechos reservados.<br>
            <small>Si no has enviado ningún mensaje, por favor ignora este correo.</small>
          </div>
        </div>
      </div>
    </body>
    </html>
      `,
    });

    return NextResponse.json(
      { message: "Mensajes enviados con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { message: "Error al enviar correo" },
      { status: 500 }
    );
  }
}
