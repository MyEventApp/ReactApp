import React,{Component} from 'react';
import Layout from '../components/Layout';
import LandingPage from '../components/LandingPage';

class HomePage extends React.Component{

	render(){
		return(
      <div>
			<LandingPage />
			<Layout/>
			</div>
			);
	}
};

export default HomePage;
