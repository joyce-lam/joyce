import React from "react";
import "./AboutMe.css";
import githublogo from "./github.png";
import linkedinlogo from "./linkedin.png";

const AboutMe = props => (
	<div className="container" id="about-me">
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 text-center" id="about-head">
				<h2>ABOUT ME</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 text-center" id="description">
				<p>Hi! I am Joyce. I was born and raised in Hong Kong. Then I went to Australia for college. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-6 social text-right" >
				<a href={props.githublink}><img alt="github" src={githublogo}></img></a>
			</div>
			<div className="col-xs-12 col-sm-12 col-md-6 social text-left">
				<a href={props.linkedinlink}><img alt="linkedin" src={linkedinlogo}></img></a>
			</div>
		</div>
	</div>

);

export default AboutMe;