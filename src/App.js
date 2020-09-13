
import React from 'react'

import { AppRouters } from '@pages'
import { ApolloProvider } from 'react-apollo'
import { Client } from '@tools'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'

const App = () => (
  <ApolloProvider client={Client}>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  </ApolloProvider>
)

export default App