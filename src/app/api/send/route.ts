import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const res = await request.json();
  const { email, subject, message } = res;

  console.log('Request:', request);
  console.log('email', email);

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      reply_to: email,
      to: 'giovannifvicentin@gmail.com',
      subject: `From ${email}: ${subject}`,
      html: `<p>Email from: ${email}</p><p>${message}</p>`,
    });

    console.log('Response:', data);

    if (data && data.id) {
      return Response.json({ success: true });
    } else {
      console.error('Email sending error: No id in the response');
      return Response.json({ success: false });
    }
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json({ success: false });
  }
}
