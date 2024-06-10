// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const SearchPage = ({ onAddToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchBooks = async (q) => {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
        setResults(response.data.docs);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            searchBooks(e.target.value);
        } else {
            setResults([]);
        }
    };

    return (
        <div>
            <h1>Search by book name:</h1>
            <input type="text" value={query} onChange={handleInputChange} />
            <div className="search-results">
                {results.map((book, index) => (
                    <BookCard key={index} book={book} onAddToBookshelf={onAddToBookshelf} />
                ))}
            </div>
            <button onClick={() => window.location.href = '/bookshelf'}>My Bookshelf</button>
        </div>
    );
};

export default SearchPage;
