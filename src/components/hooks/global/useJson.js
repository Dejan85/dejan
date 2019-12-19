// json
import colorgame from '../../json/colorgame.json';
import proenglish from '../../json/proenglish.json';
import piggame from '../../json/piggame.json';
import luckgame from '../../json/luckgame.json';

const useJson = () => {
	const getJson = (name) => {
		switch (name) {
			case 'allprojects':
				return [ proenglish, colorgame, piggame, luckgame ];
			case 'proenglish':
				return proenglish;
			case 'colorgame':
				return colorgame;
			case 'piggame':
				return piggame;
			case 'luckgame':
				return luckgame;
			case 'blog':
				return [ proenglish, luckgame, piggame ];
			default:
				return '';
		}
	};

	return { getJson };
};

export default useJson;
