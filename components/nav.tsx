"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { navLinks, contactHref } from "@/config";

export const Nav = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const section = href.replace("/#", "/");
    return section !== "/" && pathname.startsWith(section);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-line bg-paper/70 backdrop-blur-xl">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center px-5 py-3.5 sm:px-8"
        >
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.slice(1).map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className={`group relative px-3 py-1.5 text-[0.9rem] transition-colors duration-300 ${
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {link.text}
                    <span
                      className={`absolute inset-x-3 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={contactHref}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost ml-auto !px-4 !py-1.5 !text-[0.85rem]"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
