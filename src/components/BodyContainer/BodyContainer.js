import React from "react";
import "./BodyContainer.css";
import Experience from "../Experience";
import Education from "../Education";

const BodyContainer = () => (
	<div className="container">
		<div id="body-container1">
			<Experience />
		</div>
		<div id="body-container2">
			<Education />
		</div>
	</div>
);

export default BodyContainer;