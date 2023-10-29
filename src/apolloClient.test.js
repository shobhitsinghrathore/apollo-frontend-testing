// import React from 'react';
// import { render } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import client from './apolloClient';
// import Product from './Product';

// jest.mock('@apollo/client');

// describe('Apollo Client Configuration', () => {
//   it('should create an ApolloClient instance with the correct URI and cache', () => {
//     render(
//       <MockedProvider mocks={[]}>
//         {/* Your component that uses the ApolloClient */}
//         <Product/>
//       </MockedProvider>
//     );

//     // Verify that the ApolloClient constructor was called with the expected configuration
//     expect(ApolloClient).toHaveBeenCalledWith({
//       uri: 'http://localhost:4000/graphql',
//       cache: new InMemoryCache(),
//     });
//   });

//   it('should export the ApolloClient instance', () => {
//     expect(client).toBeInstanceOf(ApolloClient);
//   });
// });


// import React from 'react';
// import { render } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';
// import Product from './Product';
// import ErrorBoundary from './ErrorBoundary'; // Import your ErrorBoundary component
// // import { mocks } from './mocks';

// jest.mock('@apollo/client');

// describe('Apollo Client Configuration', () => {
//   it('should create an ApolloClient instance with the correct URI and cache', () => {
//     render(
//       <MockedProvider mocks={[]}>
//         <ErrorBoundary>
//           <Product />
//         </ErrorBoundary>
//       </MockedProvider>
//     );
//   });
// });

// import React from 'react';
// import { render } from '@testing-library/react';
// import { MockedProvider } from '@apollo/client/testing';
// import client from 'apolloClient'; // Import ApolloClient from correct path
// import Product from './Product'; // Import your Product component

// jest.mock('apolloClient'); // Mock ApolloClient

// describe('Apollo Client Configuration', () => {
//   it('should create an ApolloClient instance with the correct URI and cache', () => {
//     render(
//       <MockedProvider mocks={[]}>
//         <Product />
//       </MockedProvider>
//     );

//     expect(client).toHaveBeenCalledWith({
//       uri: 'http://localhost:4000/graphql',
//       cache: expect.anything(), // You can use expect.anything() if you don't need to match the exact cache instance
//     });
//   });
// });




import { ApolloClient, InMemoryCache } from '@apollo/client';
import client from './apolloClient';

describe('Apollo Client Configuration', () => {
  it('should create an ApolloClient instance with the correct URI and cache', () => {
    expect(client).toBeInstanceOf(ApolloClient); 

    const expectedUri = 'http://localhost:4000/graphql';
    const expectedCache = new InMemoryCache();

    
    expect(client?.link?.options?.uri).toBe(expectedUri); 
    expect(client.cache instanceof InMemoryCache).toBe(true);
  });
});



