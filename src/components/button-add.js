import React from 'react';
import Button from 'react-bootstrap/Button'
import { useCart } from "../CatalogProvider";


function AddButton ({item, price}) {

    const { addToCart } = useCart();
    
    return(
        <Button variant="primary" onClick={()=> addToCart(item, price)}>Add to Cart</Button>
    )

}

export default AddButton;