import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <div>
    <MuiThemeProvider>
      <AppBar title="Music Submitter"
              iconClassNameRight="muidocs-icon-navigation-expand-more" />
    </MuiThemeProvider>
    <Header />

    <Main />
  </div>
)

export default App
