import React, {FC} from 'react';
import './App.css'
import MainPage from "./components/mainPage/MainPage";
import InfoPage from "./components/infoPage/InfoPage";

const App: FC = () => {
    return (
        <div className={'app'}>
            {/*<MainPage/>*/}
            <InfoPage/>
        </div>
    );
};

export default App;
