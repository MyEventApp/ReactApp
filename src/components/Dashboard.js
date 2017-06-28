  import React, { Component} from 'react';
  import {Link} from 'react-router-dom';
  import {Card, CardMedia, CardText} from 'material-ui/Card';
  import Paper from 'material-ui/Paper';
  import IconButton from 'material-ui/IconButton';
  import img1 from '../images/bg-slide-01.jpg';
  import img2 from '../images/eventt-image2.png';
  import img3 from '../images/eventt-image3.png';
  import img4 from '../images/eventt-image4.png';
  import calendar from '../images/calender.png';
  import location from '../images/location.png';
  import '../css/style.css';

  const styles={
    paper:{
        background:'#E0E0E0',
        height: '100%',
        border:'1px solid',
        //marginTop:'11px',
        marginBottom:'11px',
        // borderRadius: '13px',
        borderColor:'#BDC3C7',
    },
    content:{
      marginLeft:'6px',
    },
    dashboard:{
      marginTop: '10px',
    }
  };

  class Dashboard extends Component  {
    render() {

    return (
    <div className='col-xs-12' style={styles.dashboard}>
    <Link to='/details'>
    <div>
    <Paper zDepth={1} rounded={true} style={styles.paper}>
    <div className='row'>
    <div className='col-xs-8'>
    <p style={styles.content}><strong>Event Name</strong></p>
    <p><img src={calendar} style={{width:'12%'}}/>Date</p>
    <p><img src={location} style={{width:'12%'}}/>Location</p>
    </div>
    <div className='col-xs-4'>
     <img src={img1} alt="image not found" style={{height:'100%',width:'100%', padding:'2px'}}/>
   </div>
   </div>
   </Paper>
   </div>

   <div>
   <Paper zDepth={1} rounded={true} style={styles.paper}>
   <div className='row'>
   <div className='col-xs-8'>
   <h6 style={styles.content}><strong>Event Name</strong></h6>
   <h6><img src={calendar} style={{height:'12%',width:'12%'}}/>Date</h6>
   <h6><img src={location} style={{height:'12%',width:'12%'}}/>Location</h6>
   </div>
   <div className='col-xs-4'>
    <img src={img1} alt="image not found" style={{height:'100%',width:'100%', padding:'2px'}}/>
  </div>
  </div>
  </Paper>
  </div>


  <div>
  <Paper zDepth={1} rounded={true} style={styles.paper}>
  <div className='row'>
  <div className='col-xs-8'>
  <h5 style={styles.content}><strong>Event Name</strong></h5>
  <h5><img src={calendar} style={{width:'12%'}}/>Date</h5>
  <h5><img src={location} style={{width:'12%'}}/>Location</h5>
  </div>
  <div className='col-xs-4'>
   <img src={img1} alt="image not found" style={{height:'100%',width:'100%', padding:'2px'}}/>
 </div>
 </div>
 </Paper>
 </div>

 <div>
 <Paper zDepth={1} rounded={true} style={styles.paper}>
 <div className='row'>
 <div className='col-xs-8'>
 <h5 style={styles.content}><strong>Event Name</strong></h5>
 <h5><img src={calendar} style={{width:'12%'}}/>Date</h5>
 <h5><img src={location} style={{width:'12%'}}/>Location</h5>
 </div>
 <div className='col-xs-4'>
  <img src={img1} alt="image not found" style={{height:'100%',width:'100%', padding:'2px'}}/>
</div>
</div>
</Paper>
</div>

<div>
<Paper zDepth={1} rounded={true} style={styles.paper}>
<div className='row'>
<div className='col-xs-8'>
<h5 style={styles.content}><strong>Event Name</strong></h5>
<h5><img src={calendar} style={{width:'12%'}}/>Date</h5>
<h5><img src={location} style={{width:'12%'}}/>Location</h5>
</div>
<div className='col-xs-4'>
 <img src={img1} alt="image not found" style={{height:'100%',width:'100%', padding:'2px'}}/>
</div>
</div>
</Paper>
</div>
</Link>

   </div>
  );
  }
  }
  export default Dashboard;
