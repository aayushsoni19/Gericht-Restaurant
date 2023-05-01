import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import axios from "axios"

const Newsletter = () => {
  const [email, setEmail] = useState();

  const handleChange = (e)=>{
    setEmail({...email, [e.target.name] : e.target.value})
  }

  const subscribe = async()=>{
    const {email} = email
    const res = await axios.post("http://localhost:8080/newsletter", {
      email
    });

    const result = await res.json;
    const status = res.status;

    if(status == 200){
      alert("Email Subscribed")
    }else{
      alert("Error Occurred")
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    subscribe();
  }

return (
  <>
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" name='email' placeholder="Enter your email address" onChange={handleChange}/>
        <button type="button" className="custom__button" onSubmit={handleSubmit}>Subscribe</button>
      </div>
    </div>
  </>
)
};

export default Newsletter;
