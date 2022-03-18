import {MainActionEnum} from "../types/types";

export const changeCity = (text: string) => {
    return {
        type: MainActionEnum.CITY,
        payload: text
    }

}
