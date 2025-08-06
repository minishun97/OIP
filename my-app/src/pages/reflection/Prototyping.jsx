import PrototypeIteration from '../../components/PrototypeIteration';
import { useState } from 'react';
import '../../components/Prototyping.css'; // adjust path if needed
import ModalPortal from '../../components/ModalPortal'; // adjust path as needed

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
                <ModalPortal>
                    <div className="image-modal-overlay" onClick={() => setIsOpen(false)}>
                        <img src={src} alt={alt} className="image-modal-content" />
                    </div>
                </ModalPortal>
            )}
        </>
    );
};

const Prototyping = () => (
    <div className="prototyping-body"> {/* <-- Added wrapper here */}
        <PrototypeIteration
            iteration={1}
            imageUser="/OIP/images/user_1.jpg"
            imageAdmin="/OIP/images/admin_1.jpg"
        />
        <PrototypeIteration
            iteration={2}
            imageUser="/OIP/images/user_2.jpg"
            imageAdmin="/OIP/images/admin_2.jpg"
        />
        <PrototypeIteration
            iteration={3}
            imageUser="/OIP/images/user_3.jpg"
            imageAdmin="/OIP/images/admin_3.jpg"
        />

        <section className="prototype-section">
            <h2 className="prototype-title">Mid-Fi Prototype</h2>
            <div className="prototype-image-flex">
                <div className="perspective-card">
                    <ImageWithModal
                        src="/OIP/images/balloon.jpg"
                        alt="Mid-Fi Prototype 1"
                    />
                </div>
                <div className="perspective-card">
                    <ImageWithModal
                        src="/OIP/images/balloon.jpg"
                        alt="Mid-Fi Prototype 2"
                    />
                </div>
            </div>
        </section>
    </div>
);

export default Prototyping;

