type ProductCardProps = {
  title: string;
  price: string;
};

export default function ProductCard({
  title,
  price,
}: ProductCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        background: "#fff",
      }}
    >
      <div
        style={{
          height: "200px",
          background: "#F5ECD7",
          marginBottom: "15px",
        }}
      />

      <h3>{title}</h3>

      <p
        style={{
          color: "#6B1A2E",
          fontWeight: "bold",
        }}
      >
        {price}
      </p>

      <button
        style={{
          marginTop: "10px",
          background: "#6B1A2E",
          color: "white",
          border: "none",
          padding: "10px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}