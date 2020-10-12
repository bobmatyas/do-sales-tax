import React from 'react';
import Item from "./Item";
import catalogData from '../data/catalog.json';
import CardDeck from 'react-bootstrap/CardDeck'

function Catalog() {


  return (
    <>
      <h2>Catalog</h2>
      <hr />
      <CardDeck>
        {catalogData.map((catalog, i) => (
          <Item
            key={i}
            title={catalog.item}
            price={catalog.price}
            taxable={catalog.taxable}
            imported={catalog.imported}
          />
        ))}
      </CardDeck>
    </>
  )
}

export default Catalog;