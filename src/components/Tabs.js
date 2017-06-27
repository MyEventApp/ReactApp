import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Dashboard from './Dashboard';
import '../css/style.css';

const styles = {
  slide: {
    padding: 0,
  },
};

export default class Tabss extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="TabClass">
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab id="TabColor" label="Tab One" value={0} style={{color:'black'}} />
          <Tab label="Tab Two" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
        <Dashboard />

          </div>
          <div style={styles.slide}>
          <h2>dankhnkjbhkihk</h2>
          </div>

        </SwipeableViews>
      </div>
    );
  }
}
