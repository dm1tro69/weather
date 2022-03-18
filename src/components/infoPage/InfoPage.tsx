import React, {FC, useState} from 'react';
import styles from './InfoPage.module.scss'
import clear from '../../img/icon/nightClear.png'
import Navigation from "../layouts/navigation/Navigation";
import NowInformation from "./nowInformation/NowInformation";
import WeatherInfo from "./weatherInformation/WeatherInfo";

const InfoPage: FC = () => {
    const [value, setValue] = useState<boolean>(true)

    const click = () => {
        setValue(prevState => !prevState)
    }

    return (
        <Navigation click={click} value={value}>
            {value ? <NowInformation/>: <WeatherInfo/>}
        </Navigation>
    );
};

export default InfoPage;
