import { Notification } from '../../src/application/entities/notification/notification';
import { NotificationsRepository } from '../../src/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
