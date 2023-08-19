import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './stores/rootReducer.ts'
// import { Provider } from 'react-redux'
const store = configureStore({
  reducer:rootReducer
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </ChakraProvider>
  </React.StrictMode>
)