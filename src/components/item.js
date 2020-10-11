import React from 'react';
import Card from 'react-bootstrap/Card'
import AddButton from './button-add';


import 'holderjs';

function Item({ title, price, imported, taxable }) {

    return (
        <Card style={{ minWidth: '225px', maxWidth: '225px', margin: '10px 5px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title> { title } </Card.Title>
                <Card.Text className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    <br /><br /><strong>${price}</strong>
                </Card.Text>
                <AddButton
                    item={title}
                    price={price} 
                />
            </Card.Body>
        </Card>
    )
}

export default Item; 