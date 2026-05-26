export default function FeaturedCollections() {
  const collections = [
    {
      title: "Corporate Wear",
      description: "Professional styles for work and meetings",
    },
    {
      title: "Interview Collection",
      description: "Dress with confidence and stand out",
    },
    {
      title: "Church & Occasion",
      description: "Elegant and timeless looks",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          color: "#6B1A2E",
          marginBottom: "40px",
          fontSize: "32px",
        }}
      >
        Featured Collections
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {collections.map((item) => (
          <div
            key={item.title}
            style={{
              border: "1px solid #eee",
              padding: "30px",
              borderRadius: "10px",
              background: "#F5ECD7",
            }}
          >
            <h3
              style={{
                color: "#6B1A2E",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#1B2A4A",
                lineHeight: "1.6",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}