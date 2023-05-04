import React, { useState } from 'react'
import "./BookTableForm.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

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

    const bookTable = async () => {
        const { firstName, lastName, contact, date, time } = details;
        const res = await axios.post("https://gericht-backend.vercel.app/reservations", {
            firstName, lastName, contact, date, time
        });

        console.log(res);

        const result = await res.json;
        const status = res.status;

        if (status == 200) {
            toast.success('Your table is booked.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("/", { replace: true })
        }else{
            toast.error('Error Occurred while Booking Table', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (details.firstName == "" || details.lastName == "" || details.contact == "" || details.date == " " || details.time == "") {
            toast.error('Please Enter all Fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if(details.contact.length != 10){
            toast.error('Contact Number Should be of 10 Digits Only', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
         else {
            bookTable();
        }
    }

    return (
        <>
            <ToastContainer />
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
                                <input type="number" name='contact' class="input-field" max="9999999999" placeholder='Phone Number' required onChange={handleChange} />
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
        </>
    )
}

export default BookTableForm
