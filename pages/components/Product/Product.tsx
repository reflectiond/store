import Image from "next/image";
import React from "react";
import { IProduct } from "../../../pages/models";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from "react-bootstrap/Button";

interface ProductProps {
  product: IProduct;
}
export const Product = (props: ProductProps) => {
  const customLoader = () => `${props.product.image}`;
  return (
    <Col>
    <Row>
      <Card style={{ margin: "1rem auto", width: "25rem" , padding: '0'}}>
        <Card.Header style={{ }}>{props.product.category}</Card.Header>
        <Card.Img
          variant="top"
          src={props.product.image}
          style={{maxWidth: '60%', height: "100%",margin: "0.5rem auto" }}
          className='img-fluid'
          />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text><span>Price: </span>{props.product.price}$</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      </Row>
    </Col>
  );
};

    // <Row>
    //     <Col></Col>
    //     <Col>
    //       <Image
    //         loader={customLoader}
    //         // layout='fill'
    //         src={props.product.image}
    //         alt={props.product.title}
    //         width={200}
    //         height={200}
    //         />
    //       <div>{props.product.title}</div>
    //       <div>{props.product.price}</div>
    //     </Col>
    //     <Col></Col>
    // </Row>