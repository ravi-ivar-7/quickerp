import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Chrome, Mail, Key, CheckCircle, AlertTriangle, Clock, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { config } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Complete Setup Guide - QuickERP Chrome Extension',
  description: 'Step-by-step guide to set up QuickERP Chrome extension for automated IIT Kharagpur ERP login with Gmail OTP integration. No more OTP headaches!',
  keywords: [
    'QuickERP setup',
    'IIT Kharagpur ERP setup',
    'Chrome extension setup',
    'Gmail OTP setup',
    'ERP automation guide',
    'IIT KGP login automation',
    'QuickERP installation',
    'ERP extension tutorial',
    'automated login setup',
    'Gmail integration guide'
  ],
  authors: [{ name: 'QuickERP Team', url: 'https://quickerp.rknain.com' }],
  openGraph: {
    title: 'Complete Setup Guide - QuickERP Chrome Extension',
    description: 'Step-by-step guide to set up QuickERP for automated IIT Kharagpur ERP login with Gmail OTP integration.',
    type: 'article',
    publishedTime: '2024-09-30T00:00:00.000Z',
    authors: ['QuickERP Team'],
    images: [
      {
        url: '/images/extension-main.png',
        width: 1200,
        height: 630,
        alt: 'QuickERP Chrome Extension',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Setup Guide - QuickERP Chrome Extension',
    description: 'Step-by-step guide to set up QuickERP for automated IIT Kharagpur ERP login.',
    images: ['/images/extension-main.png'],
  },
  alternates: {
    canonical: '/blogs/setup',
  },
}

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up QuickERP Chrome Extension for IIT Kharagpur ERP",
  "description": "Complete guide to set up automated login for IIT Kharagpur ERP with Gmail OTP integration",
  "image": "/images/setup/08 setup complete.png",
  "totalTime": "PT5M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Chrome Browser"
    },
    {
      "@type": "HowToSupply", 
      "name": "Gmail Account"
    },
    {
      "@type": "HowToSupply",
      "name": "IIT Kharagpur ERP Credentials"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "QuickERP Chrome Extension"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Install QuickERP Extension",
      "text": "Install the QuickERP Chrome extension from the Chrome Web Store",
      "image": "/images/setup/01 privacy and step1.png"
    },
    {
      "@type": "HowToStep", 
      "name": "Enter Security Questions",
      "text": "Add your ERP security questions and answers for automated login",
      "image": "/images/setup/02 sec qna.png"
    },
    {
      "@type": "HowToStep",
      "name": "Connect Gmail Account", 
      "text": "Link your Gmail account for automatic OTP retrieval",
      "image": "/images/setup/03 connect gmail.png"
    }
  ]
}

export default function SetupGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-5 py-3 mb-8 shadow-lg border border-blue-200/50">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">Setup Guide</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                Set Up QuickERP in 5 Minutes
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Complete guide to automate your IIT Kharagpur ERP login with Gmail OTP integration. 
                <span className="font-semibold text-blue-600"> No more OTP headaches!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl py-4 px-8 text-lg font-semibold rounded-2xl">
                  <Link href={config.extension.url} target="_blank">
                    <Download className="mr-3 h-5 w-5" />
                    Install Extension
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">2 Minutes</div>
                <div className="text-slate-600">Setup Time</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center">
                <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">AES-GCM</div>
                <div className="text-slate-600">Encryption</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 text-center">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">1-Click</div>
                <div className="text-slate-600">Auto Login</div>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              What You'll Need
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <Chrome className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Chrome Browser</h3>
                <p className="text-slate-600">Latest version of Google Chrome with extension support</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                <Mail className="h-10 w-10 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gmail Account</h3>
                <p className="text-slate-600">Gmail account for automatic OTP retrieval</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <Key className="h-10 w-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">ERP Credentials</h3>
                <p className="text-slate-600">Your IIT Kharagpur ERP login credentials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Step-by-Step Setup Guide
            </h2>

            {/* Step 1 */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Accept Privacy Policy & Enter Credentials</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-6">
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    After installing the extension, click on the QuickERP icon in your Chrome toolbar. You'll see the welcome screen with our privacy policy.
                  </p>
                  <ul className="text-slate-700 space-y-2">
                    <li><strong>Read and accept</strong> the privacy policy</li>
                    <li><strong>Enter your ERP roll number</strong></li>
                    <li><strong>Enter your ERP password</strong></li>
                    <li>Your credentials are encrypted with <strong>AES-GCM encryption</strong> and stored locally</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Add Security Questions & Answers</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="order-2 lg:order-1">
                    <Image
                      src="/images/setup/02 sec qna.png"
                      alt="Security Questions and Answers Setup Screen"
                      width={400}
                      height={250}
                      className="w-full rounded-xl shadow-md"
                    />
                  </div>
                  <div className="order-1 lg:order-2 prose prose-lg max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      The ERP system asks security questions during login. QuickERP automates this process by storing your answers securely.
                    </p>
                    <ul className="text-slate-700 space-y-2">
                      <li><strong>Add your security questions</strong> exactly as they appear in ERP</li>
                      <li><strong>Enter the corresponding answers</strong> for each question</li>
                      <li>You can add <strong>multiple question-answer pairs</strong></li>
                      <li>All answers are <strong>encrypted and stored locally</strong> on your device</li>
                    </ul>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-amber-800 font-medium mb-1">Important:</p>
                          <p className="text-amber-700 text-sm">Make sure to enter your security questions and answers exactly as they appear in your ERP account to ensure successful automation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Connect Your Gmail Account</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="order-2 lg:order-1">
                    <Image
                      src="/images/setup/03 connect gmail.png"
                      alt="Gmail Connection Setup Screen"
                      width={600}
                      height={400}
                      className="w-full rounded-xl shadow-md"
                    />
                  </div>
                  <div className="order-1 lg:order-2 prose prose-lg max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      To enable automatic OTP retrieval, you need to connect your Gmail account where you receive ERP OTP emails.
                    </p>
                    <ul className="text-slate-700 space-y-2">
                      <li><strong>Click "Connect Gmail"</strong> to start the OAuth process</li>
                      <li>You'll be redirected to <strong>Google's secure login page</strong></li>
                      <li>QuickERP only requests <strong>read-only access</strong> to your Gmail</li>
                      <li>We only read emails from <strong>erp.iitkgp.ac.in</strong> for OTP extraction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  4
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Handle Security Warnings</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <Image
                    src="/images/setup/04  warning.png"
                    alt="Google Security Warning Screen"
                    width={350}
                    height={250}
                    className="w-full rounded-xl shadow-md mb-4"
                  />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Security Warning</h4>
                  <p className="text-slate-600 text-sm">Google shows this warning for unverified apps. This is normal for development extensions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <Image
                    src="/images/setup/05 accept warning.png"
                    alt="Accept Security Warning Screen"
                    width={350}
                    height={250}
                    className="w-full rounded-xl shadow-md mb-4"
                  />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Accept Warning</h4>
                  <p className="text-slate-600 text-sm">Click "Advanced" and then "Go to QuickERP (unsafe)" to continue with the setup.</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-blue-800 font-medium mb-2">Why do I see this warning?</p>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      Google shows security warnings for unverified applications. QuickERP is safe to use - it's open source, 
                      processes everything locally, and only accesses your Gmail to read OTP emails from the ERP system. 
                      The warning appears because we haven't gone through Google's verification process yet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  5
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Complete Gmail Authorization</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <Image
                    src="/images/setup/06 continue signing.png"
                    alt="Continue Signing In Screen"
                    width={350}
                    height={250}
                    className="w-full rounded-xl shadow-md mb-4"
                  />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Continue Signing In</h4>
                  <p className="text-slate-600 text-sm">Proceed with the Google sign-in process using your Gmail account.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <Image
                    src="/images/setup/07 allow gmail access.png"
                    alt="Allow Gmail Access Screen"
                    width={350}
                    height={250}
                    className="w-full rounded-xl shadow-md mb-4"
                  />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Grant Permissions</h4>
                  <p className="text-slate-600 text-sm">Allow QuickERP to read your Gmail for OTP extraction. We only access ERP-related emails.</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <ul className="text-slate-700 space-y-2">
                  <li><strong>Sign in with your Gmail account</strong> that receives ERP OTPs</li>
                  <li><strong>Review the permissions</strong> - QuickERP only requests Gmail read access</li>
                  <li><strong>Click "Allow"</strong> to grant the necessary permissions</li>
                  <li>Your Gmail access token is <strong>stored securely</strong> and encrypted locally</li>
                </ul>
              </div>
            </div>

            {/* Step 6 */}
            <div className="mb-16">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  6
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Setup Complete! 🎉</h3>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="order-2 lg:order-1">
                    <Image
                      src="/images/setup/08 setup complete.png"
                      alt="Setup Complete Success Screen"
                      width={600}
                      height={400}
                      className="w-full rounded-xl shadow-md"
                    />
                  </div>
                  <div className="order-1 lg:order-2 prose prose-lg max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Congratulations! Your QuickERP extension is now fully configured and ready to automate your ERP login process.
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-green-800 font-medium mb-2">What happens now?</p>
                          <ul className="text-green-700 text-sm space-y-1">
                            <li>• Click "Login to ERP" to test your automated login</li>
                            <li>• QuickERP will handle credentials, security questions, and OTP automatically</li>
                            <li>• Your session will be ready in seconds, not minutes!</li>
                            <li>• All your data remains secure and encrypted on your device</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Troubleshooting & Tips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Common Issues & Solutions</h3>
                <ul className="text-slate-700 space-y-3 text-sm">
                  <li><strong>Login fails or unknown error:</strong> First try disconnecting Gmail from extension settings, then reconnect. If still failing, completely redo the setup process</li>
                  <li><strong>OTP not found:</strong> Ensure Gmail is connected and you receive ERP emails there. Check spam folder for OTP emails</li>
                  <li><strong>Security questions fail:</strong> Make sure questions and answers match exactly (case-sensitive). Try logging in manually once to verify</li>
                  <li><strong>Extension not working:</strong> Try refreshing the extension page, restarting Chrome, or reinstalling the extension</li>
                  <li><strong>Gmail permission denied:</strong> Go to extension settings → disconnect Gmail → reconnect with proper permissions</li>
                  <li><strong>Slow OTP retrieval:</strong> Wait 30-60 seconds for Gmail sync. Check your internet connection</li>
                  <li><strong>Multiple OTPs in email:</strong> Extension automatically picks the latest OTP from ERP emails</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pro Tips & Best Practices</h3>
                <ul className="text-slate-700 space-y-3 text-sm">
                  <li><strong>Test first:</strong> Try manual login once to verify your credentials work before setting up automation</li>
                  <li><strong>Gmail setup:</strong> Use the same Gmail account where you receive ERP OTP emails for best results</li>
                  <li><strong>Security questions:</strong> Copy-paste questions directly from ERP to avoid typos. Answers are case-sensitive</li>
                  <li><strong>Keep updated:</strong> Update the extension when new versions are available for bug fixes and improvements</li>
                  <li><strong>Network issues:</strong> Ensure stable internet connection during setup and login attempts</li>
                  <li><strong>Multiple accounts:</strong> If you have multiple Gmail accounts, make sure to connect the correct one</li>
                  <li><strong>Privacy:</strong> All data is stored locally and encrypted on your device - never shared externally</li>
                </ul>
              </div>
            </div>
          </div>
        </section> 
      </div>
    </>
  )
}
