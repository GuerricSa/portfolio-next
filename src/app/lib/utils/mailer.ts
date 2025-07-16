import nodemailer from 'nodemailer';

interface MailParams {
  name: string;
  email: string;
  message: string;
  answers?: Record<string, string | string[]>;
  description?: string;
}

export const sendEmail = async ({ name, email, message, answers, description }: MailParams) => {
  let transporter;

  if (process.env.NODE_ENV === 'development') {
    // En développement, utiliser Ethereal Email (service de test)
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  } else {
    // En production, utiliser Gmail
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  let answersContent = '';
  if (answers) {
    answersContent = Object.entries(answers)
      .map(([question, answer]) => {
        const formatted = Array.isArray(answer) ? answer.join(', ') : answer;
        return `<p><strong>${question}:</strong> ${formatted}</p>`;
      })
      .join('');
  }

  const mailOptions = {
    from: email,
    to: process.env.NODE_ENV === 'development' ? 'test@example.com' : process.env.MAIL_RECEIVER,
    subject: 'Nouveau message depuis ton portfolio',
    html: `
      <h1>Message reçu</h1>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      ${answersContent ? `<h2>Réponses à la calculatrice :</h2>${answersContent}` : ''}
      ${description ? `<h2>Description :</h2>${description}` : ''}
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  if (process.env.NODE_ENV === 'development') {
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
};
