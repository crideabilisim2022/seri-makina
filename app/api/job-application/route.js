export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json(); 

    const {
      fullName,
      email,
      phone,
      birthPlace,
      birthDate,
      position,
      gender,
      maritalStatus,
      education,
      message,
      cv,
    } = data;

    // Nodemailer SMTP ayarları
    const transporter = nodemailer.createTransport({
      host: "mail.serimakina.com",
      port: 465,
      secure: true,
      auth: {
        user: "ik@serimakina.com",
        pass: process.env.MAIL_PASSWORD,
      },
       tls: {
        // ⚠️ Sertifika uyuşmazlığını görmezden gel
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: '"Seri Makina İş Başvurusu" <ik@serimakina.com>',
      to: "ik@serimakina.com",
      replyTo: email,
      subject: `Yeni İş Başvurusu - ${fullName}`,
      html: `
        <h2>Yeni İş Başvurusu</h2>
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Doğum Yeri:</strong> ${birthPlace}</p>
        <p><strong>Doğum Tarihi:</strong> ${birthDate}</p>
        <p><strong>Başvurulan Pozisyon:</strong> ${position}</p>
        <p><strong>Cinsiyet:</strong> ${gender}</p>
        <p><strong>Medeni Hali:</strong> ${maritalStatus}</p>
        <p><strong>Eğitim Durumu:</strong> ${education}</p>
        <p><strong>Mesaj:</strong><br/>${message}</p>
      `,
      attachments: cv
        ? [
            {
              filename: cv.name,
              content: Buffer.from(cv.data, "base64"), // frontend’den base64 geliyor
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Mail Gönderim Hatası",error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}