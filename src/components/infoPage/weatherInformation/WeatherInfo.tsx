import React, {FC} from 'react';
import styles from './WeatherInfo.module.scss'
import OneDay from "./oneDay/OneDay";

const WeatherInfo: FC = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
            <li className={styles.el}><OneDay/></li>
        </ul>
    );
};

export default WeatherInfo;
