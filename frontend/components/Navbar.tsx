export default function Navbar() {
  return (
    <nav style={{
      background: "#1B2A4A",
      padding: "16px 40px",
      color: "#F5ECD7",
      fontWeight: "bold",
      letterSpacing: "3px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <span>PROPASHOP</span>
      <div style={{ display: "flex", gap: "32px", fontSize: "13px" }}>
        <a href="#" style={{ color: "#F5ECD7", textDecoration: "none" }}>SHOP</a>
        <a href="#" style={{ color: "#F5ECD7", textDecoration: "none" }}>COLLECTIONS</a>
        <a href="#" style={{ color: "#C9A97A", textDecoration: "none" }}>CART (0)</a>
      </div>
    </nav>
  );
}