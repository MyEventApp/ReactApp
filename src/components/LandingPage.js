import React, { Component} from 'react';
import { Button } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import Dashboard from './Dashboard';
import Filter from '../images/Filter.png';
import Search from '../images/search.png';

import '../css/style.css';

const styles = {
  button:{
    background: '#FFD93A',
  }
};

const LandingPage = () => (
  <div className='col-xs-12 section'>
  <div className='row' >
    <div className='col-xs-6'>

     <Button block active bsSize='small' style={styles.button}>Upcoming Events</Button>

    </div>
    <div className='col-xs-6'>

    <Button block active bsSize='small' >Past Events</Button>

    </div>
  </div>
  <div className='row'>
    <img src={Search} style={{height:'10%',width:'10%',marginLeft:'77%',marginTop:'10px'}} />

    <img src={Filter} style={{height:'10%',width:'10%',marginTop:'10px'}} />
  </div>
  <div className='row'>
  <Dashboard />
  </div>

  </div>
);

export default LandingPage;
