import React from 'react';

// json
import images from '../../json/images.json';

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact__container">
				{/* <h6 className="contact__h6">Bee free to ask me whatever you want..</h6> */}
				<h2 className="contact__h2">Contact</h2>
				<p className="contact__p">
					Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
				</p>
				<div className="contact__content">
					<div className="contact__img" style={{ backgroundImage: `url(${images.homePage.contact})` }} />
					<form className="contact__form">
						<input className="contact__input" placeholder="Your Name" />
						<input className="contact__input" placeholder="Your Email" />
						<input className="contact__input" placeholder="Subject" />
						<textarea rows="10" className="contact__input" placeholder="Message" />
						<button className="contact__btn" type="submit">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
