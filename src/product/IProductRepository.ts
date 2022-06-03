import { Product } from "./entity";

export type CreateProductParams = {
  name: string;
  value: number;
  description?: string;
};

export interface IProductRepository {
  findByName(name: string): Promise<Product | undefined> | Product | undefined;
  findAll(): Promise<Product[]> | Product[];
  create(product: CreateProductParams): Promise<void> | void;
  delete(id: string): void;
}
