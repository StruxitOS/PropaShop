import Link from "next/link";

const SHOP_LINKS = [
  { href: "/shop",        label: "All Products" },
  { href: "/collections", label: "Collections" },
  { href: "/shop?sort=newest", label: "New Arrivals" },
  { href: "/wishlist",    label: "My Wishlist" },
];

const INFO_LINKS = [
  { href: "/about",    label: "About Us" },
  { href: "/delivery", label: "Delivery Info" },
  { href: "/faqs",     label: "FAQs" },
  { href: "/contact",  label: "Contact" },
  { href: "/track",    label: "Track My Order" },
];

const ACCOUNT_LINKS = [
  { href: "/login",    label: "Sign In" },
  { href: "/register", label: "Create Account" },
  { href: "/account",  label: "My Orders" },
  { href: "/account",  label: "My Details" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)" }}>
      {/* ── TOP BAND ─────────────────────────────────────────────── */}
      <div
        className="py-4 text-center text-2xs tracking-widest uppercase font-sans"
        style={{ background: "var(--maroon)", color: "var(--gold)" }}
      >
        🇿🇦 Proudly South African · Curated in Marabastad · Delivered Across Gauteng
      </div>

      {/* ── MAIN FOOTER ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <div
              className="font-display text-2xl tracking-widest uppercase mb-2"
              style={{ color: "var(--cream)" }}
            >
              Propa<span style={{ color: "var(--gold)" }}>Shop</span>
            </div>
            <p
              className="text-2xs tracking-widest uppercase mb-5 font-sans"
              style={{ color: "var(--gold)" }}
            >
              Timeless beauty at your step
            </p>
            <p
              className="text-sm leading-relaxed mb-6 font-sans"
              style={{ color: "rgba(245,236,215,0.6)" }}
            >
              Curated corporate and smart fashion for the modern African woman. Premium style, accessible price.
            </p>

            {/* Delivery blurb */}
            <div
              className="rounded p-4 text-xs leading-relaxed font-sans"
              style={{
                background: "rgba(201,169,122,0.08)",
                border: "1px solid rgba(201,169,122,0.2)",
                color: "var(--cream)",
              }}
            >
              <span style={{ color: "var(--gold)" }}>🚚 Delivery:</span> Free within 5km · R12/km beyond · Gauteng-wide
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3
              className="text-2xs tracking-widest uppercase mb-5 font-sans"
              style={{ color: "var(--gold)" }}
            >
              Shop
            </h3>
            <ul className="space-y-3">
              {SHOP_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm font-sans transition-colors hover:opacity-100 opacity-60"
                    style={{ color: "var(--cream)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <h3
              className="text-2xs tracking-widest uppercase mb-5 font-sans"
              style={{ color: "var(--gold)" }}
            >
              Information
            </h3>
            <ul className="space-y-3">
              {INFO_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm font-sans transition-colors hover:opacity-100 opacity-60"
                    style={{ color: "var(--cream)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account + contact */}
          <div>
            <h3
              className="text-2xs tracking-widest uppercase mb-5 font-sans"
              style={{ color: "var(--gold)" }}
            >
              My Account
            </h3>
            <ul className="space-y-3 mb-8">
              {ACCOUNT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm font-sans transition-colors hover:opacity-100 opacity-60"
                    style={{ color: "var(--cream)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="text-2xs tracking-widest uppercase mb-3 font-sans"
              style={{ color: "var(--gold)" }}
            >
              Contact
            </h3>
            <p
              className="text-sm opacity-60 font-sans"
              style={{ color: "var(--cream)" }}
            >
              Marabastad, Pretoria<br />
              Gauteng, South Africa<br />
              hello@propashop.co.za
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ───────────────────────────────────────────── */}
      <div
        className="py-4"
        style={{ borderTop: "1px solid rgba(201,169,122,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs font-sans opacity-40"
            style={{ color: "var(--cream)" }}
          >
            © {new Date().getFullYear()} PropaShop · Founded by Zelda Koketso Chokoe
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs font-sans opacity-40 hover:opacity-70 transition-opacity"
              style={{ color: "var(--cream)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-sans opacity-40 hover:opacity-70 transition-opacity"
              style={{ color: "var(--cream)" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
