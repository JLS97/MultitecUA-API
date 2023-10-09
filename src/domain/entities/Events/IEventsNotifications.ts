import { IEvent } from "./IEvent";

export const EventsNotifications = {
    EVENT_CREATED: 'EVENT_CREATED',
    EVENT_DELETED: 'EVENT_DELETED',
    EVENT_UPDATED: 'EVENT_UPDATED',
    EVENT_MARKED_AS_ASSIST: 'EVENT_MARKED_AS_ASSIST',
} as const;
  
export type EventCreatedNotificationPayload = IEvent;

export type EventMarkedAsAssistNotificationPayload = {id: string, assistedBy: string, assistsCount: number};

export type EventDeletedNotificationPayload = {id: string};

export type EventUpdatedNotificationPayload = {id: string, creator: string};

