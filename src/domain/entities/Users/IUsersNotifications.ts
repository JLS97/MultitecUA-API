import { IUser } from "./IUser";

export const UsersNotifications = {
    USER_CREATED: 'USER_CREATED',
    // USER_UPDATED: 'USER_UPDATED',
    // USER_DELETED: 'USER_DELETED',
    // USER_ROL_UPADTED: 'USER_ROL_UPADTED',
} as const;
  
export type UserCreatedNotificationPayload = IUser;
