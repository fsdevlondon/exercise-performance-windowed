import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Windowing from './components'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <Windowing />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}
