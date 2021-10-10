import React from 'react';
import {GlobalStyles} from './Global.styles';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Movie from './components/pages/Movie';
import NotFound from './components/pages/NotFound';
import UserProvider from './context';
import Login from './components/pages/Login';

const App = () => (
    <BrowserRouter>
        <UserProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/movie/:movieId" element={<Movie/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <GlobalStyles/>
        </UserProvider>
    </BrowserRouter>
);

export default App;
