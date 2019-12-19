const useHandleNavActiveClass = () => {
	const handleNavActiveClass = (list, e) => {
		const x = [ ...list.current.childNodes ];

		x.forEach((item) => {
			item.classList.remove('active2');
			e.target.classList.add('active2');
		});
	};


	return { handleNavActiveClass };
};

export default useHandleNavActiveClass;
