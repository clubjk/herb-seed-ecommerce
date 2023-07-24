import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { data } from "./data";
import Product from "./Product";

const App = () => {
  document.title = "JK's Awesome Seed Store";
  return (
    <div>
      <h1>JK's Awesome Seed Store</h1>
      <Container>
        <Row>
          {data.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
