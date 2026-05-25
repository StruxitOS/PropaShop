import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "40px" }}>
        <h1>PropaShop</h1>
        <p>Curated corporate & smart fashion.</p>
      </main>

      <Footer />
    </>
  );
}