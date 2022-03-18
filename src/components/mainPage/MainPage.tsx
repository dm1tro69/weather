import React, {ChangeEvent, FC, useEffect} from 'react';
import styles from './Main.module.scss'
import cursorButton from '../../img/cursor/cursorWhite.png'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootType} from "../../store";
import {listRussiaCities} from "../../store/actions/listRussiaCity";
import {changeCity} from "../../store/actions/changeCity";

const MainPage: FC = () => {

    const {listRussiaCity, city} = useSelector((state: RootType)=> state.main)
    const dispatch = useDispatch()

    useEffect(()=> {

        dispatch(listRussiaCities())
    }, [])


    const navigate = useNavigate()

    const clickNavigation = () => {
        navigate(`/${city}`)
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value){
            return
        }else {
            dispatch(changeCity(e.target.value))
        }

    }

    return (
        <div className={styles.main}>
            <label className={styles.title} htmlFor="cities">Выберите город</label>
            <input onChange={changeHandler} value={city} className={styles.search} type="text" list={'cities'}/>
            <datalist id={'cities'}>
                {listRussiaCity.map((list, i) =>
                    // @ts-ignore
                    <option key={i} value={list}></option>
                )}
            </datalist>
            <div className={styles.wap}>
                <hr/>
                <button onClick={clickNavigation}>OK</button>
            </div>
            <p className={styles.p}>или</p>
            <button className={styles.gps}><img src={cursorButton} alt="img"/>Мое местоположение</button>
        </div>
    );
};

export default MainPage;
