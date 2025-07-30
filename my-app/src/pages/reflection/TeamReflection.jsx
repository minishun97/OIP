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
            <p className="video-description">
                This is a description of the first video. Add any relevant details, insights, or takeaways that you want to share.
            </p>
        </div>

        <div className="video-section">
            <h2 className="video-title">Second Video</h2>
            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
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