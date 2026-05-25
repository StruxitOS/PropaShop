"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore, useAuthStore } from "@/store";
import { clsx } from "clsx";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineMagnifyingGlass,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";

const NAV_LINKS = [
  { href: "/",           label: "Home" },
  { href: "/shop",       label: "Shop" },
  { href: "/collections",label: "Collections" },
  { href: "/about",      label: "About" },
  { href: "/delivery",   label: "Delivery" },
];

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query,      setQuery]      = useState("");

  const pathname  = usePathname();
  const itemCount = useCartStore((s) => s.itemCount());
  const user      = useAuthStore((s) => s.user);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <>
      {/* ── ANNOUNCEMENT BAR ─────────────────────────────────────── */}
      <div
        className="text-center text-2xs py-2 tracking-widest uppercase font-sans"
        style={{ background: "var(--maroon)", color: "var(--gold)" }}
      >
        🚚 Free delivery within 5km of Marabastad · Gauteng-wide
      </div>

      {/* ── MAIN NAV ─────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 shadow-nav"
        style={{ background: "var(--navy)" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              className="font-display text-xl tracking-widest uppercase flex-shrink-0"
              style={{ color: "var(--cream)" }}
            >
              Propa<span style={{ color: "var(--gold)" }}>Shop</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-xs tracking-wider uppercase transition-colors duration-150 font-sans",
                    pathname === link.href
                      ? "border-b border-gold"
                      : "opacity-70 hover:opacity-100"
                  )}
                  style={{
                    color: pathname === link.href ? "var(--gold)" : "var(--cream)",
                    borderColor: "var(--gold)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              {/* Search toggle */}
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-cream opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: "var(--cream)" }}
              >
                <HiOutlineMagnifyingGlass size={20} />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="opacity-70 hover:opacity-100 transition-opacity hidden sm:block"
                style={{ color: "var(--cream)" }}
              >
                <HiOutlineHeart size={20} />
              </Link>

              {/* Account */}
              <Link
                href={user ? "/account" : "/login"}
                aria-label={user ? "My account" : "Sign in"}
                className="opacity-70 hover:opacity-100 transition-opacity hidden sm:block"
                style={{ color: "var(--cream)" }}
              >
                <HiOutlineUser size={20} />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                aria-label={`Cart (${itemCount} items)`}
                className="relative opacity-80 hover:opacity-100 transition-opacity"
                style={{ color: "var(--cream)" }}
              >
                <HiOutlineShoppingBag size={22} />
                {itemCount > 0 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] rounded-full text-2xs font-medium flex items-center justify-center px-1"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}
                  >
                    {itemCount > 99 ? "99+" : itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile hamburger */}
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden opacity-70 hover:opacity-100 transition-opacity ml-1"
                style={{ color: "var(--cream)" }}
              >
                {menuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
              </button>
            </div>
          </div>

          {/* Search bar (slides down) */}
          {searchOpen && (
            <div
              className="pb-3 animate-slide-down"
              style={{ borderTop: "1px solid rgba(201,169,122,0.2)" }}
            >
              <form onSubmit={handleSearch} className="flex gap-2 pt-3">
                <input
                  autoFocus
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search PropaShop..."
                  className="input flex-1 text-sm"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderColor: "rgba(201,169,122,0.4)",
                    color: "var(--cream)",
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary text-2xs px-5 py-0"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>

        {/* ── MOBILE MENU ──────────────────────────────────────────── */}
        {menuOpen && (
          <div
            className="md:hidden animate-slide-down"
            style={{
              background: "var(--navy-dark)",
              borderTop: "1px solid rgba(201,169,122,0.15)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "py-3 text-sm tracking-wide uppercase font-sans border-b transition-colors",
                    pathname === link.href ? "opacity-100" : "opacity-60"
                  )}
                  style={{
                    color: pathname === link.href ? "var(--gold)" : "var(--cream)",
                    borderColor: "rgba(201,169,122,0.1)",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex gap-4 mt-3 pt-3" style={{ borderTop: "1px solid rgba(201,169,122,0.15)" }}>
                <Link
                  href={user ? "/account" : "/login"}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-xs uppercase tracking-wide opacity-70"
                  style={{ color: "var(--cream)" }}
                >
                  <HiOutlineUser size={18} />
                  {user ? "My Account" : "Sign In"}
                </Link>
                <Link
                  href="/wishlist"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-xs uppercase tracking-wide opacity-70"
                  style={{ color: "var(--cream)" }}
                >
                  <HiOutlineHeart size={18} />
                  Wishlist
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
