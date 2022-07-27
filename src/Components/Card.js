export const Card = ({ driver, index }) => {
  const color = `3px solid ${driver.hex}`;
  return (
    <div class="card">
      <div className="driver_number_points">
        <h3 class="number">{index + 1}</h3>
        <div className="driver_points">
          <p className="number_point">{driver.points}</p>
          <p className="label">PTS</p>
        </div>
      </div>

      <div className="driver_name_country">
        <div className="driver_name" style={{ borderLeft: color }}>
          <span className="firstName">{driver.firstName}</span>
          <span className="lastName">{driver.lastName}</span>
        </div>
        <div>{driver.country}</div>
      </div>

      <div className="driver_team">{driver.team}</div>
      <div class="driver_image">
        <button className="driver_number">{driver.number}</button>
        <img src={driver.image} alt={driver.lastName} className="driver_img" />
      </div>
    </div>
  );
};
