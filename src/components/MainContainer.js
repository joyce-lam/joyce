import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import BodyContainer from "./BodyContainer";


export default class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			github: `https://github.com/joyce-lam`,
			linkedin: `https://www.linkedin.com/in/joycesnlam/`,
			ghlogo: `https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png`,
			lnlogo: `https://image.freepik.com/free-icon/linkedin-logo-ios-7-interface-symbol_318-33633.jpg`
		};
	}

	handleClick = (event) => {
		event.preventDefault();
	}


	render() {
	        return (
	            <div>
	            	<Banner />
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