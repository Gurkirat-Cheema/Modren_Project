// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './Pages/Home';
import Books from './Pages/Books';
import Favorites from './Pages/Favorites';
import ReadingList from './Pages/ReadingList';
import Recommendations from './Pages/Recommendations';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/reading-list" element={<ReadingList />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;