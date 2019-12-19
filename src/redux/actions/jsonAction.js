import { GET__JSON } from '../type/type';

// JSON data
import proenglish from '../../components/json/proenglish.json';
import colorgame from '../../components/json/colorgame.json';
import piggame from '../../components/json/piggame.json';
import luckgame from '../../components/json/luckgame.json';

export const getJson = () => (dispatch) => {
	const projects = [ proenglish, colorgame, piggame, luckgame ];

	dispatch({
		type: GET__JSON,
		payload: projects
	});
};
