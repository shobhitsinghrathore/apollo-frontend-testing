import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Product from './Product';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component

if (process.env.NODE_ENV === 'development') {
  const { loadErrorMessages, loadDevMessages } = require("@apollo/client/dev");
  loadDevMessages();
  loadErrorMessages();
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Test</h1>
        <ErrorBoundary>
          <Product />
        </ErrorBoundary>
      </div>
    </ApolloProvider>
  );
}

export default App;
