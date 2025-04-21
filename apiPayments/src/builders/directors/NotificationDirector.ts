import { INotificationBuilder } from "../interfaces/INotificationBuilder";


export class NotificationDirector<T> {
  private builder!: INotificationBuilder<T>;

  setBuilder(builder: INotificationBuilder<T>) {
    this.builder = builder;
  }

  construct(configure: (builder: INotificationBuilder<T>) => void): T {
    this.builder.reset();
    configure(this.builder);
    return this.builder.build();
  }
}
