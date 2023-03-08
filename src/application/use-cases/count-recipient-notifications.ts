import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface ICountRecipientNotificationRequest {
  recipientId: String;
}

type TCountRecipientNotificationResponse = {
  count: number
};
@Injectable()
export class CountRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ICountRecipientNotificationRequest,
  ): Promise<TCountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countByRecipientId(recipientId);

    return {
      count
    }
  }
}
