import React, { useState, useEffect, useRef } from 'react';

//hooks
import useBox from './useBox';
import useSelect from './useSelect';

const ColorGame = () => {
	const header = useRef();
	const headerColor = useRef();
	const contentBoxes = useRef();
	const menuUl = useRef();
	const [ box, setBox ] = useState([]);
	const [ counter, setCounter ] = useState(6);
	const { difficult } = useBox(setBox, headerColor, header, contentBoxes);
	const { select } = useSelect();

	const easy = (e) => {
		setCounter(3);
		select(menuUl, e);
	};

	const hard = (e) => {
		setCounter(6);
		select(menuUl, e);
	};

	useEffect(
		() => {
			difficult(counter);
		},
		[ counter ]
	);

	return (
		<div className="colorgame">
			<div className="colorgame__header" ref={header}>
				<h1 className="colorgame__header__h1">THE GREAT</h1>
				<p className="colorgame__header__color" ref={headerColor} />
				<p className="colorgame__header__p">COLOR GAME</p>
			</div>
			<div className="colorgame__menu">
				<h2 className="colorgame__menu__h2" onClick={difficult.bind(null, counter)}>
					NEW COLORS
				</h2>
				<p className="colorgame__menu__message" />
				<ul className="colorgame__menu__ul" ref={menuUl}>
					<li className="colorgame__menu__li" onClick={easy}>
						EASY
					</li>
					<li className="colorgame__menu__li colorgame__active" onClick={hard}>
						HARD
					</li>
				</ul>
			</div>
			<div className="colorgame__content">
				<div className="colorgame__content__boxes" ref={contentBoxes}>
					{box.map((item) => {
						return item;
					})}
				</div>
			</div>
		</div>
	);
};

export default ColorGame;
