import React from 'react'
import "./BookTableForm.css";
import { useNavigate } from "react-router-dom";

const BookTableForm = () => {
  const navigate = useNavigate();

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
                            <input type="text" class="input-field" placeholder='First Name'  required />
                        </div>
                        <div class="input">
                            <input type="text" class="input-field" placeholder='Last Name' required />
                        </div>
                        <div class="input">
                            <input type="text" class="input-field" placeholder='Phone Number' required />
                        </div>
                        <div class="input">
                            <input type="date" class="input-field" required />
                        </div>
                        <div class="input">
                            <input type="time" class="input-field" required />
                        </div>
                        <div class="action">
                            <button class="action-button" onClick={() => {alert("Your Table is Booked..."); navigate("/", { replace: true })}}>Book Table</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default BookTableForm