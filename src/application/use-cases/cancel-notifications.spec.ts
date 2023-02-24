import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { randomUUID } from 'crypto';
import { CancelNotification } from './cancel-notifications';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from '@application/entities/notification/notification';
import { Content } from '@application/entities/content/content';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  const notification = new Notification({
    recipientId: randomUUID(),
    category: 'social',
    content: new Content('This is a notification'),
  });

  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    await notificationsRepository.create(notification);
    await cancelNotification.execute({ notificationId: notification.id });
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
  });
  it('should not be able to cancel a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id'
      })
    }).rejects.toThrow(NotificationNotFound)

  })
});
