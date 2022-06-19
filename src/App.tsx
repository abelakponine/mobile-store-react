import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './views/index';

function App() {
    
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/:category' element={<Index/>}/>
            </Routes>
        </Router>
    );
}

export default App;
