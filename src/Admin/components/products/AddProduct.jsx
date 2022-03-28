import React from "react";
import styled from "styled-components";
const Wraper = styled.div`
  width: 100%;
  background-color: #f3f3f9;
  padding: 20px 0;
  box-sizing: border-box;
`;
const Container = styled.div`
  background-color: white;
  margin: 0 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #b2b2b2;
  padding: 10px;
`;
const Heading = styled.h3`
  font-size: 20px;
`;
const FlexContainer = styled.div`
  display: flex;
`;
const InputLeft = styled.div`
  padding-right: 4px;
  flex: 1;
`;
const InputRight = styled.div`
  padding-left: 4px;
  flex: 1;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;
const InputLabel = styled.label`
  /* min-width: 150px; */
  flex-basis: 25%;
`;
const Input = styled.input`
  background-color: #ffffff;
  border-color: #ccc;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  font-size: 13px;
  line-height: 19.5px;
  padding: 6px 12px;
  outline: none;
  flex-basis: 70%;
  &:focus {
    border-color: #6e00ff;
  }
`;
const Select = styled.select`
  background-color: #ffffff;
  border-color: #ccc;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  font-size: 13px;
  line-height: 19.5px;
  padding: 6px 12px;
  outline: none;
  flex-basis: 70%;
`;
const Option = styled.option``;

const AddProduct = () => {
  return (
    <Wraper>
      <Container>
        <Heading>Add product</Heading>
        <FlexContainer>
          <InputLeft>
            <InputContainer>
              <InputLabel>ProductID</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>Name</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>ProductCode</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>Brand</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>CPU</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel for="ram">RAM</InputLabel>
              <Select name="ram" id="ram">
                <Option value="" disabled selected>
                  Select your option
                </Option>

                <Option value="xx">xx</Option>
                <Option value="yy">yy</Option>
                <Option value="zz">zz</Option>
              </Select>
              {/* <Input></Input> */}
            </InputContainer>
            <InputContainer>
              <InputLabel>GPU</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>Price</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>Screen</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>Size</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>Amount</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>CPU</InputLabel>
              <Input></Input>
            </InputContainer>
          </InputLeft>
          <InputRight>
            <InputContainer>
              <InputLabel>ProductID</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>ProductID</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>ProductID</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>ProductID</InputLabel>
              <Input></Input>
            </InputContainer>
            <InputContainer>
              <InputLabel>ProductID</InputLabel>
              <Input></Input>
            </InputContainer>
          </InputRight>
        </FlexContainer>
      </Container>
    </Wraper>
  );
};

export default AddProduct;
