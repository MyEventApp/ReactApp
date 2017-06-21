import React, { Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import '../css/style.css';
import Tabss from './Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
   render() {
   return (
     <div>
     <section className="section">
     <Tabss />
     </section>
      <header className="header">
       <AppBar title="AppName" onClick={this.handleToggle}>
       </AppBar>
       </header>
       <footer className="footer">
       <AppBar></AppBar>
       </footer>
       <div>
       <Drawer
         docked={false}
         width={200}
         open={this.state.open}
         onRequestChange={(open) => this.setState({open})}
       >
         <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
         <MenuItem onTouchTap={this.handleClose}>Create Event</MenuItem>
         <MenuItem onTouchTap={this.handleClose}>My Events</MenuItem>
         <MenuItem onTouchTap={this.handleClose}>My Schedules</MenuItem>
         <MenuItem onTouchTap={this.handleClose}>Take Notes</MenuItem>
       </Drawer>
       </div>
     </div>
      );
 }
}
export default Layout;
