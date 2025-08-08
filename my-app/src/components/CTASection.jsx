import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './base.css';

const CTASection = () => (
    <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="cta-section"
    >
        <h2 className="cta-heading">Get in Touch</h2>
        <p className="cta-text">
            Have a question or want to collaborate? We're always open to new ideas and partnerships.
        </p>
        <NavLink to="/about-us" className="cta-button">
            Contact Us
        </NavLink>
    </motion.section>
);

export default CTASection;
