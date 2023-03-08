import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get notifications recipient', () => {
  const randomId = randomUUID();

  it('should be able to return notifications recipient', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    notificationsRepository.create(makeNotification({ recipientId: randomId }));
    notificationsRepository.create(makeNotification({ recipientId: randomId }));
    notificationsRepository.create(makeNotification());

    const notifications = notificationsRepository.notifications.filter((n) => n.recipientId === randomId);
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: randomId }),
      expect.objectContaining({ recipientId: randomId })
    ]))
  });
  it('should be able to return 0 notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const notifications = notificationsRepository.notifications.filter((n) => n.recipientId === randomId);
    expect(
      notifications
    ).toHaveLength(0);
  });
});
