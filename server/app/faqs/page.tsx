'use client'

import { useState } from 'react'
import { Search, ChevronDown, ChevronUp, HelpCircle, Shield, Lock, Zap, Mail, Github, ExternalLink } from 'lucide-react'
import { config } from '@/lib/config'

const HighlightedText = ({ text, searchTerm }: { text: string; searchTerm: string }) => {
  if (!searchTerm) return <span>{text}</span>
  
  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'))
  return (
    <span>
      {parts.map((part, index) => 
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index} className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-900 px-1 rounded-md font-medium">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  )
}

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState<number[]>([0])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const faqs = [
    {
      category: 'general',
      icon: HelpCircle,
      question: "What is QuickERP?",
      answer: "QuickERP is a Chrome extension that automates login to the IIT Kharagpur ERP system. It securely stores your credentials, handles security questions, and automatically retrieves OTP codes from Gmail to provide one-click ERP access."
    },
    {
      category: 'security',
      icon: Shield,
      question: "Is QuickERP safe to use?",
      answer: "Yes, QuickERP is designed with security as a top priority. All credentials are encrypted using AES-GCM encryption and stored locally on your device. No data is sent to external servers, and Gmail access is read-only for OTP retrieval only."
    },
    {
      category: 'setup',
      icon: Zap,
      question: "How do I install QuickERP?",
      answer: "1. Download the extension from the Chrome Web Store\n2. Set up Google OAuth2 credentials in Google Cloud Console\n3. Install the extension in Chrome\n4. Complete the setup wizard with your ERP credentials\n5. Connect your Gmail account for OTP retrieval"
    },
    {
      category: 'security',
      icon: Mail,
      question: "Why do I need to provide Gmail access?",
      answer: "Gmail access is required to automatically retrieve OTP codes sent by the ERP system. The extension only has read-only access and specifically looks for OTP emails from erp.iitkgp.ac.in. Your other emails remain private and untouched."
    },
    {
      category: 'privacy',
      icon: Lock,
      question: "What data does QuickERP collect?",
      answer: "QuickERP collects minimal data necessary for functionality: your ERP credentials (encrypted), security question answers (encrypted), and Gmail access for OTP retrieval. All data is stored locally on your device and never transmitted to external servers."
    },
    {
      category: 'technical',
      icon: Zap,
      question: "How does the OTP retrieval work?",
      answer: "When you log in to ERP, the system sends an OTP to your registered email. QuickERP monitors your Gmail for these OTP emails, extracts the code automatically, and enters it into the ERP login form - all without manual intervention."
    },
    {
      category: 'general',
      icon: HelpCircle,
      question: "Can I use QuickERP on multiple devices?",
      answer: "Each device requires separate setup since all data is stored locally. You'll need to install and configure QuickERP on each Chrome browser where you want to use it."
    },
    {
      category: 'setup',
      icon: Lock,
      question: "What if I change my ERP password?",
      answer: "Simply open the QuickERP extension and update your credentials in the settings. The extension will encrypt and store the new password locally."
    },
    {
      category: 'technical',
      icon: Shield,
      question: "Does QuickERP work with two-factor authentication?",
      answer: "Yes! QuickERP is specifically designed to handle ERP's OTP-based two-factor authentication by automatically retrieving and entering OTP codes from your Gmail."
    },
    {
      category: 'support',
      icon: Github,
      question: "How do I get support or report issues?",
      answer: `For support, you can:\n1. Check this FAQ section\n2. Visit our GitHub repository: ${config.github.url}\n3. Create an issue on GitHub for bug reports\n4. Contact us via email for general inquiries`
    }
  ]

  const categories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'general', name: 'General', count: faqs.filter(f => f.category === 'general').length },
    { id: 'security', name: 'Security & Privacy', count: faqs.filter(f => f.category === 'security' || f.category === 'privacy').length },
    { id: 'setup', name: 'Setup & Installation', count: faqs.filter(f => f.category === 'setup').length },
    { id: 'technical', name: 'Technical', count: faqs.filter(f => f.category === 'technical').length },
    { id: 'support', name: 'Support', count: faqs.filter(f => f.category === 'support').length }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           faq.category === selectedCategory || 
                           (selectedCategory === 'security' && (faq.category === 'security' || faq.category === 'privacy'))
    return matchesSearch && matchesCategory
  })

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-8 shadow-lg border border-blue-200/50 animate-pulse">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Help & Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            Frequently Asked Questions
          </h1>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search through all questions and answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-transparent border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-slate-700 placeholder-slate-400 text-lg"
              />
              {searchTerm && (
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-sm text-slate-500">
                  {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-400 shadow-xl shadow-blue-500/30'
                    : 'bg-white/70 text-slate-700 border-white/50 hover:bg-white/90 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100'
                  }`}>
                    {category.count}
                  </span>
                </div>
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 -z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const IconComponent = faq.icon
              const isOpen = openItems.includes(index)
              return (
                <div key={index} className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-200/40">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">
                          <HighlightedText text={faq.question} searchTerm={searchTerm} />
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-medium capitalize">
                            {faq.category}
                          </span>
                          {!isOpen && (
                            <span className="text-sm text-slate-500">Click to expand</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className={`p-2 rounded-lg transition-all duration-300 ${
                        isOpen 
                          ? 'bg-blue-100 text-blue-600 rotate-180' 
                          : 'bg-slate-100 text-slate-400'
                      }`}>
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="ml-12 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-xl p-4 border-l-4 border-blue-400">
                        <div className="text-slate-700 leading-relaxed whitespace-pre-line text-base">
                          <HighlightedText text={faq.answer} searchTerm={searchTerm} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <div className="text-center py-20">
              <div className="relative mx-auto mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                  <Search className="w-12 h-12 text-slate-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 rounded-3xl blur-2xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-4">No results found</h3>
              <p className="text-lg text-slate-500 mb-6">Try adjusting your search terms or selecting a different category</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-blue-50/80 via-white/90 to-purple-50/80 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-white/60 shadow-2xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg border border-blue-200/50">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800">Need More Help?</span>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Still have questions?
                </h2>
                <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Can't find what you're looking for? Our community and support team are here to help you get the most out of QuickERP!
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <a 
                  href={`${config.github.url}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/90 backdrop-blur-sm hover:bg-white border border-white/60 hover:border-blue-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl transition-all duration-300">
                        <Github className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">GitHub Issues</h3>
                        <p className="text-sm text-blue-600 font-medium">Community Support</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-500 ml-auto transition-colors duration-300" />
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">Report bugs, request features, or browse existing discussions with our developer community.</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Usually responds within 24 hours</span>
                    </div>
                  </div>
                </a>
                <a 
                  href={`mailto:${config.contact.email}`}
                  className="group relative bg-white/90 backdrop-blur-sm hover:bg-white border border-white/60 hover:border-purple-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl transition-all duration-300">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Email Support</h3>
                        <p className="text-sm text-purple-600 font-medium">Direct Contact</p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">Get personalized help from our support team for installation, setup, and troubleshooting.</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Professional support available</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}