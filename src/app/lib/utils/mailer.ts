import nodemailer from 'nodemailer';

interface MailParams {
  name: string;
  email: string;
  message: string;
  answers?: Record<string, string | string[]>;
}

export const sendEmail = async ({ name, email, message, answers }: MailParams) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

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
    to: process.env.MAIL_RECEIVER,
    subject: 'Nouveau message depuis ton portfolio',
    html: `
      <h1>Message reçu</h1>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      ${answersContent ? `<h2>Réponses à la calculatrice :</h2>${answersContent}` : ''}
    `,
  };

  await transporter.sendMail(mailOptions);
};
