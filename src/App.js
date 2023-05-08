import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/header'
import Home from './pages/home'
import Filmpage from "./pages/filmpage";
import './all.css'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/:cat'} element={<Home />} />
                <Route path={'/film/:cat/:title'} element={<Filmpage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;