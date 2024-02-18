import { applyMiddleware, createStore, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { saveState, loadState } from './localStorage'
import * as Sentry from '@sentry/react'
import rootReducer from './reducers'
// import { wsMiddleware } from './middleware/wsMiddleware'

const sentryReduxEnhancer = Sentry.createReduxEnhancer({})

const saveStateMiddleware = (store) => (next) => (action) => {
	const result = next(action)
	saveState(store.getState())
	return result
}
export default function configureStore() {
	const preloadedState = loadState()
	const middlewareEnhancer = composeWithDevTools(
		applyMiddleware(thunk, saveStateMiddleware),
	)

	const enhancers = [middlewareEnhancer, sentryReduxEnhancer]
	const composedEnhancers = compose(...enhancers)

	const store = createStore(rootReducer, preloadedState, composedEnhancers)
	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
	}

	return store
}
