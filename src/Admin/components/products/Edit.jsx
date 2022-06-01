import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import TextContainer from "./TextContainer";
import { useSearchParams } from "react-router-dom";
import swal from "sweetalert";
import { useSelector, useDispatch } from "react-redux";
import {
  getSingleProduct,
  singleProductsSelector,
  updateProduct,
} from "../../store/reducers/productsSlice";
import { Box, CircularProgress, Fab, Input, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
const Detail = () => {
  // handle change input
  const handleChange = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.value", e.target.value);
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  // param in url
  let [searchParams, setSearchParams] = useSearchParams();

  // redux
  const product = useSelector(singleProductsSelector);
  const dispatch = useDispatch();

  //state
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  useEffect(() => {
    dispatch(getSingleProduct(searchParams.get("id")));
    window.scrollTo(0, 0);
    setUpdatedProduct({ ...product });
  }, [dispatch]);
  useEffect(() => {
    setUpdatedProduct({ ...product });
  }, [product]);
  // navigate
  const navigate = useNavigate();

  //   logic
  if (product.loading) {
    return <CircularProgress />;
  }

  // handle update
  const handleUpdateProduct = () => {
    swal({
      title: "Are you sure?",
      text: "Once updated, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(updateProduct(updatedProduct));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        navigate(`../product/detail/?id=${updatedProduct.product_id}`);
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    dispatch(updateProduct(updatedProduct));
  };
  console.log("????", updatedProduct);
  return (
    <>
      <Wrap className="mb-10">
        <Container>
          <Carousel autoPlay>
            <div>
              <img src={product.img_cover} alt="" />
            </div>
            {product.imgList.map((imgItem) => (
              <div>
                <img src={imgItem.url} alt="" />
              </div>
            ))}
          </Carousel>
          {/*           
          <ContainerComment>
            <Header>
              <Heading>Comment</Heading>
            </Header>
            <Table>
              <Tr>
                <Th>Name</Th>
                <Th>Content</Th>
                <Th>Action</Th>
              </Tr>
              <Tr>
                <Td>An moixxxxxx</Td>
                <Td>Như cc</Td>
                <Td>Remove</Td>
              </Tr>
              <Tr>
                <Td>An moi</Td>
                <Td>Như cc</Td>
                <Td>Remove</Td>
              </Tr>
              <Tr>
                <Td>An moi</Td>
                <Td>Như cc</Td>
                <Td>Remove</Td>
              </Tr>
              <Tr>
                <Td>An moi</Td>
                <Td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas veritatis laudantium est. Est dolorem voluptatum
                  maxime dicta amet ducimus repudiandae, odit, autem aut illo
                  ullam, doloribus sequi temporibus voluptates ipsa?
                </Td>
                <Td>Remove</Td>
              </Tr>
              <Tr>
                <Td>An moi</Td>
                <Td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas veritatis laudantium est. Est dolorem voluptatum
                  maxime dicta amet ducimus repudiandae, odit, autem aut illo
                  ullam, doloribus sequi temporibus voluptates ipsa?
                </Td>
                <Td>Remove</Td>
              </Tr>
              <Tr>
                <Td>An moi</Td>
                <Td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas veritatis laudantium est. Est dolorem voluptatum
                  maxime dicta amet ducimus repudiandae, odit, autem aut illo
                  ullam, doloribus sequi temporibus voluptates ipsa?
                </Td>
                <Td>Remove</Td>
              </Tr>
              <Tr>
                <Td>An moi</Td>
                <Td>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas veritatis laudantium est. Est dolorem voluptatum
                  maxime dicta amet ducimus repudiandae, odit, autem aut illo
                  ullam, doloribus sequi temporibus voluptates ipsa?
                </Td>
                <Td>Remove</Td>
              </Tr>
            </Table>
          </ContainerComment> */}
        </Container>
        <Container>
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              position: "fixed",
              // display: "flex",
              // justifyContent: "flex-end",
              right: "10px",
              bottom: "20px",
            }}
          >
            <Fab
              color="primary"
              aria-label="add"
              onClick={() => handleUpdateProduct()}
            >
              <DoneIcon />
            </Fab>
          </Box>

          <TextField
            id="outlined-basic"
            label="Id"
            variant="outlined"
            name="id"
            className="mt-3"
            value={updatedProduct.product_id}
            fullWidth
            disabled
          />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            className="mt-3"
            value={updatedProduct.name}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          <TextField
            id="outlined-basic"
            label="Brand"
            variant="outlined"
            name="brand"
            className="mt-3"
            value={updatedProduct.brand}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          <TextField
            id="outlined-basic"
            className="mt-3"
            label="Amount"
            variant="outlined"
            name="amount"
            value={updatedProduct.amount}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          <TextField
            id="outlined-basic"
            label="Cpu"
            className="mt-3"
            variant="outlined"
            name="cpu"
            value={updatedProduct.cpu}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          <TextField
            id="outlined-basic"
            label="Description"
            className="mt-3"
            variant="outlined"
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          {/* <Input label="Description" text={updatedProduct.description} /> */}
          <TextField
            id="outlined-basic"
            className="mt-3"
            label="Gpu"
            variant="outlined"
            name="gpu"
            value={updatedProduct.gpu}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          {/* <Input label="GPU" text={updatedProduct.gpu} /> */}
          <TextField
            id="outlined-basic"
            className="mt-3"
            label="OS"
            variant="outlined"
            name="os"
            value={updatedProduct.os}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          {/* <Input label="OS" text={updatedProduct.os} /> */}
          <TextField
            id="outlined-basic"
            className="mt-3"
            label="Price"
            variant="outlined"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          {/* <Input label="Price" text={updatedProduct.price} /> */}
          <TextField
            id="outlined-basic"
            className="mt-3"
            label="RAM"
            variant="outlined"
            name="ram"
            value={updatedProduct.ram}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          {/* <Input label="Ram" text={updatedProduct.ram} /> */}
          <TextField
            id="outlined-basic"
            label="Rating"
            variant="outlined"
            name="rating"
            className="mt-3"
            value={updatedProduct.rating}
            fullWidth
            disabled
          />
          {/* <Input label="Rating" text={updatedProduct.rating} /> */}
          <TextField
            id="outlined-basic"
            className="mt-3"
            label="Screen"
            variant="outlined"
            name="screen"
            value={updatedProduct.screen}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          {/* <Input label="Screen" text={updatedProduct.screen} /> */}
          <TextField
            id="outlined-basic"
            className="mt-3"
            label="Size"
            variant="outlined"
            name="size"
            value={updatedProduct.size}
            onChange={handleChange}
            fullWidth
            autoComplete
          />
          {/* <Input label="Size" text={updatedProduct.size} /> */}
        </Container>
      </Wrap>
    </>
  );
};
// CSS
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 100px;
`;
const Container = styled.div`
  width: 100%;
  max-width: 700px;
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;
const Label = styled.label`
  min-width: 100px;
`;
const Span = styled.span`
  color: #8d95b4;
`;
const ContainerComment = styled.div``;
const Header = styled.div``;
const Heading = styled.h3``;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  table-layout: auto;
  margin: 14px 0 28px;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;
const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  &:nth-child(1) {
    width: 150px;
  }
  &:nth-child(3) {
    color: red;
  }
  text-overflow: ellipsis;
`;
const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  &:nth-child(3) {
    color: blue;
  }
`;

export default Detail;
