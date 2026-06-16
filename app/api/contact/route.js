import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "ZA Automation <zaki@zaautomation.com>",
      to: "chzakiabbas@gmail.com",
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
  <h2>📩 New Contact Inquiry</h2>

  <p><strong>Name:</strong> ${name}</p>

  <p><strong>Email:</strong> ${email}</p>

  <p><strong>Message:</strong></p>

  <p>${message}</p>
`,
    });
    await resend.emails.send({
      from: "ZA Automation <noreply@zaautomation.com>",
      to: email,
      subject: "Thank you for contacting ZA Automation",
      html: `
  <div style="font-family:Arial,sans-serif;background:#f4f7fb;padding:40px 20px;">
  <div style="max-width:650px;margin:auto;background:white;border-radius:12px;overflow:hidden;">

   <!-- Header -->
<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="background:#0f172a;padding:20px;"
>
  <tr>
    <td width="90" align="left">
      <img
        src="https://zaautomation.com/assets/images/logo.png"
        width="70"
        alt="ZA Automation"
        style="display:block;"
      />
    </td>

    <td align="center">
      <h1
        style="
          color:#38bdf8;
          margin:0;
          font-size:42px;
          font-weight:bold;
        "
      >
        ZA Automation
      </h1>
    </td>

    <td width="90"></td>
  </tr>
</table>

    <!-- Body -->
    <div style="padding:35px;">
      <h2>Thank You, ${name}! 👋</h2>

      <p>We have successfully received your message.</p>

      <p>
        Our team will review your inquiry and get back to you as soon as possible.
      </p>

      <div style="background:#f8fafc;border-left:4px solid #38bdf8;padding:15px;margin:25px 0;">
        <strong>Your Submitted Message:</strong>
        <br /><br />
        ${message}
      </div>

      <!-- Buttons -->
      <div style="text-align:center;margin-top:30px;">
        <a
          href="https://zaautomation.com"
          style="
            background:#38bdf8;
            color:white;
            padding:12px 24px;
            text-decoration:none;
            border-radius:6px;
            display:inline-block;
            margin-right:10px;
          "
        >
          Visit Website
        </a>

        <a
          href="https://wa.me/971559626398"
          style="
            background:#22c55e;
            color:white;
            padding:12px 24px;
            text-decoration:none;
            border-radius:6px;
            display:inline-block;
          "
        >
          WhatsApp Support
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#0f172a;color:white;text-align:center;padding:20px;">
      <p style="margin:0;">
        Website: https://zaautomation.com
      </p>

      <p style="margin-top:8px;">
        WhatsApp: +971 55 962 6398
      </p>

      <p style="margin-top:8px;">
        © 2026 ZA Automation
      </p>
    </div>

  </div>
</div>
  `,
    });
    console.log("Resend Response:", data);

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);

    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
