import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../../products';
import Product from '../../components/Product/Product';

const Home = () => {
  return (
    <>
        <h1 className="mt-3">Latest Products</h1>
        <Row>
            {
                products.map((product) => (
                    <Col sm={12} lg={4} md={6} xl={3} key={product._id}>
                        <Product product={product} />
                    </Col>
                ))
            }
        </Row>
    </>
  );
}

export default Home;
