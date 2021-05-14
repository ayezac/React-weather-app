import { useState } from "react";
import "../App.css";

const Navbar = ({ handleFormSubmit }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(city);
  };

  return (
    <div className="navbar">
      <form className="navbar">
        <label id="inputLabel">
          <input
            className="inputField"
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Name of city"
          />
        </label>

        <button id="button" type="button" onClick={handleSubmit}>
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default Navbar;
