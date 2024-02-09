import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
    const baseURL = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        getAllProducts();
        getAllCategories();
    }, []);

    const getAllProducts = () => {
        axios.get(baseURL).then((resp) => {
            setProducts(resp.data)
            setRemoveLoading(true)
        })
    }

    const getAllCategories = () => {
        axios.get(`${baseURL}/categories`).then((resp) => {
            setCategories(resp.data)
            setRemoveLoading(true)
        })
    }

    return (
        <ProductContext.Provider value={[products, categories, removeLoading]}>
            {props.children}
        </ProductContext.Provider>
    )
}