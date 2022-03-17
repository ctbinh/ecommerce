import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Header from '../Header'
import images from '../images'
import Filter from './Filter'

const Home = () => {
  const brands = [
    {
      id: 0,
      img: images.adata
    },
    {
      id: 1,
      img: images.gigabyte
    },
    {
      id: 2,
      img: images.hp
    },
    {
      id: 3,
      img: images.msi
    },
    {
      id: 4,
      img: images.razer
    },
    {
      id: 5,
      img: images.roccat
    },
    {
      id: 6,
      img: images.thermaltake
    }
  ]
  return (
    <>
    <Header/>
      <Container>
        <Poster src={images.poster} alt="poster" />
        <Brands>
          {brands.map((brand, key) => {
            return (
              <Brand src={brand.img} alt="a" />
            )
          })}
        </Brands>
        <Content>
          <Filter brands={brands}/>
          <Products>
            b
          </Products>
        </Content>
      </Container>
    {/* <Footer/> */}
    </>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
`
const Products = styled.div`
  width: 80%;
  background-color: greenyellow;
`

const Brand = styled.img`
  background-color: white;
  width: 120px;
  padding: 0px 10px;
  margin: 10px 5px 0px 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  justify-content: space-between;
  flex-wrap: wrap;
`

const Poster = styled.img`
  width: 100%;
`

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`

export default Home