import styled from 'styled-components'
import { Container, Row, Col } from "react-grid-system";
import { useEffect, useState } from 'react';

import ImageUploading from "react-images-uploading";
import { GrEdit } from "react-icons/gr"
import axios from 'axios'
// const User = {
//     "username": "Long",
//     "password": "123456",
//     "fname": "Nguyen",
//     "lname": "Long",
//     "email": "Nothing@gmail.com",
//     "phone": "0984046827",
//     "url_avt": "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-trang-dep-1.jpg",
//     "birthday": "2001-01-01",
// }
export default function Information (props) {

    const choices = [
        {
            id: 1,
            name: "Male"
        },
        {
            id: 2,
            name: "Female"
        },
        {
            id: 3,
            name: "Other"
        }
    ]

    const [checked, setChecked] = useState(1);

    const [images, setImages] = useState([]);
    const [userInfor, setUserInfor] = useState([])
    // images.data_url = User.url_avt;
    // const maxNumber = 69;
    const onChange = async (imageList, addUpdateIndex) => {
    // data for submit
        setImages(imageList);
        const formData = new FormData();
        formData.append("file", imageList[0].file);
        formData.append("api_key", 174989952789425);
        formData.append("upload_preset", "iinnk03t");
        const res = await axios.post("https://api.cloudinary.com/v1_1/dd8b69mls/image/upload", formData)

        console.log("test", res.data.url)
        const data = {
            user_id: sessionStorage.getItem('user_id'),
            url_avt: res.data.url
        };
        axios.post("http://localhost/ecommerce/backend/api/user/updateImg.php", data)
            .then((response) => {
                console.log(response);
            })  
    };
    useEffect(() => {
        const fetchUser = async () => {
            const id = sessionStorage.getItem('user_id')
            const res = await axios.get('http://localhost/ecommerce/backend/api/user/getUser.php?user_id=' + id);
            console.log("trs", res.data.data)
            setUserInfor(res.data.data[0])
          }
          fetchUser()
    }, [])
    
    return (
        <div>
            <Title>Account Information</Title>
            <Line/>
            <Container>
                <Row>
                    <ColStyled lg={4}>
                        <ImageUploading
                            // multiple
                            value={images}
                            onChange={onChange}
                            // maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps
                        }) => (
                            <ContainerEdit className="upload__image-wrapper">
                                {imageList.length === 0 && <ContainerImg> 
                                    <ImgProduct src={userInfor["url_avt"]} alt="UserImage"/>     
                                </ContainerImg>}
                                {imageList.map((image, index) => (
                                    // <div key={index} className="image-item">
                                    //     <img src={image.data_url} alt="" width="100" />
                                    // </div>
                                    <ContainerImg key={index}> 
                                        <ImgProduct src={image.data_url} alt="UserImage"/>
                                    </ContainerImg>
                                ))}
                                <ButtonEdit
                                    style={isDragging ? { color: "red" } : null}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    <IconEdit size={"3vw"}/>
                                </ButtonEdit>
                                
                            </ContainerEdit>
                        )}
                        </ImageUploading>
                    </ColStyled>
                    <Col>
                        <Row>
                            <Col sm={3}><NameInput>Username: </NameInput> </Col>
                            <Col sm={9}><NameInput>{userInfor.username}</NameInput></Col>
                        </Row>
                        <ContainerInput>
                            <Row>
                                <Col lg={2.5}><NameInput>First Name</NameInput></Col>
                                <Col lg={9.5}><Input type="text" placeholder={userInfor.fName}/></Col>
                            </Row>
                        </ContainerInput>
                        <ContainerInput>
                            <Row>
                                <Col lg={2.5}><NameInput>Last Name</NameInput></Col>
                                <Col lg={9.5}><Input type="text" placeholder={userInfor.lName}/></Col>
                            </Row>
                        </ContainerInput>
                        <ContainerInput>
                            <Row>
                                <Col lg={2.5}><NameInput>Email</NameInput></Col>
                                <Col lg={9.5}><Input type="text" placeholder={userInfor.email}/></Col>
                            </Row>
                        </ContainerInput>
                        <ContainerInput>
                            <Row>
                                <Col lg={2.5}><NameInput>Phone</NameInput></Col>
                                <Col lg={9.5}><Input type="text" placeholder={userInfor.phone}/></Col>
                            </Row>
                        </ContainerInput>
                        {/* <Row>
                            <Col lg={2.5}><NameInput>Gender</NameInput></Col>
                            <Col lg={9.5}>
                            {choices.map(choice => (
                                <SpanChoice  key={choice.id}>
                                    <InputChoice 
                                        type="radio" 
                                        onChange={() => setChecked(choice.id)}
                                        checked={choice.id === checked}
                                    />
                                        {choice.name} 
                                </SpanChoice>
                            ))}
                            </Col>
                        </Row> */}
                        <Row>
                            <Col lg={2.5}><NameInput>Birthday</NameInput></Col>
                            <Col lg={9.5}><Input type="date" id="start" name="trip-start" value={userInfor.birthday} min="2018-01-01" max="2022-12-31"/></Col>
                        </Row>
                            <ButtonSave>Save</ButtonSave>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

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
    border-radius: 50%;
`
const ContainerImg = styled.div`
    border: solid 1px;
    height: 15vw;
    width: 15vw;
    border-radius: 50%;
    border: none;
`

const ContainerInput = styled.div`
    /* background-color: #F5F7FF; */
    margin-bottom: 5px;
    border-top-right-radius: 15px;
    padding-top: 5px;
`
const NameInput = styled.span`
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 90%;
    height: 30px;
    line-height: 30px;
    
    /* background-color: red; */
`
const Input = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: solid #CCCCCC 1px;
    padding-left: 2%;
`
const ColStyled = styled(Col)`
    /* background-color: red; */
`
const SpanChoice = styled.span`
    margin-right: 10px;
    font-size: 90%;
`
const InputChoice = styled.input`
    margin: 5px;
    font-size: 90%;
`
const ButtonSave = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 10px;
    border: none;
    float: right;
    margin-top: 20px;
    background-color: #0156FF;
    font-weight: 600;
    color: white;
    transition: all .3s;
    :hover {
        background-color: #00369F;
    }
    cursor: pointer;
`
const Title = styled.div`
    font-weight: 600;
    font-size: 104%;
`
const IconEdit = styled(GrEdit)`
    background-color: 	#CCCCCC;
    border-radius: 50%;
    padding: 6px 6px;
    transition: all 0.5s;
    :hover {
        background-color: #A98F8F;
    }
    border: none;
`
const ButtonEdit = styled.div`
    position: absolute;
    z-index: 2;
    cursor: pointer;
    border-radius: 50%;
    border: solid 2.5px white;
    left: 2vw;
    
`
const ContainerEdit = styled.div`
    display: flex;
    align-items: flex-end;
`