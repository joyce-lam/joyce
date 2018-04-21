import React from "react";
import "./Experience.css";

const Experience = () => (
	<div className="col-12 text-center" id="experience">
		<h2>EXPERIENCE</h2>
		<div id="period">
			<p>2018</p>
			<p>Software Engineer</p>
			<p>Seat Swap Project</p>
			<ul>
				<li>A real-time marketplace for ticket swaps between season ticket subscribers.</li>
				<li>Built with Node.js + Express backend and React frontend.</li>
				<li>Authenticated users using OAuth 2.0 with passport.js authentication middleware via social networks like Google and Facebook.</li>
				<li>Designed data persistence model and query layer in MySQL with sequelize ORM.</li>
			</ul>
		</div>
		<div id="period">
			<p>2012 - 2017</p>
			<p>Clinical Dietitian</p>
			<p>Hospital Authority (Queen Mary Hospital), Hong Kong</p>
			<ul>
				<li>Delivered group education and individual nutritional counseling in English, Cantonese, and Mandarin to diabetic patients.</li>
				<li>Provided nutrition screening and education to seniors.</li>
				<li>Provided medical nutrition therapy to patients in general medical, orthopaedics, and obstetrics and gynaecology wards.</li>
				<li>Managed cases in a multidisciplinary team.</li>
			</ul>
		</div>
		<div id="period">
			<p>2014 - 2017</p>
			<p>Guest Lecturer</p>
			<p>Hong Kong</p>
			<ul>
				<li>Diabetes Education and Management Course organized by Queen Mary Hospital and The University of Hong Kong (2014-2017).</li>
				<li>L series of A-Z symposium organized by the Hong Kong Society of Endocrinology, Metabolism, and Reproduction (2016 Apr 21).</li>
				<li>Update of Diabetes Management organized by Queen Mary Hospital and The University of Hong Kong (2015 Oct 31).</li>
				<li>Post-graduate Study Day for clinicians organized by the Department of Obstetrics and Gynaecology of The University of Hong Kong (2015 Apr 1).</li>
		</div>
	</div>

);

export default Experience;