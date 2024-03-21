import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SortingBar from './SortingBar';
import './Styles/ProductList.css';


function ProductList({ addToCart, isLoggedIn }) {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setSortedProducts(data);
            });
    }, []);

    const handleSort = (sortByValue, categoryValue) => {
        setSortBy(sortByValue);
        setCategory(categoryValue);
        let sortedProductsCopy = [...products];

        if (categoryValue !== '') {
            sortedProductsCopy = sortedProductsCopy.filter((product) => product.category === categoryValue);
        }

        switch (sortByValue) {
            case 'price':
                sortedProductsCopy.sort((a, b) => a.price - b.price);
                break;
            case '-price':
                sortedProductsCopy.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                sortedProductsCopy.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            default:
                break;
        }

        setSortedProducts(sortedProductsCopy);
    };

    return (
        <div>
            <SortingBar handleSort={handleSort} />
            <div className="product-list-container">
                <div className="product-grid">
                    {sortedProducts.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={addToCart} isLoggedIn={isLoggedIn} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;