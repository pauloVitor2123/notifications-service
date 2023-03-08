import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients notification', () => {
  it('should be able to count notifications recipient', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const idA = randomUUID();
    notificationsRepository.create(makeNotification({ recipientId: idA }));
    notificationsRepository.create(makeNotification({ recipientId: idA }));
    notificationsRepository.create(makeNotification());

    expect(
      notificationsRepository.notifications.filter((n) => n.recipientId === idA)
        .length,
    ).toEqual(2);
  });
  it('should be able to return 0 notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const idA = randomUUID();

    expect(
      notificationsRepository.notifications.filter((n) => n.recipientId === idA)
        .length,
    ).toEqual(0);
  });
});
