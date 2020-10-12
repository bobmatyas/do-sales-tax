import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const CatalogContext = createContext();
export const useCart = () => useContext(CatalogContext);

const roundAmount = (number) => {
    return parseFloat((Math.ceil(number / 0.05) * 0.05).toFixed(2));
}

export default function CatalogProvider ({ children }) {
    
    const [cart, setCart ] = useState([]);
    const [subTotal, setTotal] = useState(0);
    const [taxes, setTaxes] = useState(0);

    const calculateTaxes = (price, taxable, imported) => {
        if (taxable === 1 && imported === 0) {
            updateTaxes(roundAmount(price * .10));
            return roundAmount(price*1.10);
        } else if (taxable === 1 && imported === 1) {
            updateTaxes(roundAmount(price * .15));
            return roundAmount(price*1.15);
        } else if (taxable === 0 && imported === 1) {
            updateTaxes(roundAmount(price * .05));
            return roundAmount(price*1.05);
        } else if (taxable === 0 && imported === 0) {
            return price;
        }
    }

    const addToCart = (item, price, taxable, imported) => {

        const priceTax = calculateTaxes(price, taxable, imported);

        setCart([
            ...cart,
            {
                id: v4(),
                item: item,
                price: price,
                priceTaxes: priceTax
            }
        ]);

        updateTotal(priceTax);
        
    }

    const updateTaxes = (taxAmount) => {

        if (taxes === 0) {
            setTaxes(() => 
            0+taxAmount
        )
        } else {
            setTaxes(() => 
            taxes+taxAmount
        )
        }
    }

    const updateTotal = (price) => {
        if (subTotal === 0) {
            setTotal(() => 
            0 + price
        )
        } else {
            setTotal(() => 
            subTotal + price
        )
        }
    }


    return (
        <CatalogContext.Provider value={{ addToCart, cart, taxes, subTotal }} >
            {children}
        </CatalogContext.Provider>
    );
}
