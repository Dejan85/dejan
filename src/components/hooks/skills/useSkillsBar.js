import React from 'react';

const useSkillsBar = () => {
	const skillBar = (name, percent) => {
		return (
			<div className="hook__bar" key={name}>
				<div className="hook__bar--text">
					<h3 className="hook__bar--h3">{name}</h3>
					<p className="hook__bar--percent" style={{ paddingLeft: `${percent - 8}%`, position: 'absolute' }}>
						{percent}%
					</p>
				</div>
				<div className="hook__bar--outer">
					<div
						className="hook__bar--inner"
						style={{ width: `${percent}%`, height: '100%', background: '#0176F6' }}
					/>
				</div>
			</div>
		);
	};

	return { skillBar };
};

export default useSkillsBar;
