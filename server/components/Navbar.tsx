'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { config } from '@/lib/config'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-black/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/assets/logo-quickerp.png" 
              alt="QuickERP Logo" 
              className="w-10 h-10 rounded-2xl "
            />
            <span className="text-xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-500 transition-all duration-500">
              QuickERP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Link 
              href="/" 
              className="px-5 py-2.5 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Home
            </Link>
            <Link 
              href="/faqs" 
              className="px-5 py-2.5 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              FAQs
            </Link>
            <Link 
              href="/contact" 
              className="px-5 py-2.5 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="px-5 py-2.5 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="px-5 py-2.5 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Terms
            </Link>
            <button 
              onClick={() => {
                window.open(config.extension.url, '_blank')
              }}
              className="ml-3 px-6 py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-1 backdrop-blur-sm border border-white/30"
            >
              Install Extension
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-slate-700 hover:text-slate-900 hover:bg-white/30 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-2xl border-t border-white/30 shadow-2xl">
          <div className="px-4 py-3 space-y-1">
            <Link 
              href="/" 
              className="block px-5 py-3 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-transparent hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/faqs" 
              className="block px-5 py-3 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-transparent hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="/contact" 
              className="block px-5 py-3 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-transparent hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="block px-5 py-3 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-transparent hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="block px-5 py-3 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-transparent hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            <div className="px-4 py-2">
              <button 
                onClick={() => {
                  window.open(config.extension.url, '_blank')
                  setIsMenuOpen(false)
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 backdrop-blur-sm border border-white/30"
              >
                Install Extension
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
