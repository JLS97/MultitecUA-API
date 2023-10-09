import { EventsNotifications } from "../../../domain/entities/Events/IEventsNotifications";
import { getNotificationsService } from "../../../infraestructure/services/getNotificationsService";
import { onEventCreated } from "./onEventCreated";
import { onEventDeleted } from "./onEventDeleted";
import { onEventMarkedAsAssist } from "./onEventMarkedAsAssit";
import { onEventUpdated } from "./onEventUpdated";

const notificationsService = getNotificationsService();
// const loggerService = getLoggerService();

export const registerEventsNotifications = () => {
    notificationsService.on(
        EventsNotifications.EVENT_CREATED, 
        onEventCreated(
            //{loggerService}
        )
    );
    notificationsService.on(
        EventsNotifications.EVENT_UPDATED,
        onEventUpdated(
             //{loggerService}
        )
    );
    notificationsService.on(
        EventsNotifications.EVENT_DELETED, 
        onEventDeleted()
    );
    notificationsService.on(
         EventsNotifications.EVENT_MARKED_AS_ASSIST, 
         onEventMarkedAsAssist()
    );
}
