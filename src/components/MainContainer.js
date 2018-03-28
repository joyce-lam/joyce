import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import BodyContainer from "./BodyContainer";

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			github: `https://github.com/joyce-lam`,
			linkedin: `https://www.linkedin.com/in/joycesnlam/`
		};
	}

	handleClick = (event) => {
		event.preventDefault();
	}


	render() {
	        return (
	            <div>
	            	<Banner 
	            	map={this.state.map}/>
	            	<AboutMe 
	            	githublink={this.state.github}
	            	linkedinlink={this.state.linkedin}
	            	/>
	            	<BodyContainer />
	            </div>
	        );
	    }

}