import { Replace } from '@helpers/Replace';
import { Content } from '../content/content';
import { randomUUID } from 'crypto';

export interface INotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: INotificationProps;

  constructor(props: Replace<INotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    const createdAt = props.createdAt ?? new Date();
    this.props = { ...props, createdAt };
  }

  public get id() {
    return this._id;
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

  public set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
