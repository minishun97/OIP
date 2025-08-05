const PosterSection = () => (
  <section
    style={{
      backgroundColor: '#D2EDE8', // From your color scheme
      padding: '60px 20px',
      textAlign: 'center',
    }}
  >
    <h2 style={{ color: '#008B8A', marginBottom: '20px' }}>Poster</h2>
    <p style={{ color: '#333', marginBottom: '40px', maxWidth: '800px', textAlign: 'center', margin: '20px auto' }}>
        The poster represents the culmination of our project, showcasing the final design and key insights. It serves as a visual summary of our journey and findings, designed to engage and inform stakeholders.
    </p>
    <img
      src="/OIP/images/final-poster.jpg" // Replace with actual path in your public directory
      alt="Final A1 Poster"
      style={{
        maxWidth: '90%',
        height: 'auto',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        borderRadius: '12px',
      }}
    />
  </section>
);

export default PosterSection;
