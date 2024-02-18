import configureStore from './configureStore'
import rootReducer from './reducers'

export const store = configureStore(rootReducer)
