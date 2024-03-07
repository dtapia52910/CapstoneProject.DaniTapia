

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SortingBar from "./SortingBar";
import "./Styles/ProductList.css";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
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

        if (categoryValue !== "") {
            sortedProductsCopy = sortedProductsCopy.filter(
                (product) => product.category === categoryValue
            );
        }

        switch (sortByValue) {
            case "price":
                sortedProductsCopy.sort((a, b) => a.price - b.price);
                break;
            case "-price":
                sortedProductsCopy.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                sortedProductsCopy.sort((a, b) => b.rating.rate - a.rating.rate);
                break;
            default:
                // No sorting
                break;
        }

        setSortedProducts(sortedProductsCopy);
    };

    const handleAddToCart = (product) => {
        // Implement logic to add the product to the cart
        console.log("Adding product to cart:", product);
    };

    return (
        <div>
            <h1>Products</h1>
            <SortingBar handleSort={handleSort} />
            <div className="product-grid">
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
