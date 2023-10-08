import { UsersNotifications } from "../../../domain/entities/Users/IUsersNotifications";
import { getNotificationsService } from "../../../infraestructure/services/getNotificationsService";
import { onUserDeleted } from "./onUserDeleted";
import { onUserRegistered } from "./onUserRegistered";
import { onUserUpdated } from "./onUserUpdated";

const notificationsService = getNotificationsService();
// const loggerService = getLoggerService();

export const registerUserNotifications = () => {
    notificationsService.on(
        UsersNotifications.USER_CREATED, 
        onUserRegistered(
            //{loggerService}
        )
    );
    notificationsService.on(
        UsersNotifications.USER_UPDATED, 
        onUserUpdated(
             //{loggerService}
        )
    );
    notificationsService.on(
        UsersNotifications.USER_DELETED, 
        onUserDeleted()
    );
    // notificationsService.on(
    //     UsersNotifications.USER_ROL_UPADTED, 
    //     onUserRolUpdated(
    //         //{loggerService}
    //     )
    // );
}
