'use client'

import Link from 'next/link'
import { Github, Mail, Heart, Lock, Zap, Shield, Chrome, Star, Users, BookOpen } from 'lucide-react'
import { config } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 backdrop-blur-xl border-t border-white/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
                <img 
                  src="/assets/logo-quickerp.png" 
                  alt="QuickERP Logo" 
                  className="relative w-14 h-14 rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  QuickERP
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <Chrome className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-slate-500 font-medium">Chrome Extension</span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6 lg:mb-8 max-w-md leading-relaxed text-base lg:text-lg">
              Automate your IIT Kharagpur ERP login with secure Gmail OTP integration. 
              Experience lightning-fast, one-click access to your ERP account.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link 
                href={config.github.url}
                className="group p-4 bg-white/60 hover:bg-white/90 rounded-xl border border-white/40 hover:border-blue-200 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Github className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
              </Link>
              <Link 
                href={`mailto:${config.contact.email}`}
                className="group p-4 bg-white/60 hover:bg-white/90 rounded-xl border border-white/40 hover:border-blue-200 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Mail className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
              </Link>
              <Link 
                href={config.extension.url}
                className="group p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Chrome className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>

          {/* Navigation & Legal Combined for Mobile */}
          <div className="md:col-span-2 lg:col-span-4 grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Navigation Links */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 lg:mb-6 text-base lg:text-lg flex items-center gap-2">
                <BookOpen className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
                Navigation
              </h3>
              <div className="space-y-3 lg:space-y-4">
                <Link href="/" className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-white/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-medium text-sm lg:text-base">Home</span>
                </Link>
                <Link href="/blogs" className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-white/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-medium text-sm lg:text-base">Blog & Guides</span>
                </Link>
                <Link href="/faqs" className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-white/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-medium text-sm lg:text-base">FAQs</span>
                </Link>
                <Link href="/contact" className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-white/50">
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-medium text-sm lg:text-base">Contact & Support</span>
                </Link>
                <Link 
                  href={config.github.url}
                  className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-white/50"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-medium text-sm lg:text-base">GitHub Repository</span>
                </Link>
              </div>
            </div>

            {/* Legal & Policies */}
            <div>
              <h3 className="font-bold text-slate-900 mb-4 lg:mb-6 text-base lg:text-lg flex items-center gap-2">
                <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-500" />
                Legal & Policies
              </h3>
              <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
                <Link href="/privacy" className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-white/50">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-medium text-sm lg:text-base">Privacy Policy</span>
                </Link>
                <Link href="/terms" className="group flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-300 p-2 rounded-lg hover:bg-white/50">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="font-medium text-sm lg:text-base">Terms of Service</span>
                </Link>
              </div>
              
              {/* Security Features */}
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/50">
                <h4 className="font-semibold text-slate-800 mb-3 text-xs lg:text-sm">Security Features</h4>
                <div className="space-y-2 lg:space-y-3">
                  <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm text-slate-600">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Lock className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                    </div>
                    <span>AES-GCM Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm text-slate-600">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                    </div>
                    <span>Local Storage Only</span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm text-slate-600">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" />
                    </div>
                    <span>OAuth2 Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Community & Trust */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/50">
              <h4 className="font-semibold text-slate-800 mb-3 text-base lg:text-lg">Ready to get started? Install QuickERP and experience seamless ERP access.</h4>
              <Link 
                href={config.extension.url}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium text-sm lg:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Chrome className="w-4 h-4 lg:w-5 lg:h-5" />
                Get Extension
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-8">
              <p className="text-slate-600 font-medium text-sm lg:text-base text-center lg:text-left">
                © {new Date().getFullYear()} QuickERP.
              </p>
              <div className="flex items-center gap-4 lg:gap-6 text-xs lg:text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Shield className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500" />
                  No Data Collection
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
                  100% Secure
                </span>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                ✌️ Peace
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
