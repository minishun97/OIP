import { useState } from 'react';

const ImageWithModal = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="modal-image"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="image-modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <img src={src} alt={alt} className="image-modal-content" />
        </div>
      )}
    </>
  );
};

const PerspectiveCard = ({ title, imgSrc, alt }) => (
  <div className="perspective-card">
    <h3>{title}</h3>
    <ImageWithModal src={imgSrc} alt={alt} />
  </div>
);

const PrototypeIteration = ({ iteration, imageUser, imageAdmin }) => (
  <>
    <section className="prototype-section">
      <h2 className="prototype-title">Low-Fi Prototype Iterative {iteration}</h2>
      <div className="prototype-image-flex">
        <PerspectiveCard title="Users Perspective" imgSrc={imageUser} alt="User Perspective" />
        <PerspectiveCard title="Admins Perspective" imgSrc={imageAdmin} alt="Admin Perspective" />
      </div>
    </section>

    <section className="prototype-feedback">
      <h2>Feedback from Iterative {iteration}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a ultricies metus, quis dignissim diam.
      </p>
    </section>
  </>
);

export default PrototypeIteration;
