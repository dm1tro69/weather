import json from '../../russia.json'
import {MainActionEnum} from "../types/types";

export const listRussiaCities = () => {
    let arr: any[]= []
    Array.from(json).forEach((el) =>{
        arr.push(el.city)
    })
    return {
        type: MainActionEnum.ADD_RUSSIA_LIST,
        payload: arr

    }
}




