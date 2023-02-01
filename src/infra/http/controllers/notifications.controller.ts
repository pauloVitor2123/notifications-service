import { SendNotification } from '@application/use-cases/send-notifications';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}
