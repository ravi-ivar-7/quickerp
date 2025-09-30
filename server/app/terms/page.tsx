import { FileText, Shield, AlertTriangle, Scale, Mail, Github, ExternalLink } from 'lucide-react'
import { Metadata } from 'next'
import { config } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Terms of Service - QuickERP Chrome Extension',
  description: 'Terms and conditions for using QuickERP Chrome extension. Learn about user responsibilities, privacy, data security, and service limitations for IIT Kharagpur ERP automation.',
  keywords: [
    'QuickERP terms of service',
    'Chrome extension terms',
    'IIT Kharagpur ERP terms',
    'user agreement',
    'privacy policy',
    'data security terms',
    'Chrome extension legal',
    'ERP automation terms',
    'Gmail OAuth terms',
    'local storage policy'
  ],
  authors: [{ name: 'QuickERP Team', url: 'https://quickerp.rknain.com' }],
  openGraph: {
    title: 'Terms of Service - QuickERP Chrome Extension',
    description: 'Terms and conditions for using QuickERP Chrome extension. Learn about user responsibilities, privacy, and service limitations.',
    type: 'website',
    images: [
      {
        url: '/images/extension-main.png',
        width: 1200,
        height: 630,
        alt: 'QuickERP Chrome Extension Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - QuickERP Chrome Extension',
    description: 'Terms and conditions for using QuickERP Chrome extension and ERP automation.',
    images: ['/images/extension-main.png'],
  },
  alternates: {
    canonical: '/terms',
  },
}

// Terms of Service Structured Data
const termsStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service - QuickERP Chrome Extension",
  "description": "Terms and conditions for using QuickERP Chrome extension for IIT Kharagpur ERP automation",
  "url": "https://quickerp.rknain.com/terms",
  "mainEntity": {
    "@type": "TermsOfService",
    "name": "QuickERP Terms of Service",
    "text": "Terms and conditions for using QuickERP Chrome extension. Covers user responsibilities, privacy, data security, and service limitations.",
    "dateModified": "2025-08-29",
    "version": "1.0.0",
    "provider": {
      "@type": "Organization",
      "name": "QuickERP Team",
      "url": "https://quickerp.rknain.com"
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://quickerp.rknain.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms of Service",
        "item": "https://quickerp.rknain.com/terms"
      }
    ]
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
      {/* Terms Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsStructuredData),
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-8 shadow-lg border border-blue-200/50">
            <Scale className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Terms & Conditions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using QuickERP Chrome extension for IIT Kharagpur ERP access.
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="order-2 lg:order-1 lg:col-span-3 space-y-6 lg:space-y-8">
            {/* Acceptance of Terms */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-200/30">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                By installing and using the QuickERP Chrome extension, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not install or use the extension.
              </p>
            </div>

            {/* Service Description */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-200/30">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  2. Description of Service
                </h2>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                QuickERP is a Chrome extension that automates login to the IIT Kharagpur ERP system by:
              </p>
              <div className="bg-green-50/50 rounded-2xl p-4 border border-green-200/30">
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Storing your ERP credentials securely with AES-GCM encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Automatically filling login forms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Retrieving OTP codes from Gmail via OAuth2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Handling security questions automatically</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities & Prohibited Uses */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  User Responsibilities
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Providing accurate ERP credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Maintaining device security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Using extension for legitimate access only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Complying with IIT KGP policies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Prohibited Uses
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">×</span>
                    <span>Accessing others' ERP accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">×</span>
                    <span>Circumventing security measures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">×</span>
                    <span>Automating beyond login</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">×</span>
                    <span>Commercial usage</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 backdrop-blur-2xl rounded-3xl border border-purple-200/40 shadow-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-200/30">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Privacy & Data Security
                </h2>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We are committed to protecting your privacy with industry-standard security measures:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-white/50 rounded-2xl p-4 border border-purple-200/30">
                  <h4 className="font-semibold text-slate-900 mb-2">Local Storage</h4>
                  <p className="text-sm text-slate-600">All data stored locally on your device</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-purple-200/30">
                  <h4 className="font-semibold text-slate-900 mb-2">AES-GCM Encryption</h4>
                  <p className="text-sm text-slate-600">Industry-standard credential protection</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-purple-200/30">
                  <h4 className="font-semibold text-slate-900 mb-2">No External Servers</h4>
                  <p className="text-sm text-slate-600">Zero data transmission to external servers</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-purple-200/30">
                  <h4 className="font-semibold text-slate-900 mb-2">Limited Gmail Access</h4>
                  <p className="text-sm text-slate-600">Read-only access for OTP retrieval only</p>
                </div>
              </div>
            </div>

            {/* Legal Disclaimers */}
            <div className="bg-gradient-to-br from-amber-50/50 to-orange-50/50 backdrop-blur-2xl rounded-3xl border border-amber-200/40 shadow-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-200/30">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Important Disclaimers
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white/50 rounded-2xl p-4 border border-amber-200/30">
                  <h4 className="font-semibold text-slate-900 mb-2">Service "As Is"</h4>
                  <p className="text-sm text-slate-600">No warranties for uninterrupted operation or future compatibility</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-amber-200/30">
                  <h4 className="font-semibold text-slate-900 mb-2">Limitation of Liability</h4>
                  <p className="text-sm text-slate-600">Not liable for data loss, unauthorized access, or academic consequences</p>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-amber-200/30">
                  <h4 className="font-semibold text-slate-900 mb-2">Unofficial Tool</h4>
                  <p className="text-sm text-slate-600">Not affiliated with or endorsed by IIT Kharagpur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2 space-y-4 lg:space-y-6">
            {/* Quick Summary */}
            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-2xl rounded-3xl border border-blue-200/40 shadow-2xl p-6">
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-600" />
                Key Points
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Local data storage only</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>AES-GCM encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Use responsibly</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Unofficial tool</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>No warranties</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6">
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-4">Questions?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Need clarification on these terms or have legal questions?
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
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
