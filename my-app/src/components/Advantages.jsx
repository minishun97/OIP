import { motion } from 'framer-motion';

const benefits = [
    { title: "Increased Engagement", desc: "Better interface encourages involvement." },
    { title: "Centralized Information", desc: "Events, news, and signups in one place." },
    { title: "User-Centric Design", desc: "Accessible across devices with clear UI." }
];

const Advantages = () => (
    <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px 20px', backgroundColor: '#fff3e0', textAlign: 'center' }}
    >
        <h2>Advantages of Product</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
            {benefits.map((b, i) => (
                <div key={i} className="flip-card" style={{ width: '250px', height: '180px' }}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h3>{b.title}</h3>
                        </div>
                        <div className="flip-card-back">
                            <p>{b.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </motion.section>
);

export default Advantages;