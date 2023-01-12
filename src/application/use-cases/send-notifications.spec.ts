import { randomUUID } from 'crypto';
import { SendNotification } from './send-notifications';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: randomUUID(),
      category: 'social',
      content: 'This is a notification',
    });

    expect(notification).toBeTruthy();
  });
});
