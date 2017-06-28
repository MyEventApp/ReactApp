import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './views/HomePage';
import EventsPage from './views/EventsPage';
import AgendaPage from './views/AgendaPage';
import './css/style.css';
import Flex from '../node_modules/flexboxgrid/css/flexboxgrid.css';

class App extends React.Component{
  render(){
    return(<div>
      <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={HomePage}/>
          <Route path='/details' component={EventsPage}/>
          <Route path='/agendalist' component={AgendaPage}/>
        </div>
      </BrowserRouter>
       </MuiThemeProvider>
    </div>)
  }
};

ReactDOM.render(<App />
, document.getElementById('root'));
