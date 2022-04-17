import React from "react";
import styled from "styled-components";
const Wrapper = styled.div``;
const SpanHeading = styled.span`
  color: #4c4f52;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  margin: 0px 0px 4px;
  text-transform: uppercase;
  display: block;
`;
const SpanContent = styled.span`
  color: ${(props) => props.color || "#707275"};
  font-size: ${(props) => (props.color ? "20px" : "14px")};
  font-weight: ${(props) => (props.color ? 700 : 600)};
  line-height: 21px;
`;
const SummaryInvoice = () => {
  return (
    <>
      <Wrapper>
        <SpanHeading>Payment Method</SpanHeading>
        <SpanContent>Card</SpanContent>
      </Wrapper>
      <Wrapper>
        <SpanHeading>SHIPPING COST</SpanHeading>
        <SpanContent>$60.00</SpanContent>
      </Wrapper>
      <Wrapper>
        <SpanHeading>DISCOUNT</SpanHeading>
        <SpanContent>$0.00</SpanContent>
      </Wrapper>
      <Wrapper>
        <SpanHeading>TOTAL AMOUNT</SpanHeading>
        <SpanContent color="red">$497.00</SpanContent>
      </Wrapper>
    </>
  );
};

export default SummaryInvoice;
