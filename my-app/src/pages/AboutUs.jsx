import './AboutUs.css';
import { FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Lew Jie Shun",
            description: "As the Team Leader, Jie Shun played a central role in steering the direction of the project. From initiating brainstorming sessions to ensuring smooth coordination among all members, Jie Shun also contributed significantly to the poster's layout and messaging.",
            image: "/OIP/profile/jie_shun.jpeg",
            linkedin: "https://www.linkedin.com/in/lew-jie-shun/"
        },
        {
            name: "Kua Dong Han",
            description: "Dong Han provided vital support by meticulously vetting the team's outputs for clarity and accuracy. He also played a key role in the design and creation of the promotional poster, ensuring the visuals aligned with the team's goals.",
            image: "/OIP/profile/dong_han.jpeg",
            linkedin: "https://www.linkedin.com/in/kua-dong-han"
        },
        {
            name: "Lim Kuan Yong",
            description: "As the Lead Website Developer, Kuan Yong built and refined the website from the ground up. He ensured functionality, responsiveness, and accessibility, while also contributing to poster design and conducting quality assurance across the product.",
            image: "/OIP/profile/kuan_yong.jpeg", // Replace with professional image if desired
            linkedin: "https://www.linkedin.com/in/kuan-yong/"
        },
        {
            name: "Keerthana Keshaini",
            description: "Keerthana led the mobile Figma design efforts, creating intuitive and visually consistent user interfaces tailored for mobile users. Her design work helped shape the visual identity and user experience of our mobile prototype.",
            image: "/OIP/profile/keerthana.jpeg",
            linkedin: "https://www.linkedin.com/in/keerthana-keshaini/"
        },
        {
            name: "En Thong Lew",
            description: "En Thong focused on the Figma design for the web platform. She translated user requirements into a functional and aesthetically pleasing layout, ensuring consistency with the mobile version and aligning with the team's overall design system.",
            image: "/OIP/profile/en_thong.jpeg",
            linkedin: "https://www.linkedin.com/in/en-thong-lew/"
        },
        {
            name: "Zhi Wen Jeff Tan",
            description: "Jeff contributed to the website development, supporting the creation and integration of core features. His efforts helped bring the Figma prototypes to life and ensured seamless deployment across devices.",
            image: "/OIP/profile/jeff.jpeg",
            linkedin: "https://www.linkedin.com/in/jefftanzw/"
        },
    ];

    return (
        <div className="about-us-container">
            <h1 className="about-us-header">About Us</h1>
            <p className="about-us-description">
                Meet the talented individuals who make up our incredible team! Each team member brings unique skills and perspectives to help us achieve our goals.
            </p>

            <div className="team-cards-container">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="team-card-left">
                            <h3 className="team-member-name">{member.name}</h3>
                            <p className="team-member-description">{member.description}</p>
                        </div>
                        <div className="team-card-right">
                            <img src={member.image} alt={member.name} className="team-member-image" />
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="linkedin-icon" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
