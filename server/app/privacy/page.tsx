'use client'

import { Shield, Lock, Eye, Database, Mail, Github, ExternalLink, FileText } from 'lucide-react'
import { config } from '@/lib/config'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-3 mb-8 shadow-lg border border-green-200/50">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800">Privacy & Security</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Your privacy and security are our top priorities. Learn how QuickERP protects your data with complete transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/40">
              <strong>Last Updated:</strong> August 29, 2025
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/40">
              <strong>Version:</strong> 1.0.0
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-200/30">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Overview
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                QuickERP is a Chrome extension designed to automate login to the IIT Kharagpur ERP system. 
                This privacy policy explains how we handle your data with complete transparency and industry-standard security measures.
              </p>
            </div>

            {/* Data Collection */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-200/30">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Data Collection
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    What We Collect
                  </h3>
                  <div className="bg-green-50/50 rounded-2xl p-4 border border-green-200/30">
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>ERP Credentials:</strong> Username and password for IIT KGP ERP system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Security Questions:</strong> Answers to ERP security questions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Gmail Access Token:</strong> OAuth2 token for OTP retrieval (read-only access)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span><strong>Extension Settings:</strong> User preferences and configuration</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    What We DON'T Collect
                  </h3>
                  <div className="bg-red-50/50 rounded-2xl p-4 border border-red-200/30">
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">×</span>
                        <span>Personal emails or email content (beyond OTP messages)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">×</span>
                        <span>Browsing history outside ERP domain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">×</span>
                        <span>Personal files or documents</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">×</span>
                        <span>Any data unrelated to ERP login functionality</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Storage */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-200/30">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Data Storage & Security
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl p-6 border border-purple-200/30">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Local Storage Only</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>All data stored locally</strong> on your device using Chrome's secure storage API</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>AES-GCM encrypted storage</strong> - credentials protected with industry-standard encryption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>No cloud storage</strong> - your credentials never leave your computer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>No external servers</strong> - we don't operate any backend servers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Features */}
            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-2xl rounded-3xl border border-blue-200/40 shadow-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Key Security Features
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>AES-GCM Encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Local Storage Only</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No Third-Party Sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Open Source Code</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>User Data Control</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Privacy Questions?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Have concerns about data handling or security? We're here to help.
              </p>
              <div className="space-y-3">
                <a 
                  href={`${config.github.url}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  GitHub Issues
                </a>
                <a 
                  href={`mailto:${config.contact.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-2xl rounded-3xl border border-green-200/40 shadow-2xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 mb-2">Privacy First</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your data stays on your device. No tracking, no analytics, no third-party access.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-2xl rounded-3xl border border-blue-200/40 shadow-2xl p-8 text-center">
            <Shield className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <p className="text-slate-700 font-medium text-lg mb-2">
              Your Privacy, Your Control
            </p>
            <p className="text-slate-600 max-w-2xl mx-auto">
              QuickERP is designed to enhance your ERP experience while keeping your data completely under your control. 
              All credentials are encrypted and stored locally on your device with industry-standard AES-GCM encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
