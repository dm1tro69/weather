import React from 'react';
import styles from "./NowInformation.module.scss";
import clear from "../../../img/icon/nightClear.png";

const NowInformation = () => {
    return (
        <>
        <div className={styles.weather}>
            <div>
                <p className={styles.title}>Ясно</p>
                <div className={styles.wap}>
                    <img src={clear} alt="clear"/>
                    <p className={styles.value}>19&deg;</p>
                </div>
            </div>
        </div>
            <div className={styles.information}>

                <div className={styles.container}>
                    <h3>Ветер</h3>
                    <p>5 m/s, западный</p>
                </div>
                <div className={styles.container}>
                    <h3>Давление</h3>
                    <p>5 m/s, западный</p>
                </div>
                <div className={styles.container}>
                    <h3>Влажность</h3>
                    <p>5 m/s, западный</p>
                </div>
            </div>
        </>

    );
};

export default NowInformation;
