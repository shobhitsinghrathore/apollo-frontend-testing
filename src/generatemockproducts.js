export const generateMockProducts = (n) => {
    const products = [];
    for (let i = 1; i <= n; i++) {
      products.push({
        _id: `${i}`,
        name: `Product ${i}`,
        price: i * 100,
      });
    }
  
    return products;
  };
  