import React from 'react';
import { Link } from 'react-router-dom';

const OtherProjects = () => {
	return (
		<React.Fragment>
			<div className="singlePost__other--container">
				<div className="singlePost__other--img" />
				<div className="singlePost__other--text">
					<Link className="singlePost__link" to="/">
						Pig game incoming soon. Prepare your self for it!
					</Link>
					<p className="singlePost__date">
						<i className="fas fa-calendar-alt singlePost__date--icon" />March 12, 2019
					</p>
					<p className="singlePost__signature">
						<i className="fas fa-user singlePost__date--icon" />Dejan
					</p>
				</div>
			</div>
			<div className="singlePost__line" />
		</React.Fragment>
	);
};

export default OtherProjects;
