import {
  CreateProductParams,
  IProductRepository,
} from "../../IProductRepository";

export class CreateProductService {
  constructor(private productsRepository: IProductRepository) {}

  async run(params: CreateProductParams) {
    const checkIfProductExists = await this.productsRepository.findByName(
      params.name
    );

    if (checkIfProductExists) {
      throw new Error("Product already exists");
    }

    await this.productsRepository.create(params);
  }
}
