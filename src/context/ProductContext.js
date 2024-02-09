import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [products, setProducts] = useState([]);

    const baseURL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        axios.get(baseURL).then((resp) => {
            setProducts(resp.data);
        })
    }

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    )
}