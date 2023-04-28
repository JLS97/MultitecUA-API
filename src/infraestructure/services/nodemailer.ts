import nodemailer from 'nodemailer';
import { IMail } from '../../domain/entities/IMail';
import { HttpError } from '../../application/shared/errors/HttpError';

// TO-DO manejar errores con un manejador propio por si falla alguna de las conexiones con nodemailer
const sendEmailWithNodemailer = (mailParams: IMail) => {
  const { to, subject, text } = mailParams;

  const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'user@email.com',
          pass: 'pass'
      }
  });

  if (!transporter) throw new HttpError(500, 'Error al enviar el mail');
    
  const mailOptions = {
    from: 'MultitecUA',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) throw new Error(`Error on sending email to: ${to}`);
  });
};

export default sendEmailWithNodemailer;
