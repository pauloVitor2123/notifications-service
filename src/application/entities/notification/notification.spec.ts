import { Content } from '../content/content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Content('Fulano curtiu sua foto.');
    const notification = new Notification({
      content,
      category: 'social',
      recipientId: '',
    });

    expect(notification).toBeTruthy();
  });
});
