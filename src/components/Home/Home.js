import { FormControl, InputLabel, MenuItem, Pagination, Select } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import ReorderIcon from '@mui/icons-material/Reorder';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Footer from '../Footer'
import Header from '../Header'
import Footer from '../Footer'
import images from '../images'
import Filter from './Filter'
import Product from './Product'
// import http from '../../http-common';
import axios from 'axios';

let data = []
const Home = () => {
  const brands = [
    {
      id: 0,
      name: 'ACER',
      img: images.acer
    },
    {
      id: 1,
      name: 'ASUS',
      img: images.asus
    },
    {
      id: 2,
      name: 'GIGABYTE',
      img: images.gigabyte
    },
    {
      id: 3,
      name: 'HP',
      img: images.hp
    },
    {
      id: 4,
      name: 'LG',
      img: images.lg
    },
    {
      id: 5,
      name: 'MSI',
      img: images.msi
    },
    {
      id: 6,
      name: 'RAZER',
      img: images.razer
    }
  ]
  const [show, setShow] = useState(0)
  const [num, setNum] = useState(10);
  const [display, setDisplay] = useState(0);
  const [brandsTaget, setBrandsTaget] = useState([]);
  const [currPage, setcurrPage] = useState(1)
  const [products, setproducts] = useState([])
  const [countPage, setcountPage] = useState(0)
  const [filteredProducts, setfilteredProducts] = useState([])
  const [isFirst, setIsFirst] = useState(true)
  const [value, setValue] = useState([0, 3000]);
  const [ramFilter, setRamFilter] = useState([]);
  const changePage = (event, value) => {
    setcurrPage(value);
  };
  const changeDisplay = (value) => {
    setDisplay(value);
  }
  const changeNumPerPage = (event) => {
    setcurrPage(1)
    setNum(event.target.value);
    setcountPage(Math.ceil(filteredProducts.length/event.target.value))
  };
  const getProductPerPage = (products) => {
    const indexLast = currPage*num
    const indexFirst = indexLast - num
    setproducts(products.slice(indexFirst, indexLast))
  }
  const filterBrand = (brand) => {
    setcurrPage(1)
    setBrandsTaget([brand.name]);
    const productFiltered = data.filter(p => p.brand === brand.name)
    getProductPerPage(productFiltered)
    setfilteredProducts(productFiltered)
    setcountPage(Math.ceil(productFiltered.length/num))
  };
  const applyFilter = () => {
    if (brandsTaget.length === 0 && ramFilter.length === 0 && value[0] === 0 && value[1] === 3000) {
      getProductPerPage(data)
      setfilteredProducts(data)
      setcountPage(Math.ceil(data.length/num))
    }
    else {
      setcurrPage(1)
      const productFiltered = data.filter(p => {
        const fBrand = brandsTaget.length !== 0
        const fPrice = (value[0] !== 0 || value[1] !== 3000)
        const fRam = ramFilter.length !== 0
        if(!fBrand && !fPrice) {
          return(
            ramFilter.indexOf(p.ram.substring(0, 4).includes('4GB') ? '4GB': p.ram.substring(0, 4).includes('8GB') ? '8GB' : '16GB') > -1
          )
        }
        else if(!fBrand && !fRam) {
          return(
            p.price >= value[0] && p.price <= value[1]
          )
        }
        else if(!fPrice && !fRam) {
          return (brandsTaget.indexOf(p.brand) > -1)
        }
        else if(!fBrand) {
          return(
            p.price >= value[0] && p.price <= value[1] &&
            ramFilter.indexOf(p.ram.substring(0, 4).includes('4GB') ? '4GB': p.ram.substring(0, 4).includes('8GB') ? '8GB' : '16GB') > -1
          )
        }
        else if(!fRam) {
          return(
            brandsTaget.indexOf(p.brand) > -1 &&
            p.price >= value[0] && p.price <= value[1]
          )
        }
        else if(!fPrice) {
          return(
            brandsTaget.indexOf(p.brand) > -1 &&
            ramFilter.indexOf(p.ram.substring(0, 4).includes('4GB') ? '4GB': p.ram.substring(0, 4).includes('8GB') ? '8GB' : '16GB') > -1
          )
        }
        else {
          return (
            brandsTaget.indexOf(p.brand) > -1 &&
            ramFilter.indexOf(p.ram.substring(0, 4).includes('4GB') ? '4GB': p.ram.substring(0, 4).includes('8GB') ? '8GB' : '16GB') > -1 &&
            p.price >= value[0] && p.price <= value[1]
          )
        }
      })
      getProductPerPage(productFiltered)
      setfilteredProducts(productFiltered)
      setcountPage(Math.ceil(productFiltered.length/num))
    }
  }
  const clearFilter = () => {
    setBrandsTaget([]);
    setRamFilter([]);
    setValue([0, 3000]);
    getProductPerPage(data)
    setfilteredProducts(data)
    setcountPage(Math.ceil(data.length/num))
  }
  
  useEffect(() => {
    const fetchProducts = async () => {
      if(isFirst) {
        const res = await axios.get('http://localhost/ecommerce/backend/api/product/read.php');
        data = res.data.data
        setcountPage(Math.ceil(data.length/num))
        setfilteredProducts(data)
      }
      const indexLast = currPage*num
      const indexFirst = indexLast - num
      const pds = filteredProducts.slice(indexFirst, indexLast)
      setproducts(pds)
    }
    fetchProducts()
    setIsFirst(false)
  }, [currPage, num, filteredProducts, isFirst])
  
  return (
    <>
      <Header />
      <Container>
        <Poster src={images.poster} alt="poster" />
        <Brands>
          {brands.map((brand, key) => {
            return (
              <Brand src={brand.img} alt="brand" onClick={() => filterBrand(brand)}/>
            )
          })}
        </Brands>
        <Content>
          <BoxFilter show={show}>
            <Filter 
              brands={brands} 
              brandsTaget={brandsTaget} 
              setBrandsTaget={setBrandsTaget}
              value={value}
              setValue={setValue}
              ramFilter={ramFilter}
              setRamFilter={setRamFilter}
              setShow={setShow}
              applyFilter={applyFilter}
              clearFilter={clearFilter}
              show={show}/>
          </BoxFilter>
          <Products>
            <Row>
              <div></div>
              <DisplayOption>
                <div className="option">
                  <FormControl sx={{ m: 1}} size='small'>
                    <InputLabel id="show">Show</InputLabel>
                    <Select
                      labelId="show"
                      id="show"
                      value={num}
                      label="Show"
                      onChange={changeNumPerPage}
                    >
                      <MenuItem value={10}>10 per page</MenuItem>
                      <MenuItem value={20}>20 per page</MenuItem>
                      <MenuItem value={30}>30 per page</MenuItem>
                      <MenuItem value={40}>40 per page</MenuItem>
                      <MenuItem value={50}>50 per page</MenuItem>
                    </Select>
                  </FormControl>
                  <Icon onClick={() => changeDisplay(0)}><AppsIcon /></Icon>
                  <Icon onClick={() => changeDisplay(1)}><ReorderIcon /></Icon>
                </div>
                <div className="filter" onClick={() => setShow(1)}>
                  <Icon><FilterAltOutlinedIcon /></Icon>
                  <span>Filter</span>
                </div>
              </DisplayOption>
            </Row>
            <Pd>
              {products.map((product) => {
                return (
                  <Product display={display} product={product} />
                )
              })}
            </Pd>
            <div style={{width: '100%', display:'flex', justifyContent:'center', margin:'20px 0'}}>
              <Pagination count={countPage} color="primary" onChange={changePage} page={currPage}/>
            </div>
          </Products>
        </Content>
      </Container>
      <Footer/>
    </>
  )
}

const Pd = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const BoxFilter = styled.div`
  width: 20%;
  @media (max-width: 768px){
    left: ${props => props.show ? '0' : '-100%'};
    top: 0;
    width: 80%;
    height: 100vh;
    background-color: white;
    position: fixed;
    transition: all 0.5s ease;
    z-index: 999;
    box-shadow: ${props => props.show ? 'rgba(0, 0, 0, 0.4) 0px 30px 90px' : ''};
  }
`
const Icon = styled.div`
  :hover {
    cursor: pointer;
  }
  margin: 0 5px;
`
const DisplayOption = styled.div`
  & .option {
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px){
      display: none;
    }
  }
  & .filter {
    display: none;
    @media (max-width: 768px){
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
`
const Products = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  @media (max-width: 768px){
    width: 100%;
    margin-left: 0;
  }
`

const Brand = styled.img`
  background-color: white;
  width: 120px;
  height: 60px;
  padding: 0px 10px;
  margin: 10px 5px 0px 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media (max-width: 1024px){
    width: 100px;
    padding: 0px 5px;
  }
  @media (max-width: 768px){
    width: 95px;
  }
`

const Brands = styled.div`
  margin: 10px 0;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  border: 1px solid #E5E5E5;
  border-width: 2px 0 2px 0;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`

const Poster = styled.img`
  width: 100%;
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1024px){
    width: 100%;
    margin: 0;
  }
`

export default Home