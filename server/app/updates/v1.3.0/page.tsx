import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Update to v1.3.0 - QuickERP',
  description: 'QuickERP version 1.3.0 changelog and update information.',
}

export default function UpdateV130Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12">
     
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            QuickERP v1.3.0
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border-2 border-green-500 rounded-full">
            <span className="text-green-700 text-sm font-bold">✓ Latest Version</span>
          </div>
        </div>

        {/* Changelog */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-blue-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📋</span>
            <h2 className="text-2xl font-bold text-slate-900">What&apos;s New in v1.3.0</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-600 text-sm mb-6">
              <span>📅</span>
              <span>Released on October 16, 2025</span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 mt-1 font-bold">✓</span>
                <span>Updated OAuth client configuration</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 mt-1 font-bold">✓</span>
                <span>Added upgrade instructions for existing users</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 mt-1 font-bold">✓</span>
                <span>Improved Gmail connection error messages</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 mt-1 font-bold">✓</span>
                <span>Enhanced setup guide with security warnings</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-blue-600 mt-1 font-bold">✓</span>
                <span>Added status display on login button</span>
              </li>
            </ul>

            {/* Breaking Change Warning */}
            <div className="mt-8 p-6 bg-amber-50 border-2 border-amber-400 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚠️</span>
                <h3 className="text-xl font-bold text-amber-900">Important: OAuth Update Required</h3>
              </div>
              <p className="text-amber-800 mb-4">
                If you&apos;re upgrading from an older version, you need to reconnect your Gmail account due to OAuth client changes.
              </p>
              <div className="bg-white rounded-xl p-4 border border-amber-200">
                <p className="font-semibold text-slate-900 mb-3">Follow these steps:</p>
                <ol className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">1.</span>
                    <span>Visit <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Google Account Permissions</a></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">2.</span>
                    <span>Find &quot;QuickERP&quot; in the list of connected apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">3.</span>
                    <span>Click on it and select &quot;Remove Access&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">4.</span>
                    <span>Return to QuickERP extension and click &quot;Connect Gmail&quot; again</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-amber-600">5.</span>
                    <span>Grant all the requested permissions</span>
                  </li>
                </ol>
              </div>
              <div className="mt-4">
                <a 
                  href="https://quickerp.rknain.com/blogs/setup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline"
                >
                  📖 View detailed setup guide →
                </a>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}
