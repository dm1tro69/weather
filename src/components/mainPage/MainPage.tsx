import React from 'react';
import styles from './Main.module.scss'
import cursorButton from '../../img/cursor/cursor.png'

const MainPage = () => {
    return (
        <div className={styles.main}>
            <label className={styles.title} htmlFor="cities">Выберите город</label>
            <input className={styles.search} type="text" list={'cities'}/>
            <datalist id={'cities'}>
                <option value="Kiev"/>
                <option value="Odessa"/>
                <option value="Athens"/>
                <option value="Donetsk"/>
            </datalist>
            <div className={styles.wap}>
                <hr/>
                <button>OK</button>
            </div>
            <p className={styles.p}>или</p>
            <button className={styles.gps}><img src={cursorButton} alt="img"/>Мое местоположение</button>
        </div>
    );
};

export default MainPage;
