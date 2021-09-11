import  {createStore,applyMiddleware,compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist';
import rootSaga from './rootSaga'
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger,sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga) 
const persistor = persistStore(store);
export {store,persistor};