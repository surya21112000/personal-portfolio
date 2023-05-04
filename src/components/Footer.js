import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            
            <p>Surya-portfolio</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/surya-rengadurai-07ab8624b/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100054872771757&mibextid=ZbWKwL" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/surya_ackerman?igshid=ZDdkNTZiNTM=" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
          
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
