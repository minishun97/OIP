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
          width="400"
          height="250"
          src="https://embed.figma.com/proto/t62H9YivWSf22oHUXzveJs/OIP-FORK-PROTOTYPE?node-id=73-327&p=f&scaling=min-zoom&content-scaling=fixed&page-id=19%3A114&starting-point-node-id=73%3A345&show-proto-sidebar=1&embed-host=share"
          allowFullScreen
          title="Figma Embed Mobile"
        />
      </div>


      {/* Website Prototype */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '15px' }}>Website</h3>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="400"
          height="250"
          src="https://embed.figma.com/proto/t62H9YivWSf22oHUXzveJs/OIP-FORK-PROTOTYPE?node-id=82-96&scaling=min-zoom&content-scaling=fixed&page-id=19%3A228&starting-point-node-id=82%3A96&show-proto-sidebar=1&embed-host=share"
          allowFullScreen
          title="Figma Embed Website"
        />
      </div>
    </div>
  </section>
);

export default HighFiPrototype;
