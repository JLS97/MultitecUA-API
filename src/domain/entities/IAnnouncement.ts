export interface IAnnouncement {
  id: string,
  title: string,
  description: string,
  announcer: string,
  createdAt: Date,
  likes: Array<string>,
  comments: Array<string>
}