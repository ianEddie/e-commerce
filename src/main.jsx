import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './Styles/index.css'
import { FiltersProvider } from './Context/filters'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
