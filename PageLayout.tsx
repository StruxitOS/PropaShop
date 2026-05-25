import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function PageLayout({ children, fullWidth = false }: PageLayoutProps) {
  return (
    <div className="min-h-dvh flex flex-col" style={{ background: "var(--cream)" }}>
      <Navbar />
      <main className={fullWidth ? "flex-1" : "flex-1 max-w-7xl mx-auto w-full px-4 md:px-8"}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
