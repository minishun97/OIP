import PrototypeIteration from '../../components/PrototypeIteration';
import { useState } from 'react';
import '../../components/Prototyping.css';
import ModalPortal from '../../components/ModalPortal';

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
    <div className="prototyping-body">
        <PrototypeIteration
            iteration={1}
            imageUser="/OIP/images/user_1.jpg"
            imageAdmin="/OIP/images/admin_1.jpg"
            feedback={[
                "User prefers the homepage to be more personalized",
                "User wants to customize their account",
                "User wants more details about the activities",
                "Lacking achievements/gamification for volunteers",
                "Users value a sense of accomplishment beyond efficiency",
                "Reflection: Beyond efficiency, users value sense of accomplishment"
            ]}
        />
        <PrototypeIteration
            iteration={2}
            imageUser="/OIP/images/user_2.jpg"
            imageAdmin="/OIP/images/admin_2.jpg"
            feedback={[
                "🛠️ Changes made based on Iteration 1 findings:",
                "Personalized the homescreen:",
                "   Added user's name",
                "   Added activities recommended to the user",
                "   Added level system",
                "Allowed account customization:",
                "   Added settings page",
                "Added more details about activities:",
                "   Added activity dates and images",
                "🧠 User Feedback:",
                "User wants a progression bar for the level",
                "User wants filter option for activities",
                "User wants the calendar to be more detailed",
                "Lacking 'human touch'",
                "💬 Reflection:",
                "Digitization increases efficiency, but risks losing the personal connection volunteers currently value through manual calls."
            ]}
        />
        <PrototypeIteration
            iteration={3}
            imageUser="/OIP/images/user_3.jpg"
            imageAdmin="/OIP/images/admin_3.jpg"
            feedback={[
                "Personalization:",
                "Added progress bar for level system",
                "Activities:",
                "Added filter by categories",
                "Calendar View:",
                "Added additional information like date and location",
                "Chat Page:",
                "Messaging",
                "Call function"
                ]}
        />

        <section className="prototype-section">
            <h2 className="prototype-title">Mid-Fi Prototype</h2>
            <div className="prototype-image-flex">
                <div className="perspective-card">
                    <ImageWithModal
                        src="/OIP/images/webpage_midfi.jpg"
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

