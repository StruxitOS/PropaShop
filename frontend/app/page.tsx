import PageLayout from "../components/PageLayout";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <PageLayout fullWidth>
      <Hero />
      <FeaturedCollections />
       <FeaturedProducts />
    </PageLayout>
  );
}