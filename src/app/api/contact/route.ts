import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { nombre, email, asunto, mensaje } = await req.json();

  try {
    // Email para ti (admin)
    await resend.emails.send({
      from: "The Gaming Corps <no-reply@thegamingcorps.com>",
      to: "contacto@thegamingcorps.com",
      subject: `Nuevo mensaje: ${asunto}`,
      html: `
        <h2>Nuevo mensaje desde tu sitio web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong><br/>${mensaje.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Email de confirmación para el usuario
    await resend.emails.send({
      from: "The Gaming Corps <no-reply@thegamingcorps.com>",
      to: email,
      subject: "Gracias por contactarnos",
      html: `
        <p>Hola ${nombre},</p>
        <p>Gracias por escribirnos. Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
        <p>Un saludo,<br/>The Gaming Corps</p>
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
