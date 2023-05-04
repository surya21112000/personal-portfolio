import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [fNameError,setfNameError] = useState(false);
  const [sNameError,setSNameError] = useState(false);
  const [emailError,setEmailError] = useState(false);
  const [phoneError,setPhoneError] = useState(false);
  const [messageError,setMessageError] = useState(false);

  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formDetails.firstName.length<1||formDetails.lastName.length<1||formDetails.email.length<1||formDetails.phone.length<1||formDetails.message.length<1){
      e.preventDefault()
    
    if(formDetails.firstName.length<1){
      setfNameError(true)
    }
    else{
      setfNameError(false)
    }
    if (formDetails.lastName.length<1){
      setSNameError(true)
    }
    else{
      setSNameError(false)
    }
    if (formDetails.email.length<1||!emailRegex.test(formDetails.email)){
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }
    if (formDetails.phone.length<1){
      setPhoneError(true)
    }
    else{
      setPhoneError(false)
    }
    if (formDetails.message.length<1){
      setMessageError(true)
  }else{
setMessageError(false)
  }}
  else{
    e.preventDefault();
    setButtonText("Sending...");
setEmailError(false)
setMessageError(false)
setfNameError(false)
setSNameError(false)
setPhoneError(false)

    setTimeout(() => {
      setButtonText("Sent successfully");
    },1000)

    console.log(formDetails)
    setButtonText("Send");

  
    setFormDetails(formInitialDetails);
setStatus({ succes: true, message: ''});
  }};

  return (
    <section className="contact" id="connect">
      <Container style={{color:"black"}}>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={'https://i.ibb.co/cNz8dVH/6794633.jpg'}  alt="Contact Us"/>
              }
            </TrackVisibility> */}
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "es" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit} style={{color:"black"}}>
                  <Row>
                    <Col size={12} sm={6} className="px-1" >
                      <input type="text" style={{border:fNameError?"1px solid red":"0.5px solid white", color:"black"}} value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" style={{border:sNameError?"1px solid red":"0.5px solid white", color:"black"}} value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" style={{border:emailError?"1px solid red":"0.5px solid white", color:"black"}} value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="number" style={{border:phoneError?"1px solid red":"0.5px solid white", color:"black"}} value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" style={{border:messageError?"1px solid red":"0.5px solid white", color:"black"}} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
