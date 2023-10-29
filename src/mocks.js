import { GET_PRODUCTS } from './queries';
import { generateMockProducts } from './generatemockproducts';

export const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: {
        productList: generateMockProducts(5), // Adjust the number of products as needed
      },
    },
  },
];
