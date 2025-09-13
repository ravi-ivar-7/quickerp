'use client'

import { Settings, Cloud, Shield, Key, Users, ExternalLink, CheckCircle, AlertTriangle, Code, Globe, Mail, Github } from 'lucide-react'
import { config } from '@/lib/config'

export default function OAuthSetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-8 shadow-lg border border-blue-200/50">
            <Settings className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">OAuth Configuration</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Google OAuth2 Setup Guide
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Complete step-by-step guide to configure Google OAuth2 client ID for the QuickERP Chrome extension.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Prerequisites */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-200/30">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Prerequisites
                </h2>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Google account</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Access to Google Cloud Console</span>
                </li>
              </ul>
            </div>

            {/* Step 1: Create Project */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-200/30">
                  <Cloud className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Step 1: Create Google Cloud Project
                </h2>
              </div>
              <div className="space-y-4">
                <ol className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">1</span>
                    <span>Go to <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Google Cloud Console</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">2</span>
                    <span>Click <strong>"Select a project"</strong> → <strong>"New Project"</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">3</span>
                    <span>Enter project name: <code className="bg-slate-100 px-2 py-1 rounded text-sm">IIT-KGP-ERP-Extension</code> (or your preferred name)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">4</span>
                    <span>Click <strong>"Create"</strong></span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Step 2: Enable APIs */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-200/30">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Step 2: Enable Required APIs
                </h2>
              </div>
              <div className="space-y-4">
                <ol className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">1</span>
                    <span>In the project dashboard, go to <strong>"APIs & Services"</strong> → <strong>"Library"</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">2</span>
                    <div>
                      <span>Search for and enable these APIs:</span>
                      <ul className="mt-2 ml-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-purple-600" />
                          <span><strong>Gmail API</strong> - Required for reading OTP emails</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-purple-600" />
                          <span><strong>Google+ API</strong> - Required for user profile information</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">3</span>
                    <span>Click on each API and click <strong>"Enable"</strong></span>
                  </li>
                </ol>
                <div className="bg-blue-50/50 border border-blue-200/30 rounded-2xl p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium">Gmail Account Requirement</p>
                      <p className="text-blue-700 text-sm">Currently, QuickERP only supports <strong>@gmail.com</strong> accounts. Make sure to connect with a Gmail account during setup, not other Google Workspace or custom domain emails.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50/50 border border-amber-200/30 rounded-2xl p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-amber-800 font-medium">Note</p>
                      <p className="text-amber-700 text-sm">Google+ API is needed even though it's deprecated, as it still handles the userinfo scopes used by Chrome extensions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: OAuth Consent Screen */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-2xl border border-green-200/30">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Step 3: Configure OAuth Consent Screen
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Initial Setup</h3>
                  <ol className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">1</span>
                      <span>Go to <strong>"APIs & Services"</strong> → <strong>"OAuth consent screen"</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">2</span>
                      <span>Select <strong>"External"</strong> user type (unless you have Google Workspace)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">3</span>
                      <span>Click <strong>"Create"</strong></span>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Required Information</h3>
                  <div className="bg-green-50/50 rounded-2xl p-4 border border-green-200/30">
                    <ul className="space-y-2 text-slate-600">
                      <li><strong>App name:</strong> <code className="bg-slate-100 px-2 py-1 rounded text-sm">QuickERP</code></li>
                      <li><strong>User support email:</strong> Your email address</li>
                      <li><strong>App logo:</strong> (Optional) Upload extension icon</li>
                      <li><strong>App domain:</strong> Leave blank for Chrome extensions</li>
                      <li><strong>Developer contact information:</strong> Your email address</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Add Scopes</h3>
                  <ol className="space-y-3 text-slate-600 mb-4">
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">1</span>
                      <span>Click <strong>"Add or Remove Scopes"</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">2</span>
                      <div>
                        <span>Add these scopes:</span>
                        <ul className="mt-2 ml-4 space-y-1 font-mono text-sm bg-slate-50 p-3 rounded-lg">
                          <li>• https://www.googleapis.com/auth/userinfo.email</li>
                          <li>• https://www.googleapis.com/auth/userinfo.profile</li>
                          <li>• https://www.googleapis.com/auth/gmail.readonly</li>
                          <li>• openid</li>
                        </ul>
                      </div>
                    </li>
                  </ol>
                  <div className="bg-blue-50/50 border border-blue-200/30 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-blue-800 font-medium">Important</p>
                        <p className="text-blue-700 text-sm">In the scope justification field for <code>gmail.readonly</code>, add:</p>
                        <p className="text-blue-700 text-sm italic mt-1">"Required to automatically read OTP verification codes from ERP system emails. Without this permission, the extension cannot function."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Create Client ID */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-200/30">
                  <Key className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Step 4: Create OAuth2 Client ID
                </h2>
              </div>
              <div className="space-y-4">
                <ol className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">1</span>
                    <span>Go to <strong>"APIs & Services"</strong> → <strong>"Credentials"</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">2</span>
                    <span>Click <strong>"Create Credentials"</strong> → <strong>"OAuth client ID"</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">3</span>
                    <span>Select <strong>"Chrome extension"</strong> as application type</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">4</span>
                    <span><strong>Name:</strong> <code className="bg-slate-100 px-2 py-1 rounded text-sm">QuickERP Extension Client</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded-full min-w-[24px] text-center">5</span>
                    <div>
                      <span><strong>Application ID:</strong> Enter your Chrome extension ID</span>
                      <p className="text-sm text-slate-500 mt-1">If you don't have it yet, use a placeholder like <code className="bg-slate-100 px-1 rounded">abcdefghijklmnopqrstuvwxyzabcdef</code></p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Step 5: Implementation */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-200/30">
                  <Code className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Step 5: Update manifest.json
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600">After creation, copy the <strong>Client ID</strong> and update your extension's manifest.json:</p>
                <div className="bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                  <pre className="text-green-400 text-sm"><code>{`{
  "oauth2": {
    "client_id": "YOUR_CLIENT_ID_HERE.apps.googleusercontent.com",
    "scopes": [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile", 
      "https://www.googleapis.com/auth/gmail.readonly",
      "openid"
    ]
  }
}`}</code></pre>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-2xl rounded-3xl border border-blue-200/40 shadow-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Quick Tips
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Use minimal required scopes for security</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Add test users during development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Monitor API usage in console</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Never commit client secrets</span>
                </li>
              </ul>
            </div>

            {/* Publishing Info */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-600" />
                Publishing
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Development/Testing:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Add test users to OAuth consent</li>
                    <li>• Works only for test users</li>
                    <li>• No verification required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Public Release:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Google verification required</li>
                    <li>• Privacy policy needed</li>
                    <li>• May take several days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Support Links */}
            <div className="bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <a 
                  href="https://developers.google.com/identity/protocols/oauth2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  OAuth2 Docs
                </a>
                <a 
                  href="https://developer.chrome.com/docs/extensions/reference/identity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  Chrome Extension OAuth
                </a>
                <a 
                  href={`${config.github.url}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  Get Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
