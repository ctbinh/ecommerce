import { Slider } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Button from '../Button'


const Filter = (props) => {
  const minDistance = 100;
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };
  const changeMin = (e) => {
    setValue([e.target.value, value[1]]);
  }
  const changeMax = (e) => {
    setValue([value[0], e.target.value]);
  }

  return (
    <Container>
      <Title>Filters</Title>
      <Button type='transparent' text="Clear Filter"/>
      <TypeFilter>Brands</TypeFilter>
      <Brands>
        {props.brands.map((brand) => {
          return (
            <Brand src={brand.img} alt='brand'/>
          )
        })}
      </Brands>
      <TypeFilter>RAM</TypeFilter>
      <Ram>
        <div>4GB</div>
        <div>15</div>
      </Ram>
      <Ram>
        <div>8GB</div>
        <div>15</div>
      </Ram>
      <Ram>
        <div>16GB</div>
        <div>1</div>
      </Ram>
      <TypeFilter>Price</TypeFilter>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        max='3000'
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <Row>
        <p style={{fontSize: '20px', color: 'gray'}}>$</p>
        <Input type='text' value={value[0]} onChange={(e) => changeMin(e)}></Input>
        <p style={{fontSize: '24px', color: 'gray'}}>-</p>
        <Input type='text' value={value[1]} onChange={(e) => changeMax(e)}></Input>
      </Row><br />
      <Button text="Apply Filter"/>
    </Container>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Input = styled.input`
  width: 70px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  height: 25px;
  padding: 5px;
`
const Ram = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0;
  :hover {
    cursor: pointer;
  }
`
const Brand = styled.img`
  width: 48%;
  margin: 1px;
  background-color: white;
  padding: 5px 10px;
  :hover {
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`
const Brands = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const TypeFilter = styled.p`
  font-weight: bold;
  margin: 10px 0;
  border-top: 1px solid #E5E5E5;
  padding-top: 10px;
`

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`
const Container = styled.div`
  width: 20%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #F5F7FF;
`

export default Filter