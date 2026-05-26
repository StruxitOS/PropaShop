export default function Hero() {
  return (
    <section style={{
      padding: "80px 40px",
      maxWidth: "800px",
    }}>
      <div style={{ color: "var(--gold)", fontSize: "12px", letterSpacing: "3px", marginBottom: "20px" }}>
        NEW SEASON — WINTER 2025
      </div>
      <h1 style={{ color: "var(--maroon)", fontSize: "56px", marginBottom: "20px", lineHeight: 1.1 }}>
        Dress Like You<br />Mean Business
      </h1>
      <p style={{ color: "var(--navy)", maxWidth: "500px", lineHeight: "1.8" }}>
        Curated corporate & smart fashion from Marabastad, delivered to your door across Gauteng.
      </p>
      <button style={{
        marginTop: "30px",
        background: "var(--maroon)",
        color: "var(--cream)",
        border: "none",
        padding: "14px 28px",
        cursor: "pointer",
        letterSpacing: "2px",
        fontSize: "13px",
      }}>
        SHOP NOW
      </button>
    </section>
  );
}