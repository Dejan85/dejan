import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

// components
import Nav from './Nav';
import Logo from './Logo';

// hooks
import useNavHook from '../../hooks/header/useNav';

//redux
import { getJson } from '../../../redux/actions/jsonAction';

const Header = ({ getJson }) => {
	const style = useNavHook();

	useEffect(
		() => {
			getJson();
		},
		[ getJson ]
	);

	return (
		<div className="header" style={style && style.header}>
			<div className="header__container">
				<Logo />
				<Nav changeStyle={style && style.li} />
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	getJson
};

Header.propType = {
	getJson: PropType.func
};

export default connect(null, mapDispatchToProps)(Header);
