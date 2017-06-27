import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/style.css';
import Flex from '../node_modules/flexboxgrid/css/flexboxgrid.css';


ReactDOM.render(
  <MuiThemeProvider>
  <div>

  <LandingPage />
  <Layout/>

  </div>
   </MuiThemeProvider>, document.getElementById('root'));
