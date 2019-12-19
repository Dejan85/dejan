import React from 'react';
import { Link } from 'react-scroll';

const Logo = () => {
	return (
		<Link className="header__logo" to="home" spy={true} smooth={'true'} offset={-150} style={{ cursor: 'pointer', color:"black", borderBottom: "none" }}>
			D
		</Link>
	);
};

export default Logo;
