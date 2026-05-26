export default function Home() {
  return (
    <main
      style={{
        background: "#F5ECD7",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          background: "#1B2A4A",
          padding: "16px 40px",
          color: "#F5ECD7",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        PROPASHOP
      </nav>

      <section
        style={{
          padding: "80px 40px",
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            color: "#C9A97A",
            fontSize: "12px",
            letterSpacing: "3px",
            marginBottom: "20px",
          }}
        >
          NEW SEASON — WINTER 2025
        </div>

        <h1
          style={{
            color: "#6B1A2E",
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Dress Like You
          <br />
          Mean Business
        </h1>

        <p
          style={{
            color: "#1B2A4A",
            maxWidth: "500px",
            lineHeight: "1.8",
          }}
        >
          Curated corporate & smart fashion from Marabastad,
          delivered to your door across Gauteng.
        </p>

        <button
          style={{
            marginTop: "30px",
            background: "#6B1A2E",
            color: "#F5ECD7",
            border: "none",
            padding: "14px 24px",
            cursor: "pointer",
          }}
        >
          SHOP NOW
        </button>
      </section>
    </main>
  );
}