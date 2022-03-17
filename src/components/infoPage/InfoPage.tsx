import React, {FC} from 'react';
import styles from './InfoPage.module.scss'
import clear from '../../img/icon/nightClear.png'
import Navigation from "../layouts/navigation/Navigation";
import NowInformation from "./nowInformation/NowInformation";

const InfoPage: FC = () => {
    return (
        <Navigation>
             <NowInformation/>
        </Navigation>
    );
};

export default InfoPage;
