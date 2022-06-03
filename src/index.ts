import "./mongoDbConnection";

import { ProductRepositoryInMemory } from "./product/ProductRepositoryInMemory";
import { ProductRepository } from "./product/ProductRepository";
import { CreateProductService } from "./product/services/create";
import { GetAllProductsService } from "./product/services/get-products";

// Create some products and list all
async function exec() {
  // const productRepository = new ProductRepositoryInMemory();
  const productRepository = new ProductRepository();
  const createProduct = new CreateProductService(productRepository);

  const getAllProducts = new GetAllProductsService(productRepository);

  const products = [
    {
      name: `PC gamer - ${Math.random()}`,
      value: 1000,
      description: "PC gamer com led rgb",
    },
    {
      name: `PC gamer2 - ${Math.random()}`,
      value: 1000,
      description: "PC gamer com led rgb",
    },
    {
      name: `Luz RGB - ${Math.random()}`,
      value: 89,
      description: "Led de todas as cores",
    },
  ];

  for (const product of products) {
    await createProduct.run(product);
  }

  const allProducts = await getAllProducts.run();
  console.table(allProducts);
}

exec();
