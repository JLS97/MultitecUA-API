export interface INewsletterRepository {
  save(mail: string): Promise<string>;
  getSuscribedEmails(): Promise<string[] | null>;
}