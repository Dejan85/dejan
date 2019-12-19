import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardInfo }) => {
	return (
		<div className="skills__card">
			<i className={`${cardInfo.iconName} skills__icon`} />
			<h4 className="skills__h4">{cardInfo.name}</h4>
			<ul className="skills__ul">
				{cardInfo &&
					cardInfo.list.map((item) => {
						return (
							<li className="skills__li" key={item}>
								{item}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

Card.propTypes = {
	cardInfo: PropTypes.object
};

export default Card;
