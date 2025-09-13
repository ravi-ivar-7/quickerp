'use client'

import Link from 'next/link'
import { Github, Mail, Heart, Lock, Zap, Shield} from 'lucide-react'
import { config } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-100 via-white/50 to-transparent backdrop-blur-xl border-t border-white/20 shadow-2xl shadow-black/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/logo-quickerp.png" 
                alt="QuickERP Logo" 
                className="w-12 h-12 rounded-2xl shadow-lg shadow-blue-500/20"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                QuickERP
              </span>
            </div>
            <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
              Chrome extension that automates your IIT Kharagpur ERP login with Gmail OTP integration. 
              Secure, fast, and reliable one-click access to your ERP account.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href={config.github.url}
                className="p-3 bg-white/50 hover:bg-white/80 rounded-xl border border-white/30 hover:border-blue-200 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </Link>
              <Link 
                href={`mailto:${config.contact.email}`}
                className="p-3 bg-white/50 hover:bg-white/80 rounded-xl border border-white/30 hover:border-blue-200 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 text-slate-700" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-slate-600 hover:text-blue-600 transition-colors duration-300">
                Home
              </Link>
              <Link href="/faqs" className="block text-slate-600 hover:text-blue-600 transition-colors duration-300">
                FAQs
              </Link>
              <Link href="/contact" className="block text-slate-600 hover:text-blue-600 transition-colors duration-300">
                Contact & Support
              </Link>
              <Link 
                href={config.github.url}
                className="block text-slate-600 hover:text-blue-600 transition-colors duration-300"
              >
                GitHub Repository
              </Link>
            </div>
          </div>

          {/* Legal & Security */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal & Security</h3>
            <div className="space-y-3">
              <Link href="/privacy" className="block text-slate-600 hover:text-blue-600 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-slate-600 hover:text-blue-600 transition-colors duration-300">
                Terms of Service
              </Link>
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Lock className="w-4 h-4" />
                  <span>AES-GCM Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Shield className="w-4 h-4" />
                  <span>Local Storage Only</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Zap className="w-4 h-4" />
                  <span>OAuth2 Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} QuickERP. Made for IIT Kharagpur students with ❤️
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span>No Data Collection</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
