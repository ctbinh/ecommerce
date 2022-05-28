import styled from 'styled-components'
import { Row, Col } from "react-grid-system";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

import React, { useState } from 'react';

const RowOfTable = (props) => {
    const [count, setCount] = useState(props.product.amount);

    const incrementCount = () => setCount(count + 1);
    let decrementCount = () => setCount(count - 1);
    const Delete = () => {
        setCount(0)
    }
    if(count <= 0) {
        return <></> 
    }
    return (
        <div>
        <HoverRow>
        <Row style={RowTable}>
            <Col md={7} sm={3} xs={3}>
            <Row>
                <Col sm={2.5}>
                    <ContainerImg> 
                        <ImgProduct src={props.product.img_cover} alt="Nothing"/>
                    </ContainerImg>
                </Col>
                <ColResponesive sm={9.5}><Describe>{props.product.name}</Describe></ColResponesive>
            </Row>
            </Col>
            <Col md={2} sm={3} xs={3}>
                {/* {props.product.price.toLocaleString()} */}
                {props.product.price}
            </Col>
            <Col md={1.2} sm={2.2} xs={2.2}>
                <div style={ArrowIcon}>
                    {count}
                    <Arrow>
                        <ArrowUp>
                            <MdKeyboardArrowUp onClick={incrementCount}/>
                        </ArrowUp>
                        <ArrowDown>
                            <MdKeyboardArrowDown onClick={decrementCount}/>
                        </ArrowDown>
                    </Arrow>
                </div>
            </Col>
            <CloseResponesive md={1.8} sm={2.8} xs={2.8}>
                {/* {props.product.subtotal.toLocaleString()} */}
                {props.product.price* props.product.amount}
                <Close>
                    <AiOutlineCloseCircle size={18} color="#888888" onClick={Delete}/>
                </Close>
            </CloseResponesive>
        </Row>
        </HoverRow>
        <Line/>
        </div>
    )
}
const ContainerImg = styled.div`
    border: solid 1px;
    height: 80px;
    width: 80px;
`
const Close = styled.div`
    position: absolute;
    right: 20px;
    top: 0;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        color: black;
        transform: scale(1.1);
    }
    margin-left: 10px;
`
const Line = styled.hr`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 1px;
    background-color:#CACDD8;
    border-radius: 10%;

`
const ImgProduct = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fit;
`
const Describe = styled.div`
    display: inline;
`
const HoverRow = styled.div`
    transition: all 0.3s;
    &:hover {
        background-color: #EEEEEE;
    }
    cursor: pointer;
`
const RowTable = {
    height: "100px",
    display: "flex",
    alignItems: "center",
}
const ArrowIcon = {
    display: "flex",
    verticalAlign: "middle",   
    alignItems: "center",
    // backgroundColor: "red",
    border: "solid 1px #DDDDDD",
    paddingLeft: "10px",
    // paddingTop: "2px",
    // paddingBottom: "2px",
    borderRadius: "5px",
    width: "50px",
}
const Arrow = styled.span`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    text-align: center;
    align-items: center;
    border-radius: 5px;
    /* background-color: red; */
`

const ArrowUp = styled.span`
    color: #A2A6B0;
    /* margin-bottom: 0px; */
    cursor: "pointer";
    transition: all .3s;
    :hover {
        transform: scale(1.1);
        color: #0066FF;
    }
`

const ArrowDown = styled.i`
    color: #A2A6B0;
    cursor: "pointer";
    transition: all .3s;
    :hover {
        transform: scale(1.3);
        color: #0066FF;
    }
`
const ColResponesive = styled(Col)`
    @media (max-width: 780px) {
        display: none;
    }
`
const CloseResponesive = styled(Col)`
    @media (max-width: 480px) {
        display: none;
    }
`

export default RowOfTable