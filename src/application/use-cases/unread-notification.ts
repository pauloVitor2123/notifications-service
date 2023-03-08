import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

interface IUnreadNotificationRequest {
  notificationId: String;
}

type TUnreadNotificationResponse = void;
@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: IUnreadNotificationRequest,
  ): Promise<TUnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
