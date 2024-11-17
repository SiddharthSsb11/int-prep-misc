import React, { useEffect, useState } from "react";
import Scroll from "./Scroll.js";
const InfinetScrollApp = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=3`
      );
      const data = await res.json();
      setImages((prevData) => [...prevData, ...data]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const myThrottle = (cb, d) => {
    console.log("--throttling---");
    let last = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
  };

  const throttledFetching = myThrottle(() => {
    fetchData();
  }, 500);

  useEffect(() => {
    throttledFetching();
  }, [page]);

  return (
    <div>
      {images.length > 0 && (
        <Scroll posts={images} page={page} setPage={setPage} />
      )}
      {loading && <p>Loading.....</p>}
    </div>
  );
};

export default InfinetScrollApp;
