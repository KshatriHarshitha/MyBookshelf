// src/pages/BookshelfPage.jsx
import React, { useEffect, useState } from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    return (
        <div>
            <h1>My Bookshelf</h1>
            <Bookshelf books={bookshelf} />
        </div>
    );
};

export default BookshelfPage;
