export type MailSubject = "Announcement" | "Verification" | "Renewal";

export interface IMail {
  to: string,
  subject: string,
  text: string
}
