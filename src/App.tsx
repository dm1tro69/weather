import React, {FC} from 'react';
import './App.css'
import MainPage from "./components/mainPage/MainPage";

const App: FC = () => {
    return (
        <div className={'app'}>
            <MainPage/>
        </div>
    );
};

export default App;
