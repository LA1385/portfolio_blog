"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

// This is a list of our navigation links. Keeping it in an array makes it easy to add more later.
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname(); 
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-dark/10 dark:border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold font-outfit tracking-tighter text-primary-600 dark:text-primary-400">
              MyPortfolio.
            </Link>
          </div>

          {/* Right Section: Desktop Nav + Theme Toggle + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                          isActive 
                            ? "text-primary-600 dark:text-primary-400 font-semibold" 
                            : "text-foreground/70 dark:text-foreground/70"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Mobile Menu Button (Hamburger) */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-foreground/70 hover:text-primary-500"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-surface-dark/10 dark:border-white/10 bg-background">
          <ul className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close menu when a link is clicked
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                        : "text-foreground/70 hover:bg-surface-light dark:hover:bg-surface-dark"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
