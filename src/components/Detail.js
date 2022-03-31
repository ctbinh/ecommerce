import styled from "styled-components";
// import { Container, Row, Col } from "react-grid-system";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from "react";
import { Rating } from "@mui/material";
import { Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';//bug do cai nay ne =====================
import { Carousel } from 'react-bootstrap';
import { Breadcrumbs, Link, Typography } from '@mui/material'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';

function TableRow(props) {
  return (
    <tr>
      <td style={{ color: "black", fontWeight: "500" }}>{props.field}</td>
      <td style={{ color: "#666666" }}>{props.value}</td>
    </tr>
  );
}
function CarouselImg(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <img
        className="d-block w-100"
        src={props.src}
        alt="slide"
        style={{
          display: "block",
          maxWidth: "735px",
          maxHeight: "50vw",
          width: "auto",
          height: "auto",
        }}
      />
    </div>
  );
  // </Carousel.Item>;
}

const Detail = () => {
  const [tab, setTab] = useState(0);
  const options = {
    margin: 30,
    responsiveClass: true,
    // nav: true,
    // dots: false,
    autoplay: false,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      200: {
        items: 1,
      },
      360: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 5,
      },
      800: {
        items: 5,
      },
      1000: {
        items: 6,
      }
    },
  };
  const reviews = [
    {
      username: "Janifer Lowrence",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      rate: 4,
      datetime: "30/09/2019",
    },
    {
      username: "Hoang kui",
      comment: "như bu*i",
      rate: 1,
      datetime: "23/03/2022",
    },
  ];
  const similarProduct = [
    {
      id: 0,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 5,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 1,
      img: "https://product.hstatic.net/1000233206/product/lg-gram-2021-14zd90p-g-ax51a5-1_10ebeafae1d64bc5a00168a46e9db5b6_master.png",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 2,
      img: "https://mayxaugiacao.com/wp-content/uploads/2022/02/top-laptop-dell-tot-nhat-2022.jpg",
      rating: 1,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00',
      desc: 'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
      cpu: 'N/A',
      featured: 'N/A',
      ports: 'N/A'
    },
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 1,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 2,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    },
    {
      id: 3,
      img: "https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg",
      rating: 4,
      instock: true,
      name: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...',
      oldPrice: '599.00',
      newPrice: '499.00'
    }
  ]
  const [count, setCount] = useState(1);

  const incrementCount = () => setCount(count + 1);
  let decrementCount = () => setCount(count - 1);
  return (
    <div>
      <Header />
      <TabNav>
        <TabItem onClick={() => setTab(0)} bottomBar={tab === 0}>
          About Product
        </TabItem>
        <TabItem onClick={() => setTab(1)} bottomBar={tab === 1}>
          Specs
        </TabItem>
      </TabNav>
      <Content>
        <Tab>
          {/* <Breadcrumb style={{margin: '10px 0 0px 0'}}>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Laptop
            </Breadcrumb.Item>
            <Breadcrumb.Item active>MSI</Breadcrumb.Item>
          </Breadcrumb> */}

          <Breadcrumbs separator="›" maxItems={3} aria-label="breadcrumb" style={{ margin: '10px 0 0px 0' }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Laptop
            </Link>
            <Typography color="text.primary">My Account</Typography>
          </Breadcrumbs>

          <Name>Laptop LG Gram 2021 14ZD90P-G.AX51A5 </Name>

          <Rate>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Rating size="small" name="read-only" value={4} readOnly />
              <p
                style={{ fontSize: "13px", color: "#a6a6a6", margin: "0 2px" }}
              >
                Reviews (4)
              </p>
            </div>
            <Status>
              <i class="fa fa-check-circle" aria-hidden="true"></i> in stock
            </Status>
          </Rate>

          <TabContent display={tab === 0} style={{ position: "relative" }}>
            <div>
              <Field>Product code:</Field>
              <Value>14ZD90P-G.AX51A5</Value>
            </div>
            <div>
              <Field>Brand:</Field>
              <Value>LG</Value>
            </div>

            <Description>
              The metal chassis is built well and houses a comfortable keyboard
              and touchpad. Ports include USB-C, two USB-A, HDMI, 3.5mm audio,
              and an SD card reader. Wi-Fi 6 is included, but there's no
              Thunderbolt due to the AMD platform. Otherwise, this is a
              beautiful laptop that's available at a great price.
            </Description>

            <div style={{ height: '200px' }}></div>

            <div style={{ position: "absolute", bottom: "0px" }}>
              <Price>
                <p className="oldPrice">
                  <s>{"$" + 499}</s>
                </p>
                <p className="price">
                  <b>{"$" + 399}</b>
                </p>
              </Price>

              {/* <input type="number" /> */}
              <div className="d-flex flex-row align-items-center" style={{ margin: '5px' }}>
                <Input className="d-flex flex-row align-items-center">
                  <div style={{ minWidth: '35px', textAlign: 'center' }}>
                    {count}
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <MdKeyboardArrowUp onClick={incrementCount} />
                    <MdKeyboardArrowDown onClick={decrementCount} />
                  </div>
                </Input>

                <Button style={{ borderRadius: "20px", padding: "6px 20px" }}>
                  Add to cart
                </Button>
              </div>
            </div>
          </TabContent>

          <TabContent display={tab === 1}>
            <div style={{ width: "90%", maxHeight: "100%", margin: "0 auto" }}>
              <table class="table table-striped table-hover">
                {/* <thead>
                  <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                  </tr>
                </thead> */}
                <tbody>
                  <TableRow
                    field="CPU"
                    value="Intel Core i5-1135G7 2.4GHz up to 4.2GHz 8MB"
                  ></TableRow>
                  <TableRow
                    field="RAM"
                    value="8GB (4GBx2) LPDDR4X 4266MHz (Onboard)"
                  ></TableRow>
                  <TableRow
                    field="GPU"
                    value="Intel Iris Xe Graphics"
                  ></TableRow>
                  <TableRow field="OS" value="FreeDos"></TableRow>
                  <TableRow
                    field="Display"
                    value="14 WUXGA (1920x1200), 16:10, IPS, DCI-P3 99%"
                  ></TableRow>
                  <TableRow
                    field="Size"
                    value="313.4 x 215.2 x 16.8 mm"
                  ></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                  <TableRow field="CPU" value="N/A"></TableRow>
                </tbody>
              </table>
            </div>
          </TabContent>
        </Tab>

        <ImgTab>
          <Carousel variant="dark" style={{ height: '100%' }} className="d-flex align-items-center">
            <Carousel.Item>
              <CarouselImg src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg"></CarouselImg>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImg src="https://mayxaugiacao.com/wp-content/uploads/2022/02/top-laptop-dell-tot-nhat-2022.jpg"></CarouselImg>
            </Carousel.Item>
            <Carousel.Item>
              <CarouselImg src="https://product.hstatic.net/1000233206/product/lg-gram-2021-14zd90p-g-ax51a5-1_10ebeafae1d64bc5a00168a46e9db5b6_master.png"></CarouselImg>
            </Carousel.Item>
          </Carousel>
        </ImgTab>
      </Content>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h3 style={{ fontWeight: "bold", marginTop: "40px" }}>
          More Information
        </h3>
        <p style={{ margin: "20px 10px 0 40px" }}>
          The quality of SAMSUNG Meets the accessibility of chrome OS. Its
          all-new light and compact design lets you stream, work, create, and
          play on a fast, secure device designed to take everywhere. You can
          download and save content and work with others using Google suite.
          Built with long-lasting, battery and Gigabit Wi-Fi connectivity, The
          new Samsung Chromebook 4 brings speed and efficiency to any and every
          task or adventure.
        </p>
        <img
          alt="laptop"
          style={{ margin: "20px auto", width: '80vw' }}
          src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/133670/Originals/acer-nitro-5-an515-55-1(1).jpg"
        ></img>

        <h3 style={{ fontWeight: "bold", marginTop: "40px" }}>Warranty</h3>
        <p style={{ margin: "20px 10px 0 40px" }}>1 years.</p>

        <h3 style={{ fontWeight: 'bold', marginTop: '40px' }}>Similar products</h3>
        <SimilarProduct>
          <OwlCarousel
            {...options}
            // items={6}
            className="owl-theme"
            // loop
            // nav
            margin={18} >
            {similarProduct.map((product) => {
              return (
                <SimilarItem>
                  <div className="img d-flex flex-row">
                    <img src={product.img} alt='similar product' />
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <Rating
                      size="small"
                      name="read-only"
                      value={product.rating}
                      readOnly
                    />
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#a6a6a6",
                        margin: "0 5px",
                      }}
                    >
                      {" "}
                      {product.rating}{" "}
                    </p>
                  </div>
                  <div className="name">{product.name}</div>
                  <p className="price" style={{ color: 'gray', margin: '0 0 0 5%' }}><s>{'$' + product.oldPrice}</s></p>
                  <p className="price" style={{ fontSize: '20px', margin: '0 0 0 5%' }}><b>{'$' + product.newPrice}</b></p>
                </SimilarItem>
              );
            })}
          </OwlCarousel>
        </SimilarProduct>

        <h3 style={{ fontWeight: 'bold', marginTop: '40px' }}>Customer reviews {'&'} ratings</h3>
        {/* 4.2 out of 5 */}
        {reviews.map((review) => {
          return (
            <Review>
              <div className="d-flex flex-row">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" alt="laptop" />
                <div className="w-100">
                  <div className="username">{review.username}</div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <Rating
                        size="small"
                        name="read-only"
                        value={4}
                        readOnly
                      />
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#a6a6a6",
                          margin: "0 5px",
                        }}
                      >
                        {" "}
                        4.0{" "}
                      </p>
                    </div>
                    <div className="datetime">{review.datetime}</div>
                  </div>
                </div>
              </div>

              <div className="comment">{review.comment}</div>
            </Review>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

const TabNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  padding-left: 4vw;
`;
const TabItem = styled.button`
  margin: 0px 20px;
  border: none;
  background: none;
  font-weight: bolder;
  border-bottom: ${(props) =>
    props.bottomBar === true ? "2px blue solid" : "none"};
`;
const Content = styled.div`
  border-top: 2px solid rgb(231 231 231);
  border-bottom: 2px solid rgb(231 231 231);
  width: 100%;
  min-height: 570px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;
const Tab = styled.div`
  width: 50%;
  background-color: #f5f7ff;
  padding-left: 10%;
  @media (max-width: 768px){
    width: 100%;
  }
`;
const TabContent = styled.div`
  display: ${(props) => (props.display === true ? "block" : "none")};
  min-height: 420px;
  overflow: auto;
`;
const Status = styled.div`
  /* text-align: ${(props) => (props.display === 0 ? "left" : "right")}; */
  color: #78a962;
  font-size: 13px;
  margin-right: 30px;
`;
const Rate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Name = styled.p`
  font-weight: 500;
  font-size: 28px;
  margin: 10px 30px 10px 0;
`;
const Field = styled.p`
  font-weight: 200;
  display: inline;
  font-size: 18px;
  line-height: 30px;
  margin-right: 20px;
`;
const Value = styled.p`
  font-weight: 900;
  display: inline;
`;
const Description = styled.p`
  margin: 20px 20px 0 0;
  font-weight: 20;
  font-size: 18px;
  text-align: justify;
`;
const Price = styled.div`
  align-self: flex-end;
  margin-bottom: 10px;
  p {
    margin: 0;
  }
  .oldPrice {
    color: gray;
    font-size: 24px;
  }
  .price {
    font-size: 36px;
  }
`;
const ImgTab = styled.div`
  width: 50%;
  @media (max-width: 768px){
    width: 100%;
    margin: 30px 0;
  }
`;
const Review = styled.div`
  background-color: #eaeaea;
  margin: 10px 10px 10px 30px;
  padding: 10px;
  border-radius: 10px;
  /* * {
    border: 1px red solid;
  } */
  img {
    border-radius: 50%;
    max-height: 50px;
    max-width: 50px;
    margin: 0 10px 10px 0;
  }
  .username {
    font-size: 24px;
    font-weight: bold;
  }
  .comment {
    margin: 5px 50px 10px 20px;
  }
  .datetime {
    font-style: italic;
  }
`;
const SimilarProduct = styled.div`
  @media (max-width: 768px){
    /* display: none; */
  }
`;
const SimilarItem = styled.div`
  height: 250px;
  margin-bottom: 5px;
  /* border: solid 2px gray; */
  /* border-radius: 10px; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px 0px;
  /* padding-left: 4px; */
  .img {
    height: 45%;
    /* border: solid 1px red; */
  }
  .name {
    font-size: 12px;
    height: 20%;
    overflow: hidden;
    margin-left: 5%;
  }
  .price {
    margin-left: 5%;
  }
  /* :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  } */
`;


const Input = styled.div`
    background-color: white;
    border-radius: 5px;
    border: none;
    padding: 3px;
    box-shadow: 0px 4px 4px gray;
    margin-right: 30px;
`;

export default Detail;
