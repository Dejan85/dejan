import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useNavHook = () => {
	const [ style, setStyle ] = useState({});
	const location = useLocation();

	// OVO NIJE GOTOVO
	useEffect(() => {
		setStyle(() => {
			if (location.pathname === '/demo/colorgame') {
				return {
					header: { display: 'none' }
				};
			}
		});
	}, []);

	window.onscroll = () => {
		setStyle(() => {
			if (location.pathname === '/' && window.pageYOffset !== 0) {
				return {
					header: {
						position: 'fixed',
						paddingTop: '0rem',
						background: 'white',
						boxShadow: '-1px 0px 5px 0px rgba(211, 211, 211, 0.75)'
					},
					li: {
						padding: '2rem 1.5rem 2rem 1.5rem'
					}
				};
			} else if (location.pathname !== '/' && window.pageYOffset === 0) {
				return {
					header: {
						opacity: 0
					}
				};
			} else if (location.pathname !== '/' && window.pageYOffset !== 0) {
				return {
					header: {
						position: 'fixed',
						paddingTop: '0rem',
						background: 'white',
						boxShadow: '-1px 0px 5px 0px rgba(211, 211, 211, 0.75)'
					},
					li: {
						padding: '2rem 1.5rem 2rem 1.5rem'
					}
				};
			}
		});
	};

	return style;
};

export default useNavHook;
