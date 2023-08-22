import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './stores/rootReducer.js'
import { Provider } from 'react-redux'
const store = configureStore({
  reducer:rootReducer
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
