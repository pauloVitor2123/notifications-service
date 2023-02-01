import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
