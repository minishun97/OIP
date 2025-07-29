const lessons = [
  { title: "Low Community Engagement", text: "Lack of awareness and scattered information reduce participation.", image: "/images/community.jpg"},
  { title: "Inefficient Volunteer Sign Up", text: "Current workflow is manual, hard to track, and slow.", image: "/images/join_us.jpg" },
  { title: "Poor Visibility of Events", text: "No centralized platform to share or register for events.", image: "/images/balloon.jpg" }
];

const StakeholderLessons = () => (
  <section style={{ padding: '60px 20px', backgroundColor: '#e0f2f1', textAlign: 'center' }}>
    <h2>Lessons learned from Stakeholders</h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
      {lessons.map((item, i) => (
        <div key={i} className="flip-card" style={{ width: '280px', height: '180px' }}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>{item.title}</h3>
            </div>
            <div
              className="flip-card-back"
              style={{
                '--bg-url': `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#31b7ab',
                color: '#fff',
                textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                padding: '20px',
                borderRadius: '10px',
              }}
            >
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StakeholderLessons;