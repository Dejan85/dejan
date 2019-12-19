import React from 'react';

//json
import images from '../../json/images.json';

const About = () => {
	return (
		<div className="about">
			<div className="about__image" style={{ backgroundImage: `url(${images.homePage.about})` }} />
			<div className="about__content">
				<h6 className="about__h6">Welcome</h6>
				<h2 className="about__h2">About Me</h2>
				<p className="about__p">
					I'm in web programming since 2017. Before programing, I've been working static websites for a long
					time.
				</p>
				<p className="about__p">
					In January of 2018. I completed the course "Krojačeva škola" of web design and web programming,
					section: full stack javascript developer. On course, we did a detailed full javascript ES5, ES6,
					plus node.js and mongoDb.
				</p>
				<p className="about__p">
					Also I degree School of Electrical and Computer Engineering of Applied Studies in the direction of
					New Computer Technology.
				</p>
				<p className="about__p">In a couple of words, I am an IT engineer</p>
				<p className="about__p">
					I really love web programming, and I have strong will for new knowledge and skill. I'm constantly
					learning, and I do not intend to stop. Also, I do not have a problem with learning other IT
					technologies if at some point the company requires it for me.
				</p>
				<p className="about__p">
					My choice of javascript frammworks is React. js, and I have a plan to improve my skill to the
					maximum.
				</p>
				<p className="about__p">My ambitions for the future are mastering MERN steck technologies.</p>
				<p className="about__p">Proud father of litle girl Sara.</p>
			</div>
		</div>
	);
};

export default About;
