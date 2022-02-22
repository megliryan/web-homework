import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes'
import { ApolloProvider } from '@apollo/client'
import { client } from './network/apollo-client'
import TxTable from './components/transactions/TxTable'

ReactDOM.render(
  (
    <div data-app-init=''>
      <ApolloProvider client={client}>
        {/* <AppRouter /> */}
        <TxTable />
      </ApolloProvider>
    </div>
  ),
  document.getElementById('react-app')
)
