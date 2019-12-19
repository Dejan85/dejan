import React from 'react';

const useBox = (setBox, headerColor, header, contentBoxes) => {
	const boxes = [];
	const colors = [];
	let headerRgb = '';

	const testColor = (e) => {
		if (e.target.style.background === headerRgb) {
			header.current.style.background = headerRgb;
			[ ...contentBoxes.current.children ].forEach((item) => {
				item.style.opacity = 1;
				item.style.background = headerRgb;
			});
		} else {
			e.target.style.opacity = 0;
		}
	};

	const difficult = (counter) => {
		header.current.style.background = '#4581B3';

		for (let i = 0; i < counter; i++) {
			const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
				Math.random() * 255
			)})`;
			colors.push(color);
			boxes.push(
				<div
					key={i}
					className="colorgame__content__box"
					style={{ background: color, opacity: 1 }}
					onClick={testColor}
				/>
			);
		}
		setBox(boxes);
		if (headerColor.current) {
			headerRgb = headerColor.current.textContent = colors[Math.floor(Math.random() * colors.length)];
		}
		return headerRgb;
	};

	return { difficult };
};

export default useBox;
