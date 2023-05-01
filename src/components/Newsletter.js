import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { Heartbreak } from "react-bootstrap-icons";
// import Heart from "react-animated-heart";
// import  BagHeart  from "react-bootstrap-icons";
import { BagHeart } from "react-bootstrap-icons";
import { Heart,HeartFill } from "react-bootstrap-icons";
import axios from "axios";
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [like,setLike]=useState(false);
  const[count,setCount]=useState(null);



  useEffect(() => {
    if (status === 'success') clearFields();
if(localStorage.getItem('like')){
  setLike(true)
}
else{
  setLike(false)
}
axios.get("https://portoflio-resume-default-rtdb.firebaseio.com/collection.json").then(res=>{console.log(res.data);setCount(res.data) } ).catch(err=>{console.log(err)})


  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              {/* <h3>Like my Profile ?<br></br> </h3> */}
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>


              {like?<HeartFill  color="red" size={50} style={{cursor:"pointer"}}  onClick={()=>{setLike(false)
                
                axios.put('https://suryaportfolio-db36b-default-rtdb.firebaseio.com/collection.json', {collection:count-1})
                .then(response => {
                  console.log('User updated successfully:', response.data);
                  localStorage.removeItem('like')
                })
                .catch(error => {
                  console.error('Error updating user:', error);
                });
                setCount(count-1)
              }
              }/>:<Heart color="red" size={50} style={{cursor:"pointer"}}  onClick={()=>{setLike(true)
                
                axios.put('https://suryaportfolio-db36b-default-rtdb.firebaseio.com/collection.json', {collection:count+1})
                .then(response => {
                  
                  localStorage.setItem('like', like)
                  console.log('User updated successfully:', response.data);
                })
                .catch(error => {
                  console.error('Error updating user:', error);
                });
              
              
              
              setCount(count+1)
              }
              }/>}
              <span style={{fontSize:27,paddingLeft:20,color:"red"}} >{count}</span>
              {/* <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form> */}
            </Col>
          </Row>
        </div>
      </Col>
  )
}
