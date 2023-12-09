import { configureStore } from  '@reduxjs/toolkit'
 import rootReducer from './Reducers/rootReducers';


const store = configureStore(rootReducer)

export default store;