import PageLayout from "../components/PageLayout";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";

export default function Home() {
  return (
    <PageLayout fullWidth>
      <Hero />
      <FeaturedCollections />
    </PageLayout>
  );
}