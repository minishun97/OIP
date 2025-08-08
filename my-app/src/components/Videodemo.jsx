import React from "react";

const Videodemo = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Web demo</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xd2L5OI7PHs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2 style={{ marginTop: "40px" }}>Mobile app demo</h2>
      <iframe
        width="560"
        height="315"
        src="https://youtu.be/hBzCDKjtbQo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Videodemo;
