const lessons = [
  { title: "Low Community Engagement", text: "Lack of awareness and scattered information reduce participation." },
  { title: "Inefficient Volunteer Sign-Up", text: "Current workflow is manual, hard to track, and slow." },
  { title: "Poor Visibility of Events", text: "No centralized platform to share or register for events." }
];

const StakeholderLessons = () => (
  <section style={{ padding: '60px 20px', backgroundColor: '#e0f2f1', textAlign: 'center' }}>
    <h2>Lessons learned from Stakeholders</h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
      {lessons.map((item, i) => (
        <div key={i} style={{ width: '280px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StakeholderLessons;