import { UsersNotifications } from "../../../domain/entities/Users/IUsersNotifications";
import { getNotificationsService } from "../../../infraestructure/services/getNotificationsService";
import { onUserRegistered } from "./onUserRegistered";

const notificationsService = getNotificationsService();
// const loggerService = getLoggerService();

export const registerUserNotifications = () => {
    console.log('registerUserNotifications');
    notificationsService.on(
        UsersNotifications.USER_CREATED, 
        onUserRegistered(
            //{loggerService}
        )
    );
    // notificationsService.on(
    //     UsersNotifications.USER_UPDATED, 
    //     onUserUpdated(
    //         //{loggerService}
    //     )
    // );
    // notificationsService.on(
    //     UsersNotifications.USER_DELETED, 
    //     onUserDeleted(
    //         //{loggerService}
    //     )
    // );
    // notificationsService.on(
    //     UsersNotifications.USER_ROL_UPADTED, 
    //     onUserRolUpdated(
    //         //{loggerService}
    //     )
    // );
}
