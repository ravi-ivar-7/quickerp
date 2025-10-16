'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Download, ChevronDown, BookOpen, Settings, Shield, RefreshCw } from 'lucide-react'
import { config } from '@/lib/config'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBlogsDropdownOpen, setIsBlogsDropdownOpen] = useState(false)
  const [isUpdatesDropdownOpen, setIsUpdatesDropdownOpen] = useState(false)
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false)
  const [mobileUpdatesOpen, setMobileUpdatesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const updatesDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBlogsDropdownOpen(false)
      }
      if (updatesDropdownRef.current && !updatesDropdownRef.current.contains(event.target as Node)) {
        setIsUpdatesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-white md:bg-gradient-to-r md:from-white/10 md:via-white/5 md:to-white/10 md:backdrop-blur-2xl border-b border-slate-200 md:border-white/20 shadow-lg md:shadow-2xl md:shadow-black/10">
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
            {/* Blogs Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsBlogsDropdownOpen(true)}
                className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Blogs
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isBlogsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isBlogsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl border border-white/40 shadow-2xl shadow-black/20 overflow-hidden z-50"
                  onMouseEnter={() => setIsBlogsDropdownOpen(true)}
                  onMouseLeave={() => setIsBlogsDropdownOpen(false)}
                >
                  <Link
                    href="/blogs/setup"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/70 transition-all duration-200"
                  >
                    <Settings className="w-4 h-4 text-blue-500" />
                    Setup Guide
                  </Link>
                  <Link
                    href="/blogs/oauth"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/70 transition-all duration-200"
                  >
                    <Shield className="w-4 h-4 text-emerald-500" />
                    OAuth Guide
                  </Link>
                  <Link
                    href="/blogs"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/70 transition-all duration-200"
                  >
                    <BookOpen className="w-4 h-4 text-purple-500" />
                    All Blogs
                  </Link>
                </div>
              )}
            </div>

            {/* Updates Dropdown */}
            <div className="relative" ref={updatesDropdownRef}>
              <button
                onMouseEnter={() => setIsUpdatesDropdownOpen(true)}
                className="flex items-center gap-1 px-5 py-2.5 text-sm font-medium text-slate-700/80 hover:text-slate-900 hover:bg-white/30 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Updates
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUpdatesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isUpdatesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl border border-white/40 shadow-2xl shadow-black/20 overflow-hidden z-50"
                  onMouseEnter={() => setIsUpdatesDropdownOpen(true)}
                  onMouseLeave={() => setIsUpdatesDropdownOpen(false)}
                >
                  <Link
                    href="/updates/v1.3.0"
                    className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/70 transition-all duration-200"
                  >
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-green-500" />
                      v1.3.0
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Latest</span>
                  </Link>
                </div>
              )}
            </div>
            
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
              className="p-3 text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            <Link 
              href="/" 
              className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Blogs Dropdown */}
            <div>
              <button
                onClick={() => setMobileBlogsOpen(!mobileBlogsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <span>Blogs</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileBlogsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileBlogsOpen && (
                <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                  <Link 
                    href="/blogs/setup" 
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setMobileBlogsOpen(false)
                    }}
                  >
                    <Settings className="w-4 h-4 text-blue-500" />
                    Setup Guide
                  </Link>
                  <Link 
                    href="/blogs/oauth" 
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setMobileBlogsOpen(false)
                    }}
                  >
                    <Shield className="w-4 h-4 text-emerald-500" />
                    OAuth Guide
                  </Link>
                  <Link 
                    href="/blogs" 
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setMobileBlogsOpen(false)
                    }}
                  >
                    <BookOpen className="w-4 h-4 text-purple-500" />
                    All Blogs
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Updates Dropdown */}
            <div>
              <button
                onClick={() => setMobileUpdatesOpen(!mobileUpdatesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <span>Updates</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileUpdatesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileUpdatesOpen && (
                <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                  <Link 
                    href="/updates/v1.3.0" 
                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setMobileUpdatesOpen(false)
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-green-500" />
                      v1.3.0
                    </span>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Latest</span>
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/faqs" 
              className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="block px-4 py-3 text-base font-medium text-slate-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms
            </Link>
            
            <div className="pt-4 mt-4 border-t border-slate-200">
              <button 
                onClick={() => {
                  window.open(config.extension.url, '_blank')
                  setIsMenuOpen(false)
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg text-base"
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
