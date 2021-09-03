import  {createStore,applyMiddleware,compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
const middleware = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
const persistor = persistStore(store);
export {store,persistor};