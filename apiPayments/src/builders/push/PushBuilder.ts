import { INotificationBuilder } from '../interfaces/INotificationBuilder';
import { PushNotification } from './PushNotification';

export class PushBuilder implements INotificationBuilder {
  private push: PushNotification = new PushNotification();

  reset(): void {
    this.push = new PushNotification();
  }

  setBasicInfo(data: any): void {
    this.push.deviceToken = data.deviceToken;
    this.push.title = data.title;
    this.push.message = data.message;
  }

  setOptionalData(data: any): void {
    this.push.imageUrl = data.imageUrl;
    this.push.clickAction = data.clickAction;
    this.push.priority = data.priority || 'normal';
  }

  getNotification(): PushNotification {
    return this.push;
  }
}
