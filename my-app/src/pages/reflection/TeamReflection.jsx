import './TeamReflection.css';
const TeamReflection = () => (
    <div className="team-reflection-container">
        <h1 className="team-reflection-header">Team Reflection</h1>

        <div className="video-section">
            <h2 className="video-title">Team 22 Week 1 Pitch Video</h2>
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CQmnquummxo"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="reflection-section">
                <h3 className="reflection-heading">Team Reflection: Key Insights from Week 1</h3>
                <ul className="reflection-list">
                    <li><strong>Manual Coordination:</strong> Heavy workload on one person, prone to inefficiencies.</li>
                    <li><strong>Automation Need:</strong> Streamlining volunteer management is crucial.</li>
                    <li><strong>Communication Gap:</strong> Lack of a centralized system creates friction.</li>
                    <li><strong>Accessibility:</strong> Inclusivity for digitally excluded and differently-abled users is essential.</li>
                    <li><strong>Balanced Design:</strong> Clients value both digital tools and personal interaction.</li>
                    <li><strong>Prototyping Direction:</strong> We aim for a human-centered, centralized volunteer system.</li>
                </ul>
            </div>
        </div>

        <div className="video-section">
            <h2 className="video-title">Team 22 Week 2 Pitch Video</h2>
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/935E32GYpEE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="reflection-section">
                <h3 className="reflection-heading">Team Reflection: Key Insights from Week 2</h3>
                <ul className="reflection-list">
                    <li><strong>Centralised Calendar:</strong> Easily view upcoming events in one place.</li>
                    <li><strong>Clear Opportunities:</strong> Volunteering opportunities are clearly listed.</li>
                    <li><strong>Human Touch:</strong> Chat and call features maintain personal connection.</li>
                    <li><strong>Cross-Platform Consistency:</strong> Same features on both website and mobile app.</li>
                    <li><strong>Notifications:</strong> Reminder system keeps users informed of events.</li>
                    <li><strong>Accessibility:</strong> Usable across devices and designed with seniors in mind.</li>
                    <li><strong>Design Simplicity:</strong> Minimalist and intuitive layout for all users.</li>
                </ul>
            </div>

            <div className="final-reflection-section">
                <h2 className="video-title">Team Final Reflection: Comprehensive Insights</h2>
                <div className="reflection-section final-reflection">
                    <h3 className="reflection-heading">Team Final Reflection: An In-Depth Reflection</h3>
                    <p className="reflection-description">
                        Throughout this project, our team embarked on a human-centered design journey to improve the volunteer management process 
                        for Friends of River Kelvin (FORK). This reflection outlines our key insights, how we considered multiple perspectives, 
                        and the genuine learning that translated into actionable design changes.
                    </p>
                    <p className="reflection-description">
                        From the outset, we identified several key themes that framed our approach. The existing system relied heavily on manual 
                        coordination, with one-to-one communication dominating operations. There was no centralized calendar or platform, leading to 
                        inefficiencies and increased workload on coordinators. This highlighted the need for automation, not just to streamline 
                        tasks but to allow organizers to focus on more strategic efforts, such as volunteer engagement and retention.
                    </p>
                    <p className="reflection-description">
                        As we engaged stakeholders and conducted interviews, a recurring theme emerged: the importance of preserving the human 
                        touch. While digitization brought many benefits, users, particularly senior volunteers, valued the warmth and trust 
                        established through phone calls and personal communication. This insight led us to include features like chat and call 
                        functions alongside more advanced scheduling tools.
                    </p>
                    <p className="reflection-description">
                        Our iterative prototyping process enabled us to gather insights from a variety of perspectives. Younger users requested 
                        personalized features, gamification elements, and easier access to volunteer opportunities. In contrast, older users needed 
                        simple, accessible interfaces and offline capabilities. On the admin side, stakeholders needed a centralized system to 
                        monitor attendance, view waitlists, and extract reports on volunteer activity. These differences informed our design 
                        direction, leading us to balance complexity and simplicity in a single unified solution.
                    </p>
                    <p className="reflection-description">
                        The feedback loop between design and stakeholder input was critical to our growth. For instance, in Iteration 1, users 
                        shared that the homepage lacked personalization and that activity information was insufficient. In response, Iteration 2 
                        included user-specific recommendations, an activity filter, and progress tracking. Iteration 3 added further granularity 
                        to the calendar and integrated communication tools like messaging and calls.
                    </p>
                    <p className="reflection-description">
                        From a learning standpoint, our team grew to understand that building digital tools is not just about functionality, it’s 
                        about inclusivity and empathy. We took steps to ensure the platform would work across devices, include options to declare 
                        accessibility requirements, and offer meaningful feedback to volunteers through badges and hours logged.
                    </p>
                    <p className="reflection-description">
                        Ultimately, this project showed us the value of a balanced design, one that supports backend efficiency without losing 
                        the personal connection that defines volunteering. We realized that challenges such as managing volunteer data or scaling up 
                        operations could be addressed not just through technology but through thoughtful design grounded in user needs.
                    </p>
                    <p className="reflection-description">
                        We are proud of how our team navigated diverse challenges and viewpoints to co-create a solution that is functional, 
                        empathetic, and impactful. More than solving a scheduling problem, we contributed to empowering community engagement 
                        through inclusive and intentional design.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default TeamReflection;