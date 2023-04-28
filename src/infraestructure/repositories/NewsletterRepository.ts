import { INewsletterRepository } from "../../domain/repositories/INewsletterRepository";
import Newsletter from "../database/mongoose/NewsletterSchema";

export class NewsletterRepository implements INewsletterRepository {
  async save(mail: string): Promise<string> {
    const newEmailOnNewsletter = await Newsletter.create({ mail });
    return newEmailOnNewsletter.toObject();
  }
  async getSuscribedEmails(): Promise<string[] | null> {
    const results = await Newsletter.find();
    
    let mails: string[] = [];

    results.forEach(element => {
      if(element.mail) mails.push(element.mail);
    });

    return mails.length > 0 ? mails : null;
  }
}
