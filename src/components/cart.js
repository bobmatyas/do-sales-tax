import React from 'react';
import { useCart } from "../CatalogProvider";
import Table from 'react-bootstrap/Table';


function Cart ({ items }) {
    

    const { subTotal } = useCart();

    return(
        <>
        <h3 className="h4">Cart</h3>
        <hr />
        <Table striped bordered size="sm">
        <thead>
            <tr>
            <th>Item</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
        {items.map((item, i) => (
            <tr key={i}>
                <td>{item.item}</td>
                <td>${item.price}</td>
            </tr>
        ))}
        </tbody>
        </Table>

        <p>{subTotal} </p>
        </>
    )

}

export default Cart;