  import React, { Component} from 'react';
  import {Card, CardMedia, CardText} from 'material-ui/Card';
  import img1 from '../images/eventt-image1.png';
  import img2 from '../images/eventt-image2.png';
  import img3 from '../images/eventt-image3.png';
  import img4 from '../images/eventt-image4.png';

  class Dashboard extends Component  {
    render() {
    return (
<div>
      <div>
    <Card >
     <CardText>
    <pre>Event Name <br></br>
    Date<br></br>
    Location
    </pre>
     </CardText>
   <CardMedia>
     <img src={img1} alt="image not found" />
   </CardMedia>
</Card>
</div>
  <div>
  <Card >
<CardText>
<pre>Event Name <br></br>
Date<br></br>
Location
</pre>
</CardText>
<CardMedia>
<img src={img2} alt="image not found" />
</CardMedia>
</Card>
</div>

<div>
    <Card >
  <CardText>
  <pre>Event Name <br></br>
  Date<br></br>
  Location
  </pre>
  </CardText>
  <CardMedia>
  <img src={img3} alt="image not found" />
  </CardMedia>
  </Card>
  </div>

      <div>
      <Card>
    <CardText>
    <pre>Event Name <br></br>
    Date<br></br>
    Location
    </pre>
    </CardText>
    <CardMedia>
    <img src={img4} alt="image not found" />
    </CardMedia>
    </Card>
    </div>
    </div>



  );
  }
  }
  export default Dashboard;
