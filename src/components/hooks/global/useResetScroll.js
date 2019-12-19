const useResetScroll = () => {
	const resetScroll = () => {
		return window.scrollTo(0, 0);
	};

	return { resetScroll };
};

export default useResetScroll;
