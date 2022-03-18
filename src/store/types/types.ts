export type CityJson = {
    region: string,
    city: string
}
export type OnlyCityJson = Omit<CityJson, 'region'>


export interface MainStateType {
    listRussiaCity: OnlyCityJson[]
    city: string
}
export interface WeatherStateType {

}

export enum WeatherActionEnum {

}
export enum MainActionEnum {
    ADD_RUSSIA_LIST= 'ADD_RUSSIA_LIST',
    CITY = 'CITY'

}



interface ListRussiaAction {
    type: MainActionEnum.ADD_RUSSIA_LIST,
    payload: any
}

interface CityAction {
    type: MainActionEnum.CITY,
    payload: string
}

export type WeatherActionType = {
    type: string
}

export type MainActionType = ListRussiaAction | CityAction

