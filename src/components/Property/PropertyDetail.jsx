import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/api";
import AuthContext from "../../context/AuthContext";
import LikeButton from "./LikeButton";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProperty = async () => {
      const { data } = await axios.get(`/api/properties/${id}`, {
        propertyId: property.id,
      });
      setProperty(data);
    };
    fetchProperty();
  }, [id]);

  const handleInterest = async () => {
    if (user) {
      await axios.post(`/api/properties/${id}/interest`);
      alert("Seller details sent to your email");
    } else {
      alert("Please login to show interest");
    }
  };

  return (
    <div className="property-detail">
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>{property.place}</p>
      <p>{property.price}</p>
      <button onClick={handleInterest}>I'm Interested</button>
      <LikeButton propertyId={property._id} initialLikes={property.likes} />
      
    </div>
  );
};

export default PropertyDetail;
