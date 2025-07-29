const benefits = [
  { title: "Increased Engagement", desc: "Better interface encourages involvement." },
  { title: "Centralized Information", desc: "Events, news, and signups in one place." },
  { title: "User-Centric Design", desc: "Accessible across devices with clear UI." }
];

const Advantages = () => (
  <section style={{ padding: '60px 20px', backgroundColor: '#fff3e0', textAlign: 'center' }}>
    <h2>Advantages of Product</h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
      {benefits.map((b, i) => (
        <div key={i} style={{ width: '250px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px' }}>
          <h3>{b.title}</h3>
          <p>{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Advantages;