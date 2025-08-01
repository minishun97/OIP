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
            <p className="video-description">
                This is a description of the second video. Provide any context, analysis, or key points you'd like to highlight.
            </p>
        </div>
    </div>
);

export default TeamReflection;