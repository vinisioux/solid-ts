import { randomUUID } from "node:crypto";

export class Product {
  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }

  readonly id: string;

  name: string;

  value: number;

  description?: string;
}
