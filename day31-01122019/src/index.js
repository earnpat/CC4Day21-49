import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

import { Provider } from 'react-redux'
import store from './redux/store/store'

store.subscribe(() => {
  localStorage.setItem('notes', JSON.stringify(store.getState().notes))
})

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)