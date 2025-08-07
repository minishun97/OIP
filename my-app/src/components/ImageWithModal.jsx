/*
> It shows the image with a cursor: pointer to indicate clickability.
> Clicking the image opens the modal.
> Clicking anywhere on the overlay closes the modal.
> The modal uses your existing CSS classes .image-modal-overlay and .image-modal-content for styling.
*/

import { useState } from 'react';
import ModalPortal from './ModalPortal';
import './Prototyping.css';

const ImageWithModal = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
      />
      {isOpen && (
        <ModalPortal>
          <div className="image-modal-overlay" onClick={() => setIsOpen(false)}>
            <img src={src} alt={alt} className="image-modal-content" />
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default ImageWithModal;
