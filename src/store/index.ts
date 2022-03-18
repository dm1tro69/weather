import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import {mainReducer} from "./reducers/MainReducer";
import {weatherReducer} from "./reducers/WeatherReducer";

export const rootReducer = combineReducers({
    main: mainReducer,
    weather: weatherReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootType = ReturnType<typeof rootReducer>
