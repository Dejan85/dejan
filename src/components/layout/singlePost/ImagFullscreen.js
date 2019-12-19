import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageFullscreen = ({ fullscreenImage, imgSrc }) => {
	const [ opacity, setOpacity ] = useState();

	window.setTimeout(() => {
		setOpacity(1);
	}, 1);

	return (
		<div className="singlePost__imageFullscreen" style={{ opacity: opacity }}>
			<div className="singlePost__imageFullscreen--container" onClick={fullscreenImage}>
				<img className="singlePost__imageFullscreen--img" src={imgSrc} alt="slika" />
			</div>
		</div>
	);
};

ImageFullscreen.propTypes = {
	fullscreenImage: PropTypes.func,
	imgSrc: PropTypes.string
};

export default ImageFullscreen;
