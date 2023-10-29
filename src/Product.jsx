// import React from 'react';
// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';

// export const GET_PRODUCTS = gql`
// query{
//     productList {
//       _id
//       name
//       price
//     }
//   }
// `;

// const Product = () => {
//   const { loading, error, data } = useQuery(GET_PRODUCTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {data.productList.map(product => (
//           <li key={product._id}>
//             {product.name} - {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Product;

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './queries'; 

const Product = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.productList.map(product => (
          <li key={product._id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
