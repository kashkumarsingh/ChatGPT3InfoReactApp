import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";  
import GPT3AIimg from "../../assets/AIEngine.svg";
import "./header.css";

function Header() {
  return (
    <div className="gpt3__header">
      <Container >
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="gpt3__header-left">
              <h1 className="gpt3__header-left__heading">Experience the Future of Language with GPT-3</h1>
              <p>GPT-3 can generate human-like text in a wide range of styles and
                topics.It can provide answers to a variety of questions, from
                factual to opinion-based, based on the context given.It can
                translate between multiple languages, making it a useful tool
                for cross-lingual communication.</p>
              <Button className="gpt3__primary"><a href="#wgpt3">Get Started</a></Button>
              <div className="gpt3__header-left__people">
                 
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="gpt3__header-right">
              <Image src={GPT3AIimg} alt="Header Hero Image" fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
