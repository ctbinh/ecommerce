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

const Home = () => {
  const brands = [
    {
      id: 0,
      img: images.acer
    },
    {
      id: 1,
      img: images.asus
    },
    {
      id: 2,
      img: images.gigabyte
    },
    {
      id: 3,
      img: images.hp
    },
    {
      id: 4,
      img: images.lg
    },
    {
      id: 5,
      img: images.msi
    },
    {
      id: 6,
      img: images.razer
    }
  ]
  // const products = [
  //   {
  //     id: 0,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 1,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 2,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 3,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 1,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 2,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 3,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 1,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 2,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 3,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00',
  //     desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
  //     cpu: 'N/A',
  //     featured: 'N/A',
  //     ports: 'N/A'
  //   },
  //   {
  //     id: 1,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 2,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 3,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 1,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 2,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 3,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 1,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 2,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 3,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 1,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 2,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   },
  //   {
  //     id: 3,
  //     rating: 4,
  //     instock: true,
  //     name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
  //     oldPrice: '599.00',
  //     newPrice: '499.00'
  //   }
  // ]
  const [show, setShow] = useState(0)
  const [num, setNum] = React.useState(30);
  const [display, setDisplay] = useState(0);
  const [brandsTaget, setBrandsTaget] = useState([]);
  const [currPage, setcurrPage] = useState(1)
  const [products, setproducts] = useState([])
  const changePage = (event, value) => {
    setcurrPage(value);
  };
  const changeDisplay = (value) => {
    setDisplay(value);
  }
  const handleChange = (event) => {
    setNum(event.target.value);
  };
  const filterBrand = (brandId) => {
    setBrandsTaget([brandId]);
    alert('Đang lấy dữ liệu để hiển thị sản phẩm');
  };
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost/ecommerce/backend/api/product/read.php');
      console.log(res.data.data)
      setproducts(res.data.data)
    }
    fetchProducts()
  }, [])
  
  return (
    <>
      <Header />
      <Container>
        <Poster src={images.poster} alt="poster" />
        <Brands>
          {brands.map((brand, key) => {
            return (
              <Brand src={brand.img} alt="brand" onClick={() => filterBrand(brand.id)}/>
            )
          })}
        </Brands>
          <Content>
            <BoxFilter show={show}>
              <Filter 
                brands={brands} 
                brandsTaget={brandsTaget} 
                setBrandsTaget={setBrandsTaget}
                setShow={setShow}
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
                        onChange={handleChange}
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
              {products.map((product) => {
                return (
                  <Product display={display} product={product} />
                )
              })}
              <div style={{width: '100%', display:'flex', justifyContent:'center', margin:'20px 0'}}>
                <Pagination count={10} defaultPage={currPage} color="primary" onChange={changePage}/>
              </div>
            </Products>
          </Content>
      </Container>
      <Footer/>
    </>
  )
}

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
  flex-wrap: wrap;
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