import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    const info = [
        {
            "name": "Nguyễn Đình An",
            "img": "https://gamek.mediacdn.vn/133514250583805952/2020/7/11/narutossagemode-15944657133061535033027.png",
            "title": "Member",
            "description": "Người chỉ rảnh sau 22h tối."
        },
        {
            "name": "Nguyễn Trần Hoàng",
            "img": "https://ss-images.saostar.vn/w800/pc/1623644967146/saostar-mfsiymjr6vd2bsf9.jpg",
            "title": "Member",
            "description": "Thanh niên duy nhất code front-end không cần mockup."
        },
        {
            "name": "Cao Thanh Bình",
            "img": "https://img1.kienthucvui.vn/uploads/2021/12/23/anh-fanart-sasuke-dep_100750182.png",
            "title": "Member",
            "description": "Git Proplayer"
        },
        {
            "name": "Nguyễn Thành Long",
            "img": "https://i.pinimg.com/736x/84/76/30/847630e3c8e0224098903c8cc6d3708e.jpg",
            "title": "Member",
            "description": "Cô bé mong manh dễ vỡ."
        }
    ]
    return (
        <>
            <Header></Header>
            <AboutPage>
                <Row xs={1} md={2} className="g-4">
                    {info.map((member, idx) => (
                        <Col key={idx} >
                            <Card>
                                <Card.Img variant="top" src={member.img} />
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <p>Member</p>
                                    <Card.Text>{member.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </AboutPage>
            <Footer></Footer>
        </>
    );
};

const AboutPage = styled.div`
  width: 70%;
  margin: 40px auto;
`;

export default About;
