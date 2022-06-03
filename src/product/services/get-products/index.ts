import { IProductRepository } from "../../IProductRepository";

export class GetAllProductsService {
  constructor(private productsRepository: IProductRepository) {}

  async run() {
    const products = await this.productsRepository.findAll();

    return products;
  }
}
