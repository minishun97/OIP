import './AboutUs.css';
import { FaLinkedin } from 'react-icons/fa';

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Lew Jie Shun",
            description: "???",
            image: "???",
            linkedin: "https://www.linkedin.com/in/???"
        },
        {
            name: "Kua Dong Han",
            description: "???",
            image: "???",
            linkedin: "https://www.linkedin.com/in/janesmith"
        },
        {
            name: "Lim Kuan Yong",
            description: `I am a beloved Pokémon known for its ability to put opponents to sleep by singing a lullaby. 
            With its large, expressive eyes and pink, round body, it captivates audiences with its melodic voice. 
            Whether in the Pokémon battles or entertaining its friends, my soothing song is both a weapon and a charm!`,
            image: "/images/jigglypuff.jpg",
            linkedin: "https://www.linkedin.com/in/kuan-yong/"
        },
        {
            name: "Keerthana Keshaini",
            description: "???",
            image: "???",
            linkedin: "https://www.linkedin.com/in/???"
        },
        {
            name: "En Thong Lew",
            description: "???",
            image: "???",
            linkedin: "https://www.linkedin.com/in/???"
        },
        {
            name: "Zhi Wen Jeff Tan",
            description: "???",
            image: "???",
            linkedin: "https://www.linkedin.com/in/???"
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
