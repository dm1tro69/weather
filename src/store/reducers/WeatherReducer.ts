import {WeatherActionType, WeatherStateType} from "../types/types";

const initialState: WeatherStateType = {

}

export const weatherReducer = (state=initialState, action: WeatherActionType): WeatherStateType => {
    switch (action.type) {
        case '':
            return {...state}
        default:
            return state
    }
}
