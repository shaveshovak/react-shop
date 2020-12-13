import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../../components/Product/Product';
import { listProducts } from '../../actions/productAction';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';

const Home = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts())
  
    }, [dispatch]);

    return (
        <>
            <h1 className="mt-3">Latest Products</h1>
            {
            loading 
            ? ( <Loader /> )
            : error 
            ? ( <Message variant='danger'> {error} </Message>  )
            :  ( <Row>
                    {
                        products.map((product) => (
                            <Col sm={12} lg={4} md={6} xl={3} key={product._id}>
                                <Product product={product} />
                            </Col>
                        ))
                    }
                </Row>
            )
            }
        </>
    );
}

export default Home;
