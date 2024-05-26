import React, { useState, useContext } from "react";
import axios from "../../utils/api";
import AuthContext from "../../context/AuthContext";

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [nearby, setNearby] = useState("");
  const [price, setPrice] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const propertyData = {
      title,
      description,
      place,
      area,
      bedrooms,
      bathrooms,
      nearby: nearby.split(","),
      price,
      seller: user._id,
    };
    await axios.post("/api/properties", propertyData);
    alert("Property added successfully");
  };

  return (
    <div className="add-property">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nearby (comma-separated)"
          value={nearby}
          onChange={(e) => setNearby(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
