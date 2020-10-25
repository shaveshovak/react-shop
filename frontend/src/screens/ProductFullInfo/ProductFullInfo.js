import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card, ListGroup, Image } from 'react-bootstrap';
import products from '../../products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import Rating from '../../components/Rating/Rating';
import './ProductFullInfo.css';

const ProductFullInfo = ({ match }) => {

    const product = products.find((p) => p._id === match.params.id);

    return (
        <>
            <Link className="btn my-3 pl-0" to="/">
                <FontAwesomeIcon 
                    icon={faLongArrowAltLeft}
                    className="mr-1"
                />
                Go back
            </Link>
            <Row>
                <Col md={12} className="mb-3">
                    <h3>{product.name}</h3>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Image 
                        src={`../${product.image}`} 
                        alt={product.name} 
                        className="mb-3"
                        fluid
                    />
                </Col>

                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Rating 
                                value={product.rating} 
                                text={` ${product.numReviews} reviews`} 
                            />
                        </ListGroup.Item>
                        <ListGroup.Item> 
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>{product.description}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush" 
                            style={
                                { borderRadius: 0 }
                            }
                        >
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>In Stock:</Col>
                                    <Col>
                                        <strong>
                                            {
                                                product.countInStock > 0 
                                                ? 'In Stock' 
                                                : 'Out of stock'
                                            }
                                        </strong>
                                        </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <Button 
                                        className="btn btn-dark" 
                                        type="disabled"
                                        disabled={product.countInStock === 0}
                                        block 
                                        style={
                                            { borderRadius: 0, backgroundColor: '#000', border: 0, padding: '10px'}
                                        }
                                    >
                                        Add to cart
                                    </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default ProductFullInfo;