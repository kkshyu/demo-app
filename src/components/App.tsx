import { theme, ThemeProvider } from '@chakra-ui/core'
import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
