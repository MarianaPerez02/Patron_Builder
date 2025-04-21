export interface INotificationBuilder {
    reset(): void;
    setBasicInfo(data: any): void;
    setOptionalData?(data: any): void;
    getNotification(): any;
  }
  