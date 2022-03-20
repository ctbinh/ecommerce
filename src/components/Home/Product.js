import { Rating } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import images from '../images'

const Product = (props) => {
  const product = props.product;
  return (
    <Container display={props.display}>
      {product.instock ? 
      <Status display={props.display}>
      <i class="fa fa-check-circle" aria-hidden="true"></i> in stock
      </Status> : ''}
      <Box display={props.display}>
        <div>
          <Image display={props.display}>
            <img src={images.lap1} style={{maxWidth:'100%', maxHeight: '100%'}} alt="laptop" />
          </Image>
          <Rate>
            <Rating size='small' name="read-only" value={product.rating} readOnly/>
            <p style={{fontSize: '13px', color: '#a6a6a6'}}>Reviews (4)</p>
          </Rate>
        </div>
        <div>
          <Name>{product.name}</Name>
          {props.display === 1 && <Desc>{product.desc}</Desc>}
          <Box display={props.display}>
            <p style={{color: 'gray'}}><s>{'$' + product.oldPrice}</s></p>
            <p style={{fontSize: '20px'}}><b>{'$' + product.newPrice}</b></p>
          </Box>
        </div>
      </Box>
    </Container>
  )
}

const Desc = styled.p`
  width: 40%;
`
const Box = styled.div`
  display: flex;
  flex-direction: ${props => props.display === 0 ? 'column' : 'row'};
`
const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
  height: 60px;
  overflow: hidden;
`
const Rate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Status = styled.div`
  text-align: ${props => props.display === 0 ? 'left' : 'right'};
  color: #78A962;
  font-size: 13px;
`
const Image = styled.div`
  width: ${props => props.display === 0 ? 'auto' : '200px'};
  height: 150px;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: ${props => props.display === 0 ? '20%' : '100%'};
  max-height: 300px;
  margin-bottom: 5px;
  :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`
export default Product