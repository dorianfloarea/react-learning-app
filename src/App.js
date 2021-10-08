import React from 'react';
import {GlobalStyles} from './Global.styles';
import Header from './components/common/Header';
import Home from './components/pages/Home';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Movie from './components/pages/Movie';
import NotFound from './components/pages/NotFound';

const App = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:movieId' element={<Movie/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Routes>
        <GlobalStyles/>
    </BrowserRouter>
);

export default App;

// 58:45
// 3:02:18
// 3:49.40