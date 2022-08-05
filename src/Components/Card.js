import React, { useState } from "react";

export const Card = ({ driver, index,increasePoints }) => {
  const color = `3px solid ${driver.hex}`;
 
  return (
    <div className="card" style={{ "--custom-color": driver.hex }}>
      <div className="driver_number_points">
        <h3 className="number">{index + 1}</h3>
        <div className="driver_points">
          <p className="number_point">{driver.points}</p>
          <div className="score">
            <p className="label">PTS</p>
            <button
              className="increaseScoreBtn"
              style={{ backgroundColor: driver.hex }}
              onClick={() => increasePoints(index)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="driver_name_country">
        <div className="driver_name" style={{ borderLeft: color }}>
          <span className="firstName">{driver.firstName}</span>
          <span className="lastName">{driver.lastName}</span>
        </div>
        <img
          className="countryImage"
          alt={driver.country}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${driver.country}.svg`}
        />
      </div>

      <div className="driver_team">{driver.team}</div>
      <div className="driver_image">
        <button className="driver_number">{driver.number}</button>
        <img src={driver.image} alt={driver.lastName} className="driver_img" />
      </div>
    </div>
  );
};
