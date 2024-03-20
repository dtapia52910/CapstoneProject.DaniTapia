
import React, { useState } from 'react';
import "./Styles/SortingBar.css"

function SortingBar({ handleSort }) {
    const [sortBy, setSortBy] = useState('');
    const [category, setCategory] = useState('');

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        handleSort(e.target.value, category);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        handleSort(sortBy, e.target.value);
    };

    return (
        <div className="sorting-bar">
            <select value={sortBy} onChange={handleSortChange}>
                <option value="">Sort By</option>
                <option value="price">Price (Ascending)</option>
                <option value="-price">Price (Descending)</option>
                <option value="rating">Rating</option>
                <option value="type">Type</option>
            </select>
            <select value={category} onChange={handleCategoryChange}>
                <option value="">Category</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
            </select>
        </div>
    );
}

export default SortingBar;