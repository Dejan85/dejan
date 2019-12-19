import { combineReducers } from 'redux';

import getJsonReducer from './getJsonReducer';

export default combineReducers({
	projects: getJsonReducer
});
