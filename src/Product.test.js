// import React from 'react';
// import { render } from '@testing-library/react';
// import Product from './Product';
// import { MockedProvider } from "@apollo/client/testing";
// test('renders Product component', () => {
  
  
//   render
  
//   (
//   <MockedProvider> <Product />   </MockedProvider>
//  );
//   console.log("working"); // This line will be logged if the test runs successfully
// })

// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';
// import Product from './Product';
// import { gql } from '@apollo/client';
//  const GET_PRODUCTS = gql`
//   query GetDog($name: String){
//     productList {
//       _id
//       name
//       price
//     }
//   }
// `;
// it("should render product list correctly", async() => {
  

//   render(
//     <MockedProvider mocks={[{ delay: 30 ,
//       request: {
//         query: GET_PRODUCTS,
//         variables: {
          
//         }
//       },
//       result: {
//         data: {
//           productList:
//             {
//               price: 100,
//             },
           
//         }
//       },
//     }]} addTypename={false} ><Product /></MockedProvider>
//   );

// });

// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';
// import Product, { GET_PRODUCTS } from './Product'; // Import the GET_PRODUCTS query from Product.jsx

// it("should render product list correctly", async() => {
//   const mocks = [
//     {
//       request: {
//         query: GET_PRODUCTS,
//       },
//       result: {
//         data: {
//           productList: [
//             {
//               _id: '1', // Example ID
//               name: 'Product 1',
//               price: 100,
//             },
//             {
//               _id: '2', // Example ID
//               name: 'Product 2',
//               price: 200,
//             },
//             // Add more products as needed
//           ],
//         },
//       },
//     },
//   ];

//   render(
//     <MockedProvider mocks={mocks} addTypename={false}>
//       <Product />
//     </MockedProvider>
//   );

//   // Wait for the loading state to resolve
//   await waitFor(() => {
//     expect(screen.getByText('Product List')).toBeInTheDocument();
//   });

//   // Additional assertions outside of the waitFor callback
//   expect(screen.getByText('Product 1 - 100')).toBeInTheDocument();
//   expect(screen.getByText('Product 2 - 200')).toBeInTheDocument();
//   // Add more assertions based on your UI as needed
// });


// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';
// import Product from './Product';
// import { GET_PRODUCTS } from './queries'; // Import the GET_PRODUCTS query from queries.js

// // Mock the Apollo Client response with n number of products
// const generateMockProducts = (n) => {
//   const products = [];
//   for (let i = 1; i <= n; i++) {
//     products.push({
//       _id: `${i}`,
//       name: `Product ${i}`,
//       price: i * 100,
//     });
//   }

//   return {
//     request: {
//       query: GET_PRODUCTS,
//     },
//     result: {
//       data: {
//         productList: products,
//       },
//     },
//   };
// };

// it("should render product list correctly with n number of products", async () => {
//   const numberOfProducts = 5; // Set the number of products for testing
//   const mocks = [generateMockProducts(numberOfProducts)];

//   render(
//     <MockedProvider mocks={mocks} addTypename={false}>
//       <Product />
//     </MockedProvider>
//   );

//   // Wait for the loading state to resolve
//   await waitFor(() => {
//     expect(screen.getByText('Product List')).toBeInTheDocument();
//   });

//   // Verify that the correct number of products is rendered
//   for (let i = 1; i <= numberOfProducts; i++) {
//     expect(screen.getByText(`Product ${i} - ${i * 100}`)).toBeInTheDocument();
//   }
// });



import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Product from './Product';
import { mocks } from './mocks';

it("should render product list correctly with n number of products", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Product />
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.getByText('Product List')).toBeInTheDocument();
  });

 
  const numberOfProducts = 5; 
  for (let i = 1; i <= numberOfProducts; i++) {
    expect(screen.getByText(`Product ${i} - ${i * 100}`)).toBeInTheDocument();
  }
});


// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';
// import Product from './Product';
// import { mocks } from './mocks';
// import { generateMockProducts } from './generateMockProducts'; 

// it("should render product list correctly with n number of products", async () => {

//   const mockProducts = generateMockProducts(numberOfProducts); 
//   render(
//     <MockedProvider mocks={mocks} addTypename={false}>
//       <Product />
//     </MockedProvider>
//   );

//   await waitFor(() => {
//     expect(screen.getByText('Product List')).toBeInTheDocument();
//   });


//   for (let i = 0; i < numberOfProducts; i++) {
//     const product = mockProducts[i];
//     expect(screen.getByText(`${product.name} - ${product.price}`)).toBeInTheDocument();
//   }
// });

