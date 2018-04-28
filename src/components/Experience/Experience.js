import React from "react";
import "./Experience.css";

const Experience = () => (
	<div className="col-12 text-center" id="experience">
		<h2>EXPERIENCE</h2>
		<div id="period">
			<p>2018</p>
			<p>Software Engineer</p>
			<p>Seat Swap Project</p>
			<div className="content">
				<p>A real-time marketplace for ticket swaps between season ticket subscribers.</p>
				<p>Built with Node.js + Express backend and React frontend.</p>
				<p>Authenticated users using OAuth 2.0 with passport.js authentication middleware via social networks pke Google and Facebook.</p>
				<p>Designed data persistence model and query layer in MySQL with sequepze ORM.</p>
			</div>
		</div>
		<div id="period">
			<p>2012 - 2017</p>
			<p>Clinical Dietitian</p>
			<p>Hospital Authority (Queen Mary Hospital), Hong Kong</p>
			<div className="content">
				<p>Delivered group education and individual nutritional counseling in English, Cantonese, and Mandarin to patients with diabetes.</p>
				<p>Provided nutrition screening and education to seniors.</p>
				<p>Provided medical nutrition therapy to patients in general medical, orthopaedics, and obstetrics and gynaecology wards.</p>
				<p>Managed cases in a multidisciplinary team.</p>
			</div>
		</div>
		<div id="period">
			<p>2014 - 2017</p>
			<p>Guest Lecturer</p>
			<p>Hong Kong</p>
			<div className="content">
				<p>1. Diabetes Education and Management Course organized by Queen Mary Hospital and The University of Hong Kong (2014-2017).</p>
				<p>2. L series of A-Z symposium organized by the Hong Kong Society of Endocrinology, Metabolism, and Reproduction (2016 Apr 21).</p>
				<p>3. Update of Diabetes Management organized by Queen Mary Hospital and The University of Hong Kong (2015 Oct 31).</p>
				<p>4. Post-graduate Study Day for clinicians organized by the Department of Obstetrics and Gynaecology of The University of Hong Kong (2015 Apr 1).</p>
			</div>
		</div>
	</div>

);

export default Experience;