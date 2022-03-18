import React, {FC} from 'react';
import styles from './Navigation.module.scss'
import {NavLink} from "react-router-dom";

interface NavigationProps {
    click: ()=> void
    value: boolean
}

const Navigation: FC<NavigationProps> = ({children, click, value}) => {
    return (
        <>
        <nav className={styles.navigation}>
            <div className={styles.wap}>
                <h1>Kiev</h1>
                <NavLink to="/"><p>Сменить город</p></NavLink>
                <button >
                    <svg viewBox="0 0 30 30" >
                        <path d="M9.79351 21.2859L0.000110885 19.594L18.6905 4.29481L18.0054 29.82L9.79351 21.2859Z" />
                    </svg>
                    Моё местоположение</button>
            </div>
            <p onClick={click} className={styles.text}>Погода на {value ? '10 дней': 'сегодня'}</p>

        </nav>
            {children}
        </>
    );
};

export default Navigation;
