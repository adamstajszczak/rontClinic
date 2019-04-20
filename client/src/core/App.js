import React, { Component } from 'react';
import AppContainer from './AppContainer';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import * as actions from '../actions';
import { connect } from 'react-redux';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const theme = createMuiTheme({
  palette: {
    primary: { main: '#5695d1', rgb: '86, 149, 209' }
  }
});

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AppContainer />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  null,
  actions
)(App);
