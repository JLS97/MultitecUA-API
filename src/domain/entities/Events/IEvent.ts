export interface IEvent {
  id: string,
  title: string,
  description?: string,
  host: string,
  city: string,
  place: string,
  createdAt: Date,
  startsAt: Date,
  assistants: Array<string>,
}