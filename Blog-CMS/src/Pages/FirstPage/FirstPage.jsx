import React from "react";
import { useGetQuery } from "../../Components/Fetching/Fetching";
import { getAllBlogs } from "../../Components/Get/Get";
import "./FirstPage.scss";
const FirstPage = () => {
  const { data, isLoading, error } = useGetQuery(getAllBlogs, `games`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="main">
      <h1>Blog Posts</h1>
      {data.blogs.map((blog) => (
        <article id="Container" key={blog.id}>
          <div className="sideLeft">
            <h2>{blog.name}</h2>
            <img src={blog.img.url} alt={blog.img.fileName} />
          </div>
          <div className="sideRight">
            <p>{blog.tekst.text}</p>
            <p>{blog.time}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default FirstPage;
