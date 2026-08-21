import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const routes = [
  ["Solutions", "/solutions"],
  ["How it works", "/how-it-works"],
  ["Industries", "/industries"],
  ["About", "/about"],
] as const;

export default function GlobalEnglishHeader({ activeRoute = "" }: { activeRoute?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const linkClass = (route: string) => `nav-link${activeRoute === route ? " global-nav-active" : ""}`;
  return <header className="site-header global-english-header"><div className="container flex h-[76px] items-center justify-between">
    <a className="brand-mark" href="/" aria-label="PEXEK homepage"><img src="/assets/NeonBlueGeometricPEmblem.webp" alt="" className="brand-symbol h-10 w-10 object-contain" /><span className="brand-wordmark"><strong className="font-display">PEXEK</strong><small>Workflow system</small></span></a>
    <nav className="hidden items-center gap-7 text-[0.86rem] font-medium lg:flex" aria-label="Primary navigation">{routes.map(([label, route]) => <a key={route} href={route} aria-current={activeRoute === route ? "page" : undefined} className={linkClass(route)}>{label}</a>)}</nav>
    <a href="/#assessment" className="hidden h-11 items-center justify-center gap-2 rounded-md bg-[#18c9ff] px-5 text-[0.82rem] font-semibold text-[#03101f] shadow-[0_10px_28px_rgba(15,183,255,0.25)] hover:bg-[#74ddff] lg:inline-flex">See How PEXEK Could Work for Your Business <ArrowUpRight className="size-4" /></a>
    <button className="inline-flex size-11 items-center justify-center rounded-md border border-[#375572] bg-[#08172d] text-white lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
  </div>{menuOpen && <div className="mobile-nav lg:hidden">{routes.map(([label, route]) => <a key={route} href={route} aria-current={activeRoute === route ? "page" : undefined} onClick={closeMenu} className={`border-b border-[#17334e] py-4 text-left text-lg font-medium${activeRoute === route ? " global-nav-active" : ""}`}>{label}</a>)}<a href="/#assessment" onClick={closeMenu} className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#18c9ff] text-[#03101f]">See How PEXEK Could Work for Your Business <ArrowUpRight className="size-4" /></a></div>}</header>;
}
