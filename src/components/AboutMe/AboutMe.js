import React from "react";
import "./AboutMe.css";
import githublogo from "./githublogo.png";
import linkedinlogo from "./linkedin.png";
console.log(githublogo)
console.log(linkedinlogo)

const AboutMe = props => (
	<div className="container" id="about-me">
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 text-center" id="about-head">
				<h2>ABOUT ME</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-12 text-center" id="description">
				<p>Hi! My name is Joyce. I was born and raised in Hong Kong. Moved to Australia for college and went back to Hong Kong for work before I moved to San Francisco a few months ago.</p>
				<p>I am a full-stack engineer with a strong healthcare background. From my days as a clinical dietitian to a health lecturer to a software developer, I have taken delight in thinking on behalf of my customers and creating delightful experiences.</p>
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-6 social text-center" >
				<a href={props.githublink}><img className="logo" alt="github" src={githublogo}></img></a>
			</div>
			<div className="col-xs-12 col-sm-12 col-md-6 social text-center">
				<a href={props.linkedinlink}><img className="logo" alt="linkedin" src={linkedinlogo}></img></a>
			</div>
		</div>
	</div>

);

export default AboutMe;