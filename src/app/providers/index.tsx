import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'
import type { ReactNode } from 'react'

export const withProviders = (children: ReactNode) => (
  <Provider store={store}>
    <Router>
      {children}
    </Router>
  </Provider>
)