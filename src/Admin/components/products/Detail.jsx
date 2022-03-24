import React from "react";
import styled from "styled-components";
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
const TextContainer = styled.div`
  display: flex;
  background-color: #e3e5ec;
  border: 1px solid #ccc;
  padding: 10px;
`;
const Label = styled.label`
  min-width: 100px;
`;
const Span = styled.span`
  color: #8d95b4;
`;
const Detail = () => {
  return (
    <Wrap>
      <Container>
        <TextContainer>
          <Label>ID</Label>
          <Span>abcsxex</Span>
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
      </Container>
      <Container>
        <Img
          src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg"
          alt=""
        />
      </Container>
    </Wrap>
  );
};

export default Detail;
