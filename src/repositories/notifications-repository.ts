import { Notification } from '@application/entities/notification/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
