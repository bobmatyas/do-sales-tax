import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Catalog from './components/Catalog'
import Cart from "./components/cart"

import { useCart } from "./CatalogProvider";

function App() {

  const { cart } = useCart();

  return (
    <Container>
      <Row>
        <Col xs={{ order: 2 }} sm={{order: 1}} md={8}>
          <Catalog />
      </Col>
        <Col xs={{ order: 1 }} md={4}>
          { cart.length > 0 ? <Cart items={ cart } /> : "" }
        </Col>
      </Row>
    </Container>
  );
}

export default App;
