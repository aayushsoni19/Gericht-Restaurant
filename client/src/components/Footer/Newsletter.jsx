import React, { useState } from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import axios from "axios"

const Newsletter = () => {
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value })
  }

  const subscribe = async () => {
    const res = await axios.post("https://gericht-backend.vercel.app/newsletter", {
      email
    });

    const result = await res.json;
    const status = res.status;

    if (status == 200) {
      alert("Email Subscribed")
    } else {
      alert("Error Occurred")
    }
  }

  const handleSubmit = (e) => {
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
        <form onSubmit={handleSubmit}>
          <div className="app__newsletter-input flex__center">
            <input type="email" name='email' placeholder="Enter your email address" onChange={handleChange} />
            <button className="custom__button" >Subscribe</button>
          </div>
        </form>
      </div>
    </>
  )
};

export default Newsletter;
