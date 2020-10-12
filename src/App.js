import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Catalog from './components/Catalog'
import Cart from './components/Cart'
import { useCart } from './CatalogProvider'
import styled from 'styled-components';

const CartWrapper = styled.div`
  @media (min-width: 768px) {
    position: fixed;
  }
`;

function App() {

  const { cart } = useCart();

  return (
    <Container>
      <Row>
        <Col xs={{ order: 2 }} sm={{order: 1}} md={8}>
          <Catalog />
        </Col>
        <Col xs={{ order: 1 }} md={4} style={{paddingTop: '10px'}}>        
        <CartWrapper>
          { cart.length > 0 ? <Cart items={ cart } /> : "" }
          </CartWrapper>

        </Col>
      </Row>
    </Container>
  );



}

export default App;
