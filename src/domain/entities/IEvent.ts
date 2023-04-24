export interface IEvent {
  title: string,
  description?: string,
  host: string,
  city: string,
  place: string,
  createdAt: Date,
  startsAt: Date,
  finishesAt: Date,
  assistants: Array<string>,
  likes: Array<string>,
}