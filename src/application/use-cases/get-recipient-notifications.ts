import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface IGetRecipientNotificationRequest {
  recipientId: String;
}

type TGetRecipientNotificationResponse = {
  notifications: Notification[]
};
@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: IGetRecipientNotificationRequest,
  ): Promise<TGetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications
    }
  }
}
