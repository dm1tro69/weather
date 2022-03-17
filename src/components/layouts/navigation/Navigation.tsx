import React, {FC} from 'react';
import styles from './Navigation.module.scss'

const Navigation: FC = ({children}) => {
    return (
        <>
        <nav className={styles.navigation}>
            <div className={styles.wap}>
                <h1>Kiev</h1>
                <a href="#"><p>Сменить город</p></a>
                <button >
                    <svg viewBox="0 0 30 30" >
                        <path d="M9.79351 21.2859L0.000110885 19.594L18.6905 4.29481L18.0054 29.82L9.79351 21.2859Z" />
                    </svg>
                    Моё местоположение</button>
            </div>
            <p className={styles.text}>Погода на 10 дней</p>

        </nav>
            {children}
        </>
    );
};

export default Navigation;
