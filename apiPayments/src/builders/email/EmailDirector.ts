import { EmailBuilder } from './EmailBuilder';

export class EmailDirector {
  constructor(private builder: EmailBuilder) {}

  constructFullEmail(data: any): void {
    this.builder.reset();
    this.builder.setBasicInfo(data);
    this.builder.setOptionalData(data);
  }
}
