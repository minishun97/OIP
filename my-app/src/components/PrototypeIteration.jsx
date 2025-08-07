import useInView from '../hooks/useInView';
import { useState } from 'react';
import './Prototyping.css';
import ModalPortal from './ModalPortal';

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

const PerspectiveCard = ({ title, imgSrc, alt }) => (
    <div className="perspective-card">
        <h3>{title}</h3>
        <ImageWithModal src={imgSrc} alt={alt} />
    </div>
);

const PrototypeIteration = ({ iteration, imageUser, imageAdmin, feedback }) => {
    const [ref, isVisible] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`fade-section ${isVisible ? 'fade-in' : 'fade-out'}`}
        >
            <section className="prototype-section">
                <h2 className="prototype-title">Low-Fi Prototype Iterative {iteration}</h2>
                <div className="prototype-image-flex">
                    <PerspectiveCard title="Users Perspective" imgSrc={imageUser} alt="User Perspective" />
                    <PerspectiveCard title="Admins Perspective" imgSrc={imageAdmin} alt="Admin Perspective" />
                </div>
            </section>

            <section className="prototype-feedback">
                <h2 className="reflection-heading">Feedback from Iterative {iteration}</h2>
                <div className="reflection-list">
                    {feedback.map((point, idx) => {
                        const isSectionHeader = point.startsWith("🛠️") || point.startsWith("🧠") || point.startsWith("💬");

                        return isSectionHeader ? (
                            <p key={idx} className="reflection-subheading">{point}</p>
                        ) : (
                            <li key={idx}>{point}</li>
                        );
                    })}
                </div>
            </section>

        </div>
    );
};

export default PrototypeIteration;
