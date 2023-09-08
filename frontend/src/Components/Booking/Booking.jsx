import React from "react";
import "./booking.scss";

const Booking = () => {
  return (
    <div className="booking">
      <div className="booking__top">
        <h3 className="booking__name">Tour Name</h3>
        <p className="booking__type">Tour Type</p>
        <p className="booking__city">City</p>
        <p className="booking__address">Address</p>
        <p className="booking__distance">Distance</p>
      </div>
      <div className="booking__form">
        <h5 className="booking__title">Booking Form</h5>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
      </div>
      <div className="booking__info">
        <h5 className="booking__title">Booking Information</h5>
        <div className="booking__info-item">
          <span className="booking__info-label">Title:</span>
          <span className="booking__info-value">Tour Title</span>
        </div>
        <div className="booking__info-item">
          <span className="booking__info-label">Description:</span>
          <span className="booking__info-value">Tour Description</span>
        </div>
        <div className="booking__info-item">
          <span className="booking__info-label">Rating:</span>
          <span className="booking__info-value">4.5</span>
        </div>
        <div className="booking__info-item">
          <span className="booking__info-label">Price:</span>
          <span className="booking__info-value">$200</span>
        </div>
      </div>
    </div>
  );
};

export default Booking;
