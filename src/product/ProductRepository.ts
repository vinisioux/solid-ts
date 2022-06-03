import { Product } from "./entity";
import { CreateProductParams, IProductRepository } from "./IProductRepository";
import { mongoose } from "../mongoDbConnection";

export class ProductRepository implements IProductRepository {
  private product = mongoose.model(
    "products",
    new mongoose.Schema({
      id: String,
      name: String,
      value: Number,
      description: String,
    })
  );

  async create({
    name,
    value,
    description,
  }: CreateProductParams): Promise<void> {
    const product = new Product();

    await this.product.create({
      ...product,
      name,
      value,
      description,
    });
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = await this.product.findOne({ name });
    return product;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.product.find();
    const productsArray = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        value: product.value,
        description: product.description,
      };
    });
    return productsArray;
  }

  async delete(id: string): Promise<void> {
    await this.product.deleteOne({ id });
  }
}
