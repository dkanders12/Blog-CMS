// GalleryDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetQuery } from "../../Components/Fetching/Fetching";
import { getAllBlogs } from "../../Components/Get/Get";

const GalleryDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetQuery(getAllBlogs, `games`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const gallery = data.galleries.filter((gallery) => gallery.id === id);

  if (!gallery) {
    return <div>Gallery not found</div>;
  }

  return (
    <div>
      <h1>{gallery[0].title}</h1>
      <p>{gallery[0].underRubrik}</p>
    </div>
  );
};

export default GalleryDetail;
