import { Content } from "@application/entities/content/content";
import { INotificationProps, Notification } from "@application/entities/notification/notification";
import { randomUUID } from "crypto";

type TOverrideProps = Partial<INotificationProps>;
export function makeNotification(override: TOverrideProps = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: randomUUID(),
    ...override
  });
}