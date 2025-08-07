import PrototypeIteration from '../../components/PrototypeIteration';
import { useState, useRef } from 'react';
import '../../components/Prototyping.css';
import ModalPortal from '../../components/ModalPortal';

const midfiImages1 = [
    { src: "/OIP/images/website_midfi/webpage_midfi_1.png", alt: "Mid-Fi 1" },
    { src: "/OIP/images/website_midfi/webpage_midfi_2.png", alt: "Mid-Fi 2" },
    { src: "/OIP/images/website_midfi/webpage_midfi_3.png", alt: "Mid-Fi 3" },
    { src: "/OIP/images/website_midfi/webpage_midfi_4.png", alt: "Mid-Fi 4" },
    { src: "/OIP/images/website_midfi/webpage_midfi_5.png", alt: "Mid-Fi 5" },
    { src: "/OIP/images/website_midfi/webpage_midfi_6.png", alt: "Mid-Fi 6" },
    { src: "/OIP/images/website_midfi/webpage_midfi_7.png", alt: "Mid-Fi 7" },
    { src: "/OIP/images/website_midfi/webpage_midfi_8.png", alt: "Mid-Fi 8" },
    { src: "/OIP/images/website_midfi/webpage_midfi_9.png", alt: "Mid-Fi 9" },
];

const midfiImages2 = [
    { src: "/OIP/images/website_midfi/webpage_midfi_1.png", alt: "Mid-Fi 1" },
    { src: "/OIP/images/website_midfi/webpage_midfi_2.png", alt: "Mid-Fi 2" },
    { src: "/OIP/images/website_midfi/webpage_midfi_3.png", alt: "Mid-Fi 3" },
    { src: "/OIP/images/website_midfi/webpage_midfi_4.png", alt: "Mid-Fi 4" },
    { src: "/OIP/images/website_midfi/webpage_midfi_5.png", alt: "Mid-Fi 5" },
    { src: "/OIP/images/website_midfi/webpage_midfi_6.png", alt: "Mid-Fi 6" },
    { src: "/OIP/images/website_midfi/webpage_midfi_7.png", alt: "Mid-Fi 7" },
    { src: "/OIP/images/website_midfi/webpage_midfi_8.png", alt: "Mid-Fi 8" },
    { src: "/OIP/images/website_midfi/webpage_midfi_9.png", alt: "Mid-Fi 9" },
];

function MidFiCarousel({ images }) {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);

    const goTo = idx => setCurrent((idx + images.length) % images.length);
    const prev = () => goTo(current - 1);
    const next = () => goTo(current + 1);

    const onTouchStart = e => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd = e => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (diff > 40) prev();
        else if (diff < -40) next();
        touchStartX.current = null;
    };

    return (
        <div
            className="midfi-carousel"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <button
                className="carousel-arrow left"
                onClick={prev}
                aria-label="Previous"
                tabIndex={0}
            >
                &#8592;
            </button>
            <img
                src={images[current].src}
                alt={images[current].alt}
                className="carousel-image"
            />
            <button
                className="carousel-arrow right"
                onClick={next}
                aria-label="Next"
                tabIndex={0}
            >
                &#8594;
            </button>
            <div className="carousel-dots">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`carousel-dot${i === current ? " active" : ""}`}
                        onClick={() => goTo(i)}
                    />
                ))}
            </div>
        </div>
    );
}

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
            <MidFiCarousel images={midfiImages1} />
        </section>
        <section className="prototype-section">
            <h2 className="prototype-title">Mid-Fi Prototype 2</h2>
            <MidFiCarousel images={midfiImages2} />
        </section>
    </div>
);

export default Prototyping;

