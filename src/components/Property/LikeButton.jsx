import React, { useState } from "react";
import axios from "axios";

const LikeButton = ({ propertyId, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (liked) return;

    try {
      const response = await axios.post(
        `/api/properties/${propertyId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setLikes(response.data.likes);
      setLiked(true);
    } catch (error) {
      console.error("Error liking property", error);
    }
  };

  return (
    <button onClick={handleLike} disabled={liked}>
      {liked ? "Liked" : "Like"} ({likes})
    </button>
  );
};

export default LikeButton;
