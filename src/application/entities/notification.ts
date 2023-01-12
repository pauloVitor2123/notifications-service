import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface INotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: INotificationProps;

  constructor(props: Replace<INotificationProps, { createdAt?: Date }>) {
    const createdAt = props.createdAt ?? new Date();
    this.props = { ...props, createdAt };
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: INotificationProps['readAt']) {
    this.props.readAt = readAt;
  }

  public get readAt(): INotificationProps['readAt'] {
    return this.props.readAt;
  }
}
