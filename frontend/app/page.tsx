import PageLayout from "../components/PageLayout";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import FeaturedProducts from "../components/FeaturedProducts";
import DeliveryBanner from "../components/DeliveryBanner";

export default function Home() {
  return (
    <PageLayout fullWidth>
      <Hero />
      <DeliveryBanner />
      <FeaturedCollections />
       <FeaturedProducts />
    </PageLayout>
  );
}