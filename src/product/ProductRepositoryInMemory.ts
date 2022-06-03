import { Product } from "./entity";
import { CreateProductParams, IProductRepository } from "./IProductRepository";

export class ProductRepositoryInMemory implements IProductRepository {
  private products: Product[] = [];

  create({ name, value, description }: CreateProductParams): void {
    const product = new Product();

    this.products.push({
      ...product,
      name,
      value,
      description,
    });
  }

  findByName(name: string): Product | undefined {
    return this.products.find((product) => product.name === name);
  }

  findAll(): Product[] {
    return this.products;
  }

  delete(id: string): void {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex === -1) {
      throw new Error("Product not found");
    }

    this.products.splice(productIndex, 1);
  }
}
