import React, { useEffect } from "react";

const Scroll = ({ posts, page, setPage }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        //console.log(param)
        if (param[0].isIntersecting) {
          // once it gets in the view, is intersecting, stop observing our last image
          observer.unobserve(lastImage);
          setPage((pageNo) => pageNo + 1);
        }
      },
      { threshold: 0.5 }
    );

    const lastImage = document.querySelector(".image-post:last-child");
    if (!lastImage) {
      return; //bcoz first time data is null
    }
    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [posts]);

  console.log("---posts---", posts);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      {posts &&
        posts.map((post, index) => {
          return (
            <img
              key={post.id}
              className="image-post"
              style={{ height: "250px", width: "200px", borderRadius: "10px" }}
              src={post.download_url}
              alt={post.author}
            />
          );
        })}
    </div>
  );
};

export default Scroll;
