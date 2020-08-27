import './Footer.css';
import React, { useState } from 'react';

function Footer() {
	return (
		<div>
			<footer className="footer-distributed">

				<div className="footer-left">

					<h3>MVC BRAND</h3>

					<p className="footer-links">
						<a href="#" className="link-1">Home</a>

						<a href="#">Blog</a>

						<a href="#">Pricing</a>

						<a href="#">About</a>

						<a href="#">Faq</a>

						<a href="#">Contact</a>
					</p>

					<p className="footer-company-name">MVC BRAND © 2020</p>
				</div>

				<div className="footer-center">

					<div>
						<i className="fa fa-map-marker"></i>
						<p><span>MVC BRAND</span>Adress, City</p>
					</div>

					<div>
						<i className="fa fa-phone"></i>
						<p>+085950821</p>
					</div>

					<div>
						<i className="fa fa-envelope"></i>
						<p><a href="mailto:support@company.com">contact@mvcbrand.com</a></p>
					</div>

				</div>

				<div className="footer-right">

					<p className="footer-company-about">
						<span>About MVC BRAND</span>
						Insert informational text here later
				</p>

					<div className="footer-icons">

						<a href="#"><i className="fa fa-facebook"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-linkedin"></i></a>
						<a href="#"><i className="fa fa-github"></i></a>

					</div>

				</div>

			</footer>
		</div>
	)
}

export default Footer;