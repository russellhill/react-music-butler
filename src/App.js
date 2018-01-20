import React, { Component } from 'react';
import './App.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavigationBar from './components/navigationbar.js';
import TopSearchBar from './components/searchbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <NavigationBar />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <TopSearchBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
