const FeedbackSection = () => (
    <section style={{ padding: '60px 20px', backgroundColor: '#e3f2fd', textAlign: 'center' }}>
        <h2>Feedback from Low-Fi</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', marginTop: '30px' }}>
            {[1, 2, 3].map(num => (
                <div key={num} style={{ width: '250px' }}>
                    <img src={`/feedback${num}.jpg`} alt={`Feedback ${num}`} style={{ width: '100%', borderRadius: '8px' }} />
                    <p><strong>Point {num}:</strong> Insert Description</p>
                </div>
            ))}
        </div>
    </section>
);

export default FeedbackSection;