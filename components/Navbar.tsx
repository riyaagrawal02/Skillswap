'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight">Clivra</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem href="/learn" label="Learn" />
          <NavItem href="/challenges" label="Challenges" />
          <NavItem href="/paths" label="Paths" />
          <NavItem href="/community" label="Community" />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Log in
          </Link>

          <Link href="/signup" className="relative group">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-blue-500 blur opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-blue-500 text-sm font-semibold text-primary-foreground">
              Start Learning
            </div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
    </Link>
  );
}
