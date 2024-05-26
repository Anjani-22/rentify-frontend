import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/api";
import PropertyDetail from "./PropertyDetail";
const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await axios.get("/api/properties");
      setProperties(data);
    };
    fetchProperties();
  }, []);

  return (
    <div className="property-list">
      {properties.map((property) => (
        <Link to={`/properties/${property._id}`}>{<PropertyDetail />}</Link>
      ))}
    </div>
  );
};

export default PropertyList;
