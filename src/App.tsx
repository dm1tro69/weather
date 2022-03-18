import React, {FC} from 'react';
import './App.css'
import MainPage from "./components/mainPage/MainPage";
import InfoPage from "./components/infoPage/InfoPage";
import {Route, Routes} from "react-router-dom";

const App: FC = () => {
    return (
        <div className={'app'}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/:id'} element={<InfoPage/>}/>
                <Route path={'*'} element={<MainPage/>}/>
            </Routes>
        </div>
    );
};

export default App;
