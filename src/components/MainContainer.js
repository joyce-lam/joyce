import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import BodyContainer from "./BodyContainer";
import images from "../images.js";

export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			github: `https://github.com/joyce-lam`,
			linkedin: `https://www.linkedin.com/in/joycesnlam/`,			
			ghlogo: images[1].github,
			lnlogo: images[2].linkedin,
			map: images[0].worldmap
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
	            	onClick={this.handleClick}
	            	ghlogo={this.state.ghlogo}
	            	lnlogo={this.state.lnlogo}
	            	/>
	            	<BodyContainer />
	            </div>
	        );
	    }

}