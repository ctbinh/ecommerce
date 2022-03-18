import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Icon,
  CardContainer,
  Card,
  CardLeft,
  CardNumber,
  CardTitle,
  IconCard,
} from "./style";
const CardBox = () => {
  return (
    <CardContainer>
      <Card>
        <CardLeft>
          <CardNumber>1,504</CardNumber>
          <CardTitle>Daily Views</CardTitle>
        </CardLeft>
        <IconCard>
          <FiEye />
        </IconCard>
      </Card>

      <Card>
        <CardLeft>
          <CardNumber>1,504</CardNumber>
          <CardTitle>Daily Views</CardTitle>
        </CardLeft>
        <IconCard>
          <FiEye />
        </IconCard>
      </Card>

      <Card>
        <CardLeft>
          <CardNumber>1,504</CardNumber>
          <CardTitle>Daily Views</CardTitle>
        </CardLeft>
        <IconCard>
          <FiEye />
        </IconCard>
      </Card>

      <Card>
        <CardLeft>
          <CardNumber>1,504</CardNumber>
          <CardTitle>Daily Views</CardTitle>
        </CardLeft>
        <IconCard>
          <FiEye />
        </IconCard>
      </Card>
    </CardContainer>
  );
};

export default CardBox;
