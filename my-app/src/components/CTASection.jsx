import {motion} from 'framer-motion';

const CTASection = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    style={{ backgroundColor: '#1a237e', padding: '40px 20px', color: 'white', textAlign: 'center' }}
  >
    <h2 style={{ fontSize: '2rem' }}>Ready to collaborate with us?</h2>
    <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>Let's build something impactful together.</p>
    <a href="#contact" style={{ marginTop: '20px', display: 'inline-block', padding: '10px 25px', backgroundColor: '#ffc107', color: '#000', borderRadius: '4px', textDecoration: 'none' }}>Contact Us</a>
  </motion.section>
);

export default CTASection;