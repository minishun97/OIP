const HighFiPrototype = () => (
  <section
    style={{
      padding: '60px 20px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
    }}
  >
    <h2>Figma Prototype</h2>
    <p>Finalized High-Fidelity Design with Wireframing</p>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
      }}
    >
      {/* Mobile Prototype */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '15px' }}>Mobile</h3>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="500"
          height="300"
          src="https://embed.figma.com/design/t62H9YivWSf22oHUXzveJs/OIP-FORK-PROTOTYPE?node-id=0-1&embed-host=share"
          allowFullScreen
          title="Figma Embed Mobile"
        />
      </div>

      {/* Website Prototype */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '15px' }}>Website</h3>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="500"
          height="300"
          src="https://embed.figma.com/design/t62H9YivWSf22oHUXzveJs/OIP-FORK-PROTOTYPE?node-id=0-1&embed-host=share"
          allowFullScreen
          title="Figma Embed Website"
        />
      </div>
    </div>
  </section>
);

export default HighFiPrototype;
