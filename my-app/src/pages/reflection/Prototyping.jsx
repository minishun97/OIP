import PrototypeIteration from '../../components/PrototypeIteration';

const Prototyping = () => (
  <>
    <PrototypeIteration 
      iteration={1} 
      imageUser="/images/user_1.jpg" 
      imageAdmin="/images/admin_1.jpg" 
    />
    <PrototypeIteration 
      iteration={2} 
      imageUser="/images/user_2.jpg" 
      imageAdmin="/images/admin_2.jpg" 
    />
    <PrototypeIteration 
      iteration={3} 
      imageUser="/images/user_3.jpg" 
      imageAdmin="/images/admin_3.jpg" 
    />

    <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <h2>Mid-Fi Prototype</h2>
      <p style={{ maxWidth: '800px', margin: '20px auto' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mid-Fi designs refine structure and usability based on prior feedback.
      </p>
      <img src="/images/placeholder_1.jpg" alt="Mid Fi Prototype" style={{ marginTop: '30px', maxWidth: '90%', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }} />
    </section>
  </>
);

export default Prototyping;
