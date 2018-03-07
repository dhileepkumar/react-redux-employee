import { createStore, applyMiddleware} from 'redux';
import AppReducers from '../Reducers/AppReducers';
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
	console.log('Dispatch : ', action)
	return next(action);
}

// Create store with reducers and initial state
const store = createStore(
			AppReducers,
			applyMiddleware(thunk, logger));

export default store;
	
