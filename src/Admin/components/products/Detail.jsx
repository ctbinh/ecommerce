import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import TextContainer from "./TextContainer";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getSingleProduct,
  singleProductsSelector,
} from "../../store/reducers/productsSlice";

const Detail = () => {
  // param in url
  let [searchParams, setSearchParams] = useSearchParams();

  // redux
  const product = useSelector(singleProductsSelector);
  // const { imgList } = product;
  // console.log("??", imgList);
  const dispatch = useDispatch();
  //

  console.log("???", product.loading);
  useEffect(() => {
    dispatch(getSingleProduct(searchParams.get("id")));
    window.scrollTo(0, 0);
  }, [dispatch]);

  if (product.loading) return <h1>Loading</h1>;
  return (
    <Wrap>
      <Container>
        <Carousel autoPlay>
          <div>
            <img src={product.img_cover} alt="" />
          </div>
          {product.imgList.map((imgItem) => (
            <div>
              <img src={imgItem.url} alt="" />
            </div>
          ))}
          {/* <div>
            <img
              src="https://product.hstatic.net/1000233206/product/lg-gram-2021-14zd90p-g-ax51a5-1_10ebeafae1d64bc5a00168a46e9db5b6_master.png"
              alt=""
            />
          </div> */}
        </Carousel>
        <ContainerComment>
          <Header>
            <Heading>Comment</Heading>
          </Header>
          <Table>
            <Tr>
              <Th>Name</Th>
              <Th>Content</Th>
              <Th>Action</Th>
            </Tr>
            <Tr>
              <Td>An moixxxxxx</Td>
              <Td>Như cc</Td>
              <Td>Remove</Td>
            </Tr>
            <Tr>
              <Td>An moi</Td>
              <Td>Như cc</Td>
              <Td>Remove</Td>
            </Tr>
            <Tr>
              <Td>An moi</Td>
              <Td>Như cc</Td>
              <Td>Remove</Td>
            </Tr>
            <Tr>
              <Td>An moi</Td>
              <Td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas veritatis laudantium est. Est dolorem voluptatum maxime
                dicta amet ducimus repudiandae, odit, autem aut illo ullam,
                doloribus sequi temporibus voluptates ipsa?
              </Td>
              <Td>Remove</Td>
            </Tr>
            <Tr>
              <Td>An moi</Td>
              <Td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas veritatis laudantium est. Est dolorem voluptatum maxime
                dicta amet ducimus repudiandae, odit, autem aut illo ullam,
                doloribus sequi temporibus voluptates ipsa?
              </Td>
              <Td>Remove</Td>
            </Tr>
            <Tr>
              <Td>An moi</Td>
              <Td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas veritatis laudantium est. Est dolorem voluptatum maxime
                dicta amet ducimus repudiandae, odit, autem aut illo ullam,
                doloribus sequi temporibus voluptates ipsa?
              </Td>
              <Td>Remove</Td>
            </Tr>
            <Tr>
              <Td>An moi</Td>
              <Td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas veritatis laudantium est. Est dolorem voluptatum maxime
                dicta amet ducimus repudiandae, odit, autem aut illo ullam,
                doloribus sequi temporibus voluptates ipsa?
              </Td>
              <Td>Remove</Td>
            </Tr>
          </Table>
        </ContainerComment>
      </Container>
      <Container>
        <TextContainer label="ID" text={product.product_id} />
        <TextContainer label="Name" text={product.name} />
        <TextContainer label="Brand" text={product.brand} />
        <TextContainer label="Amount" text={product.amount} />
        <TextContainer label="CPU" text={product.cpu} />
        <TextContainer label="Description" text={product.description} />
        <TextContainer label="GPU" text={product.gpu} />
        <TextContainer label="OS" text={product.os} />
        <TextContainer label="Price" text={product.price} />
        <TextContainer label="Ram" text={product.ram} />
        <TextContainer label="Rating" text={product.rating} />
        <TextContainer label="Screen" text={product.screen} />
        <TextContainer label="Size" text={product.size} />
      </Container>
    </Wrap>
  );
};
// CSS
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 10px 20px;
`;
const Container = styled.div`
  width: 100%;
  max-width: 800px;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;
const Label = styled.label`
  min-width: 100px;
`;
const Span = styled.span`
  color: #8d95b4;
`;
const ContainerComment = styled.div``;
const Header = styled.div``;
const Heading = styled.h3``;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
  margin: 14px 0 28px;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;
const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  &:nth-child(1) {
    width: 150px;
  }
  &:nth-child(3) {
    color: red;
  }
  text-overflow: ellipsis;
`;
const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  &:nth-child(3) {
    color: blue;
  }
`;

export default Detail;
