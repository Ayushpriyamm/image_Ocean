import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from'redux-persist'
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({ user: userReducer });

//setup persist config
const persistConfig = {
    key: 'root',
    storage,
    version: 1,

};

//convert reducer to persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


//Updated Redux store
export const store = configureStore({
    
    reducer: persistedReducer,
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
    
});
export const persistor = persistStore(store);