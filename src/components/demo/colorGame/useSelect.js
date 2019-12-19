const useSelect = () => {
	const select = (menuUl, e) => {
		[ ...menuUl.current.children ].forEach((item) => {
			item.style.background = 'white';
			item.style.color = '#4581B3';
		});
		e.target.style.background = '#4581B3';
		e.target.style.color = 'white';
	};

	return { select };
};

export default useSelect;
