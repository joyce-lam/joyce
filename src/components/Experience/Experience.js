import React from "react";
import "./Experience.css";
import cplanding from "./CPLanding.png";
import portfoliopic from "./Your_Portfolio.png";
import walletpic from "./Your_Wallet.png";
import managepic from "./Manage_Your_Account.png";
import sidebarpic from "./Sidebar.png";
import sslanding from "./SSlanding.png";
import sshome from "./SShome.png";

const Experience = () => (
	<div className="col-12 text-center" id="experience">
		<h2>EXPERIENCE</h2>
		<div id="period">
			<p>2018</p>
			<p>Software Engineer</p>
			<p>CryptoPortfolio Project</p>
			<div className="content">
				<p>A service for managing a portfolio of cryptocurrencies.</p>
				<p>Built a restful service API with Node.js + Express backend and React frontend.</p>
				<p>Designed a downstream request caching and throttling mechanism using Redis cache for sensitive API services.</p>
				<p>Implemented JSON Web Token (JWT) as a stateless authorization mechanism.</p>
				<p>Designed data persistence model and query layer in MySQL with Sequelize ORM.</p>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-6 text-center">
						<img className="proj-pic" alt="cp-landing" src={cplanding}></img>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 text-center">
						<img className="proj-pic" alt="cp-portfolio" src={portfoliopic}></img>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-6 text-center">
						<img className="proj-pic" alt="cp-wallet" src={walletpic}></img>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 text-center">
						<img className="proj-pic" alt="cp-manage" src={managepic}></img>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-6 text-center">
						<img className="proj-pic" alt="cp-sidebar" src={sidebarpic}></img>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<p>SeatSwap Project</p>
			<div className="content">
				<p>A real-time marketplace for ticket swaps between season ticket subscribers.</p>
				<p>Built with Node.js + Express backend and React frontend.</p>
				<p>Authenticated users using OAuth 2.0 with passport.js authentication middleware via social networks pke Google and Facebook.</p>
				<p>Designed data persistence model and query layer in MySQL with Sequelize ORM.</p>
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-md-6 text-center">
						<img className="proj-pic" alt="ss-landing" src={sslanding}></img>
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6 text-center">
						<img className="proj-pic" alt="ss-home" src={sshome}></img>
					</div>
				</div>
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