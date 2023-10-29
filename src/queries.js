import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    productList {
      _id
      name
      price
    }
  }
`;


