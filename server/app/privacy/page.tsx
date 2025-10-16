import type { Metadata } from 'next'
import { Shield, Lock, Eye, Database, Mail, Github, ExternalLink, FileText } from 'lucide-react'
import { config } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Privacy Policy - QuickERP Chrome Extension',
  description: 'Comprehensive privacy policy for QuickERP Chrome extension. Learn about data collection, AES-GCM encryption, local storage security, and Gmail OAuth practices for IIT Kharagpur ERP automation.',
  keywords: [
    'QuickERP privacy policy',
    'Chrome extension privacy',
    'data protection',
    'AES-GCM encryption',
    'local storage security',
    'Gmail privacy',
    'ERP data security',
    'OAuth2 privacy',
    'no data collection',
    'privacy first',
    'secure credentials',
    'GDPR compliance',
    'data minimization'
  ],
  authors: [{ name: 'QuickERP Team', url: 'https://quickerp.rknain.com' }],
  openGraph: {
    title: 'Privacy Policy - QuickERP Chrome Extension',
    description: 'Comprehensive privacy policy explaining data collection, AES-GCM encryption, local storage, and Gmail OAuth practices for IIT Kharagpur ERP automation.',
    type: 'article',
    images: [
      {
        url: '/images/extension-main.png',
        width: 1200,
        height: 630,
        alt: 'QuickERP Chrome Extension Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - QuickERP Chrome Extension',
    description: 'Learn how QuickERP protects your ERP credentials with AES-GCM encryption and local storage.',
    images: ['/images/extension-main.png'],
  },
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Your privacy and security are our top priorities. Learn how QuickERP protects your data with complete transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/40">
              <strong>Last Updated:</strong> October 16, 2025
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/40">
              <strong>Version:</strong> 1.3.0
            </div>
          </div>
        </div>

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

          {/* Data Usage */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-200/30">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Data Usage & Purpose Limitation
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Purpose Limitation
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Your data is used <strong>exclusively</strong> for the following purposes:
                </p>
                <div className="bg-indigo-50/50 rounded-2xl p-4 border border-indigo-200/30">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>ERP Authentication:</strong> Storing and using your IIT KGP credentials for automated login</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>OTP Retrieval:</strong> Accessing Gmail to retrieve OTP codes from erpkgp@adm.iitkgp.ac.in only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>Security Questions:</strong> Storing and answering ERP security questions automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">•</span>
                      <span><strong>Extension Settings:</strong> Saving user preferences for optimal functionality</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  What We DON'T Do
                </h3>
                <div className="bg-red-50/50 rounded-2xl p-4 border border-red-200/30">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">×</span>
                      <span>Sell, share, or rent your data to third parties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">×</span>
                      <span>Use your data for advertising or marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">×</span>
                      <span>Access emails beyond OTP messages from ERP system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">×</span>
                      <span>Store data on external servers or in the cloud</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl border border-teal-200/30">
                <ExternalLink className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Third-Party Services
              </h2>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              QuickERP integrates with the following third-party services, each with their own privacy practices:
            </p>

            <div className="space-y-4">
              <div className="bg-teal-50/50 rounded-2xl p-4 border border-teal-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">Google APIs (Gmail & OAuth2)</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Used for OAuth2 authentication and read-only Gmail access to retrieve OTP codes from erpkgp@adm.iitkgp.ac.in only.
                </p>
                <p className="text-xs text-slate-500">
                  <strong>Scopes:</strong> userinfo.email, userinfo.profile, gmail.readonly, openid<br />
                  <strong>Data Shared:</strong> None - tokens managed by Chrome's identity API<br />
                  <strong>Google Privacy:</strong> <a href="https://policies.google.com/privacy" className="text-teal-600 hover:underline">policies.google.com/privacy</a>
                </p>
              </div>

              <div className="bg-cyan-50/50 rounded-2xl p-4 border border-cyan-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">IIT Kharagpur ERP System</h4>
                <p className="text-sm text-slate-600 mb-2">
                  Direct integration with erp.iitkgp.ac.in for authentication and session management.
                </p>
                <p className="text-xs text-slate-500">
                  <strong>Data Shared:</strong> ERP credentials for authentication only<br />
                  <strong>Purpose:</strong> Automated login to official IIT KGP systems<br />
                  <strong>IIT KGP Privacy:</strong> Institution-specific privacy policies apply
                </p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-200/30">
                <Database className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Data Retention & Deletion
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  Retention Periods
                </h3>
                <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-200/30">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span><strong>ERP Credentials:</strong> Stored until manually deleted or extension uninstalled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span><strong>Gmail Tokens:</strong> Refreshed automatically, expired tokens removed immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span><strong>Session Data:</strong> Cleared after each login session (max 10 minutes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      <span><strong>Extension Settings:</strong> Persisted until changed or extension reset</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Data Deletion
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You have complete control over your data:
                </p>
                <div className="bg-green-50/50 rounded-2xl p-4 border border-green-200/30">
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Manual Deletion:</strong> Remove individual credentials through extension settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Complete Reset:</strong> Clear all data using the "Reset Extension" option</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Uninstall:</strong> All local data automatically removed when extension is uninstalled</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span><strong>Gmail Revocation:</strong> Disconnect Gmail access through Google Account settings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl border border-violet-200/30">
                <Eye className="w-6 h-6 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Cookies & Tracking Technologies
              </h2>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              QuickERP does not use cookies or tracking technologies for analytics or advertising purposes.
            </p>

            <div className="space-y-4">
              <div className="bg-violet-50/50 rounded-2xl p-4 border border-violet-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">No Tracking</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>No analytics cookies or tracking pixels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>No third-party advertising cookies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>No behavioral tracking or profiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-600 mt-1">•</span>
                    <span>No cross-site tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50/50 rounded-2xl p-4 border border-purple-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">Functional Storage Only</h4>
                <p className="text-sm text-slate-600">
                  Chrome's local storage API is used solely for:
                </p>
                <ul className="space-y-1 text-sm text-slate-600 mt-2">
                  <li>• Storing encrypted ERP credentials</li>
                  <li>• Maintaining extension settings</li>
                  <li>• Caching OAuth2 tokens for Gmail access</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-200/30">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Your Privacy Rights
              </h2>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              As a user of QuickERP, you have the following rights regarding your personal data:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">Access</h4>
                <p className="text-sm text-slate-600">View all stored data through extension interface</p>
              </div>
              <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">Deletion</h4>
                <p className="text-sm text-slate-600">Remove any or all data at any time</p>
              </div>
              <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">Portability</h4>
                <p className="text-sm text-slate-600">Export your data using backup features</p>
              </div>
              <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">Revocation</h4>
                <p className="text-sm text-slate-600">Revoke Gmail access through Google Account settings</p>
              </div>
            </div>
          </div>

          {/* International Transfers */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl border border-rose-200/30">
                <ExternalLink className="w-6 h-6 text-rose-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                International Data Transfers
              </h2>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Since all data is stored locally on your device, there are no international data transfers.
              However, when you access external services:
            </p>

            <div className="space-y-4">
              <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">Google Services</h4>
                <p className="text-sm text-slate-600">
                  OAuth2 authentication may involve Google's global infrastructure. See Google's privacy policy for details on international data transfers.
                </p>
              </div>

              <div className="bg-pink-50/50 rounded-2xl p-4 border border-pink-200/30">
                <h4 className="font-semibold text-slate-900 mb-2">IIT Kharagpur ERP</h4>
                <p className="text-sm text-slate-600">
                  ERP access is limited to IIT Kharagpur's infrastructure within India. No international transfers occur for ERP data.
                </p>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-200/30">
                <Shield className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Children's Privacy
              </h2>
            </div>

            <p className="text-slate-600 mb-6 leading-relaxed">
              QuickERP is designed for IIT Kharagpur students and requires access to institutional ERP systems.
              The extension is not intended for children under 13 years of age.
            </p>

            <div className="bg-cyan-50/50 rounded-2xl p-4 border border-cyan-200/30">
              <h4 className="font-semibold text-slate-900 mb-2">Age Requirements</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Minimum age: 13 years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>Requires valid IIT Kharagpur student credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">•</span>
                  <span>No collection of data from minors without institutional context</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Changes */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-2xl border border-slate-200/30">
                <Mail className="w-6 h-6 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                Contact Us & Policy Changes
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Contact Information</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  For privacy-related questions, concerns, or to exercise your rights:
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><strong>Email:</strong> <a href={`mailto:${config.contact.email}`} className="text-blue-600 hover:underline">{config.contact.email}</a></p>
                  <p><strong>GitHub Issues:</strong> <a href={`${config.github.url}/issues`} className="text-blue-600 hover:underline">Report Issues</a></p>
                  <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Policy Updates</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  This privacy policy may be updated periodically to reflect changes in our practices or legal requirements.
                </p>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>• Updates will be posted on this page</p>
                  <p>• Significant changes will be communicated</p>
                  <p>• Continued use constitutes acceptance</p>
                  <p>• Last updated: October 16, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
