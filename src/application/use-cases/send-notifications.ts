import { NotificationsRepository } from '@repositories/notifications-repository';
import { Content } from '@application/entities/content/content';
import { Notification } from '@application/entities/notification/notification';
import { Injectable } from '@nestjs/common';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ISendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, recipientId, content } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    await this.notificationsRepository.create(notification);
    return {
      notification,
    };
  }
}
