import React from 'react';
import {Link} from 'react-router-dom';
import DateTimeField from 'react-bootstrap-datetimepicker';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import backbutton from '../images/back-button.png';
import {Button} from 'react-bootstrap';
import SwipeableViews from 'react-swipeable-views';
import { Form,FormGroup,FormControl,Col,ControlLabel } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  paper:{
    background:'#E0E0E0',
    height: '100%',
    width: '100%',
    border:'1px solid',
    marginTop:'11px',
    marginBottom:'11px',
    borderRadius: '13px',
    borderColor:'#BDC3C7',
  },
  heading:{
    marginLeft: '25px',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 20,
  },
  FormGroup:{
   margin: '0px',
   marginTop: '10px',
   marginBottom: '10px'
  },
  button1:{
    background: '#FFD93A ',
    float:'right'
  },
  addbutton:{
    marginRight:'10px',
    float:'right'
  },
  uploadbutton:{
    marginRight:'10px',
    float:'right'
  },
  radioButton: {
    marginBottom: '16px',
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      inputFormat: "DD/MM/YY h:mm A",
      inputFormat1: "h:mm A",
      inputFormat2: "DD/MM/YY",
      dateTime: "moment().format('x')"    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
       const {dateTime, inputFormat, inputFormat1, inputFormat2} = this.state;
    return (
      <div className='col-xs-12 section'>
      <div className='row'>
      <div className='col-xs-3'>
      <Link to='/'>
      <p><img src={backbutton} style={{width:'40%',marginTop:"5px"}}/></p>
      </Link>
      </div>
      <div className='col-xs-9'>
      <h4 style={styles.heading}><b>Create Event</b></h4>
      </div>
      </div>
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          inkBarStyle={{background: '#000000 '}}
          tabItemContainerStyle={{background:'#FFD93A'}}
        >
          <Tab label="1" value={0} />
          <Tab label="2" value={1} />
          <Tab label="3" value={2} />
          <Tab label="4" value={3} />
          <Tab label="5" value={4} />
          <Tab label="6" value={5} />
          <Tab label="7" value={6} />
          <Tab label="8" value={7} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >

        <div className='col-xs-12'>
        <h4><b>Add Event</b></h4>
        <Paper style={styles.paper}>
       <Form horizontal style={{fontSize:'12px'}}>
        <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
          Event Name
         </Col>
         <Col xs={8}>
          <FormControl type="text" />
         </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
          Owner
         </Col>
         <Col xs={8}>
          <FormControl type="text"/>
         </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
         Company
         </Col>
         <Col xs={8}>
          <FormControl type="text"/>
         </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
          Location
         </Col>
         <Col xs={8}>
          <FormControl type="text" />
         </Col>
        </FormGroup>
        <FormGroup id="formHorizontalEmail1" bsSize='small'style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
          Start Date & Time
         </Col>
         <Col xs={8}>
         <DateTimeField
         inputFormat={inputFormat}/>
         </Col>
        </FormGroup>
        <FormGroup id="formHorizontalEmail2" bsSize='small'style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
          End Date & Time
         </Col>
         <Col xs={8}>
         <DateTimeField
         inputFormat={inputFormat}/>
         </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
         TimeZone
         </Col>
         <Col xs={8}>
          <FormControl type="date" />
         </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
         Description
         </Col>
         <Col xs={8}>
          <FormControl type="text" placeholder="NA"/>
         </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
        Event Image
        </Col>
        <Col xs={5}>
        <FormControl type="text" />
        </Col>
        <Col xs={3}>
        <Button bsSize='small' style={styles.button1} >Browse</Button>
        </Col>
        </FormGroup>
        </Form>
        </Paper>
        <Button bsSize='medium' style={styles.button1}>Save and Next</Button>
       </div>

       <div className='col-xs-12'>
       <h4><b>Add Agenda</b></h4>
       <Paper style={styles.paper}>
       <Form horizontal style={{fontSize:'12px'}}>
       <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Agenda Name
       </Col>
       <Col xs={8}>
       <FormControl type="text" />
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Date
       </Col>
       <Col xs={8}>
       <DateTimeField
       inputFormat={inputFormat2}/>
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Start Time
       </Col>
       <Col xs={8}>
       <DateTimeField
       inputFormat={inputFormat1}/>
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       End Time
       </Col>
       <Col xs={8}>
       <DateTimeField
       inputFormat={inputFormat1}/>
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Venue
       </Col>
       <Col xs={8}>
       <FormControl type="text"  />
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Description
       </Col>
       <Col xs={8}>
       <FormControl type="text" />
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Event Lead Details
       </Col>
       <Col xs={8}>
       <FormControl type="text" />
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Lead Name
       </Col>
       <Col xs={8}>
       <FormControl type="text" />
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Email ID
       </Col>
       <Col xs={8}>
       <FormControl type="email" />
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Designation
       </Col>
       <Col xs={8}>
       <FormControl type="text" />
       </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Profile Photo
       </Col>
       <Col xs={5}>
       <FormControl type="text" />
       </Col>
       <Col xs={3}>
       <Button bsSize='small' style={styles.button1} >Browse</Button>
       </Col>
       </FormGroup>
       </Form>
       </Paper>
       <Button bsSize='medium' style={styles.button1}>Save and Next</Button>
       <Button bsSize='medium' style={styles.addbutton}>Add More</Button>
       </div>

       <div className='col-xs-12'>
       <h4><b>Add Speakers</b></h4>
       <Button  style={styles.button}>Select Agenda</Button>
      <Paper style={styles.paper}>
    <Form horizontal style={{fontSize:'12px'}}>
      <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
       Agenda Name
        </Col>
        <Col xs={8}>
          <FormControl type="text" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
         Image
        </Col>
        <Col xs={8}>
          <FormControl type="URL"/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
         Speaker Email ID
        </Col>
        <Col xs={8}>
          <FormControl type="email"/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
         Designation
        </Col>
        <Col xs={8}>
          <FormControl type="text" />
        </Col>
      </FormGroup>
      </Form>
     </Paper>
     <Button bsSize='medium' style={styles.button1}>Save and Next</Button>
     <Button bsSize='medium' style={styles.addbutton}>Add More</Button>
    </div>

    <div className='col-xs-12'>
    <h4><b>Contact Person Detail</b></h4>
    <Paper style={styles.paper}>
  <Form horizontal style={{fontSize:'12px'}}>
    <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
      <Col componentClass={ControlLabel} xs={4}>
        Person Name
      </Col>
      <Col xs={8}>
        <FormControl type="text" />
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
      <Col componentClass={ControlLabel} xs={4}>
        Email ID
      </Col>
      <Col xs={8}>
        <FormControl type="email"/>
      </Col>
    </FormGroup>
    <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
      <Col componentClass={ControlLabel} xs={4}>
     Contact
      </Col>
      <Col xs={8}>
        <FormControl type="number"/>
      </Col>
    </FormGroup>
    </Form>
   </Paper>
   <Button bsSize='medium' style={styles.button1}>Save and Next</Button>
   <Button bsSize='medium' style={styles.addbutton}>Add More</Button>
  </div>

  <div className='col-xs-12'>
  <h4><b>Documents/Notice</b></h4>
  <Paper style={styles.paper}>
  <Form horizontal style={{fontSize:'12px'}}>
  <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
<Col componentClass={ControlLabel} xs={12}>
 Document
</Col>
<Col xs={8}>
 <FormControl type="text" />
</Col>
<Col xs={4}>
<Button bsSize='small' style={styles.button1} >Browse</Button>
</Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
 <Col componentClass={ControlLabel} xs={12}>
   Notice/Message
 </Col>
 <Col xs={12}>
 <FormControl componentClass="textarea"/>
 </Col>
</FormGroup>
</Form>
</Paper>
<Button bsSize='medium' style={styles.button1}>Save and Next</Button>
<Button bsSize='medium' style={styles.uploadbutton}>Upload</Button>
</div>

<div className='col-xs-12'>
<h4><b>Images</b></h4>
<Paper style={styles.paper}>
<Form horizontal style={{fontSize:'12px'}}>
 <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={12}>
     Document
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
   <Col xs={4}>
   <Button bsSize='small' style={styles.button1} >Browse</Button>
   </Col>
   </FormGroup>
   <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
     <Col componentClass={ControlLabel} xs={12}>
     <Button bsSize='small' style={styles.button1} >Add More</Button>
     </Col>
   </FormGroup>
</Form>
</Paper>
<Button bsSize='medium' style={styles.button1}>Save and Next</Button>
<Button bsSize='medium' style={styles.uploadbutton}>Upload</Button>
</div>

<div className='col-xs-12'>
<h4><b>Add Sponsors</b></h4>
<Paper style={styles.paper}>
<Form horizontal style={{fontSize:'12px'}}>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
  <Col componentClass={ControlLabel} xs={4}>
    Sponsors Name
  </Col>
  <Col xs={8}>
    <FormControl type="text" />
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
  <Col componentClass={ControlLabel} xs={4}>
    Company Logo
  </Col>
  <Col xs={8}>
    <FormControl type="text"/>
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
  <Col componentClass={ControlLabel} xs={4}>
   Email ID
  </Col>
  <Col xs={8}>
    <FormControl type="email"/>
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
  <Col componentClass={ControlLabel} xs={4}>
    Contact Number
  </Col>
  <Col xs={8}>
    <FormControl type="number" />
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
  <Col componentClass={ControlLabel} xs={4}>
    Description
  </Col>
  <Col xs={8}>
    <FormControl type="text"  />
  </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
  <Col componentClass={ControlLabel} xs={4}>
Website URL
  </Col>
  <Col xs={8}>
    <FormControl type="URL" />
  </Col>
</FormGroup>
</Form>
</Paper>
<Button bsSize='medium' style={styles.button1}>Save and Next</Button>
<Button bsSize='medium' style={styles.addbutton}>Add More</Button>
</div>

<div className='col-xs-12'>
<h4><b>Send Invites</b></h4>
<Paper style={styles.paper}>
<Form horizontal style={{fontSize:'12px'}}>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
<Col componentClass={ControlLabel} xs={4}>
Event Type
</Col>
<Col xs={8}>
<RadioButtonGroup name="shipSpeed" defaultSelected="light">
<RadioButton
  value="light"
  label="Open"
  style={styles.radioButton}
  iconStyle={{fill: '#FFD93A'}}
/>
<RadioButton
  value="not_light"
  label="Invite Only"
  style={styles.radioButton}
  iconStyle={{fill: '#FFD93A'}}
/>
</RadioButtonGroup>
</Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
<Col componentClass={ControlLabel} xs={4}>
Number Of Invitees
</Col>
<Col xs={8}>
<FormControl type="text" />
</Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
<Col componentClass={ControlLabel} xs={4}>
Invitee Name
</Col>
<Col xs={6}>
<FormControl type="text"/>
</Col>
<Col xs={2}>
</Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
<Col componentClass={ControlLabel} xs={4}>
Invitee List
</Col>
<Col xs={8}>
<FormControl type="text"/>
</Col>
</FormGroup>
</Form>
</Paper>
<Button bsSize='medium' style={styles.button1}>Send</Button>
</div>
</SwipeableViews>
      </div>
      </div>
    );
  }
}
