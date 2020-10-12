import React from 'react';
import Button from 'react-bootstrap/Button'
import { useCart } from "../CatalogProvider";


function AddButton ({item, price, taxable, imported}) {

    const { addToCart } = useCart();

    return(
        <Button 
            variant="primary" 
            onClick={
                ()=> addToCart(item, price, taxable, imported)
            }
        >
            Add to Cart
        </Button>
    )

}

export default AddButton;