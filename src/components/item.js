import React from 'react';
import Card from 'react-bootstrap/Card'
import AddButton from './Button-Add';
import { useCart } from "../CatalogProvider";


import 'holderjs';

function Item({ title, price, taxable, imported }) {

    const { formatCurrency } = useCart();    

    return (
        <Card style={{ minWidth: '225px', maxWidth: '225px', margin: '10px 5px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title> { title } </Card.Title>
                <Card.Text className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    <br /><br /><strong>{formatCurrency.format(price)}</strong>
                </Card.Text>
                <AddButton
                    item={title}
                    price={price} 
                    taxable={taxable}
                    imported={imported}
                />
            </Card.Body>
        </Card>
    )
}

export default Item; 