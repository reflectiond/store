import "../styles/Home.module.scss";
import { Product } from "./components/Product/Product";
import { IProduct } from "./models";
import Header from "./components/Header/Header";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [ProductsListToRender, setProductsListToRender] = useState<IProduct[]>([]);
  // const [isFiltered, setIsFiltered] = useState(false);

  async function fetchProducts() {
    const response = await axios.get<IProduct[]>(
      `https://fakestoreapi.com/products`
    );
    setProductsList(response.data);
    setProductsListToRender(response.data);
  }

  const menuItems: string[] = [
    ...new Set<IProduct["category"]>(productsList.map((item) => item.category)),
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterItems = (category: string, isFiltering: boolean) => {
    // setIsFiltered(isFiltering)
    if (!isFiltering) {
      setProductsListToRender(productsList);
      return
    }
    const newProductsList = productsList.filter((p) => p.category === category);
    setProductsListToRender(newProductsList);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Header filterItems={filterItems} menuItems={menuItems} />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row xs={1} md={3}>
        {ProductsListToRender.map((item) => {
          return <Product key={item.id} product={item} />;
        })}
      </Row>
    </Container>
  );
}
