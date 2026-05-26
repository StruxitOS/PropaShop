import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      title: "Executive Blazer",
      price: "R799",
    },
    {
      title: "Classic Office Dress",
      price: "R649",
    },
    {
      title: "Luxury Handbag",
      price: "R899",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#F5ECD7",
      }}
    >
      <h2
        style={{
          color: "#6B1A2E",
          marginBottom: "40px",
        }}
      >
        Featured Products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}