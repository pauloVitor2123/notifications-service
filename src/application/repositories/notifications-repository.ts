import { Notification } from '@application/entities/notification/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: String): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countByRecipientId(recipientId: String): Promise<number>;
  abstract findManyByRecipientId(recipientId: String): Promise<Notification[]>;
}
