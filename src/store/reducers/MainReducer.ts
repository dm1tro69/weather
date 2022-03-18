import {MainActionEnum, MainActionType, MainStateType} from "../types/types";

const initialState: MainStateType = {
     listRussiaCity: [],
     city: ''
}

export const mainReducer = (state=initialState, action: MainActionType): MainStateType => {
    switch (action.type) {
        case MainActionEnum.ADD_RUSSIA_LIST:
            return {...state, listRussiaCity: action.payload}
        case MainActionEnum.CITY:
            return {...state, city: action.payload}
        default:
            return state
    }
}
