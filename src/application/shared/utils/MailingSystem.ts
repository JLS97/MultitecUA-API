import { INewsletterRepository } from "../../../domain/repositories/INewsletterRepository";
import { NewsletterRepository } from "../../../infraestructure/repositories/NewsletterRepository";
import sendEmailWithNodemailer from "../../../infraestructure/services/nodemailer";
import { HttpError } from "../errors/HttpError";

class MailingSystem{

  constructor(private newsletterRepository: INewsletterRepository) {}

  async sendNewAnnouncement(text: string) {
    const subject = "Nuevo anuncion en la página de MultitecUA";
    const mailsToNotify = await this.newsletterRepository.getSuscribedEmails();

    // hacer unos errores especificos de la aplicacion para no usar los http
    if (!mailsToNotify) throw new HttpError(400, "No mails on list");

    mailsToNotify.forEach(to => {
      const mailParams = {
        to,
        subject,
        text
      }
      sendEmailWithNodemailer(mailParams);
    });

  }

  sendVerificationCode() {
    // const subject = "Codigo de verificación!";
  }

  sendRenewalWarning() {
    // const subject = "Ey, tienes que renovar tu suscripción anual!";
  }

}

const newsletterRepository = new NewsletterRepository();
const mailingSystem = new MailingSystem(newsletterRepository);

export default mailingSystem;
