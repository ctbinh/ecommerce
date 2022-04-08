import React from 'react'
import styled from 'styled-components'
import images from '../images'

const Orders = (props) => {
  return (
    <Container>
      <NavOrders>
        <TypeOrders className={props.target==='all'?'active':''} onClick={()=>props.changeTypeOrders('all')}>
          All
        </TypeOrders>
        <TypeOrders className={props.target==='delivering'?'active':''} onClick={()=>props.changeTypeOrders('delivering')}>
          Delivering
        </TypeOrders>
        <TypeOrders className={props.target==='delivered'?'active':''} onClick={()=>props.changeTypeOrders('delivered')}>
          Delivered
        </TypeOrders>
        <TypeOrders className={props.target==='cancelled'?'active':''} onClick={()=>props.changeTypeOrders('cancelled')}>
          Cancelled
        </TypeOrders>
      </NavOrders>
      <Hr color='#b8b8b8'/>
      <Order>
        <Item>
          <Image>
            <img src={images.item1} alt="item" style={{width:'auto',height:'100%'}}/>
          </Image>
          <Detail>
            <Name>MSI MEG Trident X 10SD-1012AU Intel</Name>
            <Desc>
              MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
            </Desc>
            <Price>$4,000.00</Price>
            <Qty>x3</Qty>
            <Price fw='bold'>$12.000.00</Price>
          </Detail>
        </Item>
        <Item>
          <Image>
            <img src={images.lap1} alt="item" style={{width:'auto',height:'100%'}}/>
          </Image>
          <Detail>
            <Name>MSI MEG Trident X 10SD-1012AU Intel</Name>
            <Desc>
              MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
            </Desc>
            <Price>$4,349.00</Price>
            <Qty>x1</Qty>
            <Price fw='bold'>$4,349.00</Price>
          </Detail>
        </Item>
        <Text style={{textAlign:'right'}}>Delivery cost: $5</Text>
        <Hr/>
        <Total>
          <Text className='time'>Date: 1/1/2020 - 02:30 PM</Text>
          <Text className='total'>Total: $16,354.00</Text>
        </Total>
      </Order>
      <Order>
      <Item>
          <Image>
            <img src={images.item1} alt="item" style={{width:'auto',height:'100%'}}/>
          </Image>
          <Detail>
            <Name>MSI MEG Trident X 10SD-1012AU Intel</Name>
            <Desc>
              MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
            </Desc>
            <Price>$4,000.00</Price>
            <Qty>x3</Qty>
            <Price fw='bold'>$12.000.00</Price>
          </Detail>
        </Item>
        <Item>
          <Image>
            <img src={images.lap1} alt="item" style={{width:'auto',height:'100%'}}/>
          </Image>
          <Detail>
            <Name>MSI MEG Trident X 10SD-1012AU Intel</Name>
            <Desc>
              MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
            </Desc>
            <Price>$4,349.00</Price>
            <Qty>x1</Qty>
            <Price fw='bold'>$4,349.00</Price>
          </Detail>
        </Item>
        <Text style={{textAlign:'right'}}>Delivery cost: $5</Text>
        <Hr/>
        <Total>
          <Text className='time'>Date: 1/1/2020 - 02:30 PM</Text>
          <Text className='total'>Total: $16,354.00</Text>
        </Total>
      </Order>
    </Container>
  )
}


const Text = styled.p`
  margin: 0px;
`
const Name = styled.div`
  width: 100%;
  font-weight: bold;
  @media (max-width: 480px){
    font-size: 16px;
    font-weight: 400;
  }
`
const Detail = styled.div`
  width: 85%;
  box-sizing: border-box;
  padding-left: 10px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`
const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .time {
    color: gray;
  }
  .total {
    font-weight: bold;
    font-size: 20px;
    @media (max-width: 480px){
      font-size: 18px;
    }
  }
`
const Qty = styled.div`
  width: 50px;
  text-align: center;
  background-color: #F5F7FF;
  height: fit-content;
  margin: 0 auto;
  padding: 10px 0;
  border-radius: 5px;
  color: gray;
`
const Price = styled.span`
  font-weight: ${props=>props.fw?props.fw:''};
  flex: 1;
  padding-top: 10px;
  text-align: ${props=>props.fw?'right':'center'};
  color: gray;
  @media (max-width: 480px){
    text-align: ${props=>props.fw?'right':'left'};
  }
`
const Desc = styled.span`
  width: 35%;
  height: 80%;
  overflow: hidden;
  padding-top: 10px;
  @media (max-width: 480px){
    display: none;
  }
`
const Image = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 15%;
`
const Item = styled.div`
  display: flex;
  flex-direction: row;
  height: 120px;
  width: 100%;
  margin-bottom: 5px;
  
  @media (max-width: 768px){
    height: 100px;
  }
  @media (max-width: 480px){
    height: 80px;
  }
`
const Order = styled.div`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const TypeOrders = styled.div`
  color: gray;
  text-align: center;
  padding: 5px 10px;
  width: 150px;
  cursor: pointer;
  &.active {
    border-bottom: 4px solid #0156FF;
  }
`
const NavOrders = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const Hr = styled.hr`
  border: 0;
  height: 0.2px;
  margin: 0px;
  background-image: -webkit-linear-gradient(gray, gray, gray);
`
const Container = styled.div`
  padding: 0;
  width: 100%;
`

export default Orders