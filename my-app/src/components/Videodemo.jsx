import React from 'react';

const Videodemo = () => {
  return (
    <section style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Project Demo Videos</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        {/* First video */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xd2L5OI7PHs"
          title="YouTube video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Second video */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hBzCDKjtbQo"
          title="YouTube video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Videodemo;
