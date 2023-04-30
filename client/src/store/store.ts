import { AnyAction, configureStore, Store } from '@reduxjs/toolkit'
import rootReducer from "../reducers";
import { AppState } from '../types/type';

const store: Store<AppState,AnyAction> = configureStore({
    reducer: rootReducer,
});

export default store;
