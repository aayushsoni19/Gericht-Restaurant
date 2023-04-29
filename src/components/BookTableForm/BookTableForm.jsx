import React, { useState } from 'react'
import "./BookTableForm.css";
import { useNavigate } from "react-router-dom";

const BookTableForm = () => {
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        date: "",
        time: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {

        if (details.firstName == "" || details.lastName == "" || details.contact == "" || details.date == " " || details.time == "") {
            alert("Please Enter All Fields")
        } else {
            alert("Your Table is Booked...");
            navigate("/", { replace: true })
        }
    }

    return (
        <div class="background">
            <div class="book_container">
                <div class="card">
                    <div class="card-image">
                        <h2 class="card-heading">
                            Book Table
                            <small>Reservation Page</small>
                        </h2>
                    </div>
                    <form class="card-form">
                        <div class="input">
                            <input type="text" name='firstName' class="input-field" placeholder='First Name' required onChange={handleChange} />
                        </div>
                        <div class="input">
                            <input type="text" name='lastName' class="input-field" placeholder='Last Name' required onChange={handleChange} />
                        </div>
                        <div class="input">
                            <input type="number" name='contact' class="input-field" placeholder='Phone Number' required onChange={handleChange} />
                        </div>
                        <div class="input">
                            <input type="date" name='date' class="input-field" required onChange={handleChange} />
                        </div>
                        <div class="input">
                            <input type="time" name='time' class="input-field" required onChange={handleChange} />
                        </div>
                        <div class="action">
                            <button class="action-button" onClick={handleSubmit}>Book Table</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default BookTableForm