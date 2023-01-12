import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: ISendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, recipientId, content } = request;

    const notification = new Notification({
      recipientId,
      category,
      content: new Content(content),
    });

    return {
      notification,
    };
  }
}
