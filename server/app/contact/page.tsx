import { Mail, MessageSquare, Github, ExternalLink, MessageCircle } from 'lucide-react'
import { Metadata } from 'next'
import { config } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact & Support - QuickERP',
  description: 'Get help and support for QuickERP Chrome extension. Contact us via email, GitHub issues, or browse our comprehensive FAQ section.',
  keywords: ['QuickERP support', 'contact QuickERP', 'ERP help', 'Chrome extension support', 'IIT Kharagpur ERP support'],
  openGraph: {
    title: 'Contact & Support - QuickERP',
    description: 'Get help and support for QuickERP Chrome extension. Contact us via email, GitHub issues, or browse our comprehensive FAQ section.',
    type: 'website',
  },
  twitter: {
    title: 'Contact & Support - QuickERP',
    description: 'Get help and support for QuickERP Chrome extension. Contact us via email, GitHub issues, or browse our comprehensive FAQ section.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-8 shadow-lg border border-blue-200/50">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Contact & Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Have questions, feedback, or need support? We're here to help make your ERP experience seamless!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Direct Contact */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6 lg:p-8 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-200/30">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900">Direct Email</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              For urgent matters, bug reports, or direct communication with our support team
            </p>
            <a 
              href={`mailto:${config.contact.email}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
          </div>

          {/* GitHub Issues */}
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6 lg:p-8 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-slate-500/20 to-slate-700/20 rounded-2xl border border-slate-200/30">
                <Github className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900">GitHub Issues</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Report bugs, request features, or join community discussions about the extension
            </p>
            <a 
              href={`${config.github.url}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              Open Issue
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* FAQ Reference */}
          <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-2xl rounded-3xl border border-amber-200/40 shadow-2xl p-6 lg:p-8 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-2xl border border-amber-200/30">
                <MessageSquare className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900">Check FAQs First</h3>
            </div>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Many common questions are already answered in our comprehensive FAQ section
            </p>
            <a 
              href="/faqs"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              View FAQs
            </a>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-2xl rounded-3xl border border-blue-200/40 shadow-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-200/30">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Need Help Getting Started?
              </h2>
            </div>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Check out our comprehensive documentation and setup guides to get the most out of QuickERP
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/faqs"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                Browse FAQs
              </a>
              <a 
                href={config.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white border border-white/50 hover:border-blue-200 text-slate-700 hover:text-slate-900 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Github className="w-4 h-4" />
                View Documentation
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
