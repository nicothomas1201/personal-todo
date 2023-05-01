import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import GlobalStyles from './components/Global-styles.jsx'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/index.jsx'

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
