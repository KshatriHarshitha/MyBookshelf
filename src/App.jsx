// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import BookshelfPage from './Pages/BookshelfPage';
import './App.css';

const App = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    const addToBookshelf = (book) => {
        const newBookshelf = [...bookshelf, book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <Router>
            <Routes>
                <Route path="/bookshelf" element={<BookshelfPage />} />
                <Route path="/" element={<SearchPage onAddToBookshelf={addToBookshelf} />} />
            </Routes>
        </Router>
    );
};

export default App;
