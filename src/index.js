import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import './css/index.css';


ReactDOM.render(<div>
  <MuiThemeProvider>
  <div>
  <Layout/>
  </div>
   </MuiThemeProvider>
   </div>, document.getElementById('root'));
