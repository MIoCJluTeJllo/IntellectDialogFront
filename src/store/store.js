import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist'
import tableReducer from './tableSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['table']
}

const rootReducer = combineReducers({
  table: tableReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
