import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const CatalogContext = createContext();
export const useCart = () => useContext(CatalogContext);

export default function CatalogProvider ({ children }) {
    const [cart, setCart ] = useState([]);

    const [subTotal, setTotal] = useState(0);

    const addToCart = (item, price) => {
        setCart([
            ...cart,
            {
                id: v4(),
                item: item,
                price: price
            }
        ]);

        setTotal(() => 
            Object.values(cart).reduce((t, {price}) => t + price, 0)
        )

    }

    return (
        <CatalogContext.Provider value={{ addToCart, cart, subTotal }} >
            {children}
        </CatalogContext.Provider>
    );
};
