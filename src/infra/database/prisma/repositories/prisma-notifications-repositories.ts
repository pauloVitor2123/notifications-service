import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const data = {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readtAt: notification.readAt,
      createdAt: notification.createdAt,
    };
    await this.prismaService.notification.create({ data });
  }
}
