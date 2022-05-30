import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import TextContainer from "./TextContainer";
import { useSearchParams } from "react-router-dom";
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 10px 20px;
`;
const Container = styled.div`
  width: 100%;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;
// const TextContainer = styled.div`
//   display: flex;
//   background-color: #e3e5ec;
//   border: 1px solid #ccc;
//   padding: 10px;
//   align-items: center;
// `;
const Label = styled.label`
  min-width: 100px;
`;
const Span = styled.span`
  color: #8d95b4;
`;
const Detail = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState({});
  // let { id } = useParams();
  // console.log(id);

  useEffect(() => {
    let id = searchParams.get("id");
    axios
      .get(
        `http://localhost/ecommerce/backend/api/product/read_single.php?id=${id}`
      )
      .then((res) => {
        setProduct(res.data);
      });
    // const id = axios.get;
  }, []);
  return (
    <Wrap>
      <Container>
        {/* <Img
          src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg"
          alt=""
        /> */}
        <Carousel autoPlay>
          <div>
            <img
              src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://product.hstatic.net/1000233206/product/lg-gram-2021-14zd90p-g-ax51a5-1_10ebeafae1d64bc5a00168a46e9db5b6_master.png"
              alt=""
            />
          </div>
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
        {/* <TextContainer>
          <Label>ID</Label>
          <Span>{product.d}</Span>
        </TextContainer>
        <TextContainer>
          <Label>Name</Label>
          <Span>Laptop LG Gram 2021 14ZD90P-G.AX51A5</Span>
        </TextContainer>
        <TextContainer>
          <Label>Brand name</Label>
          <Span>Dell</Span>
        </TextContainer>
        <TextContainer>
          <Label>CPU</Label>
          <Span>Intel Core i5-1135G7 2.4GHz up to 4.2GHz 8MB</Span>
        </TextContainer>
        <TextContainer>
          <Label>RAM</Label>
          <Span>8GB (4GBx2) LPDDR4X 4266MHz (Onboard)</Span>
        </TextContainer>
        <TextContainer>
          <Label>GPU</Label>
          <Span>Intel Iris Xe Graphics</Span>
        </TextContainer>
        <TextContainer>
          <Label>OS</Label>
          <Span>FreeDos</Span>
        </TextContainer>
        <TextContainer>
          <Label>Display</Label>
          <Span>14 WUXGA (1920x1200), 16:10, IPS, DCI-P3 99%</Span>
        </TextContainer>
        <TextContainer>
          <Label>Size</Label>
          <Span>313.4 x 215.2 x 16.8 mm</Span>
        </TextContainer>
        <TextContainer>
          <Label>Description</Label>
          <Span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque
            esse iure eveniet voluptate. Unde aliquid voluptates accusantium.
            Vel velit numquam eaque consectetur accusamus temporibus ullam nemo
            aliquam iure reiciendis?
          </Span>
        </TextContainer> */}
      </Container>
    </Wrap>
  );
};
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
