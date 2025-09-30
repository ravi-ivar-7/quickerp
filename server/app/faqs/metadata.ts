import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - QuickERP Chrome Extension',
  description: 'Find answers to common questions about QuickERP Chrome extension. Get help with setup, troubleshooting, Gmail integration, and IIT Kharagpur ERP automation.',
  keywords: [
    'QuickERP FAQ',
    'Chrome extension help',
    'ERP automation questions',
    'Gmail OTP FAQ',
    'IIT Kharagpur ERP help',
    'QuickERP troubleshooting',
    'Chrome extension issues',
    'ERP login problems',
    'OAuth setup help',
    'security questions FAQ'
  ],
  authors: [{ name: 'QuickERP Team', url: 'https://quickerp.rknain.com' }],
  openGraph: {
    title: 'Frequently Asked Questions - QuickERP Chrome Extension',
    description: 'Find answers to common questions about QuickERP Chrome extension. Get help with setup, troubleshooting, and ERP automation.',
    type: 'website',
    images: [
      {
        url: '/images/extension-main.png',
        width: 1200,
        height: 630,
        alt: 'QuickERP Chrome Extension FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions - QuickERP Chrome Extension',
    description: 'Find answers to common questions about QuickERP Chrome extension and ERP automation.',
    images: ['/images/extension-main.png'],
  },
  alternates: {
    canonical: '/faqs',
  },
}

// FAQ Structured Data for SEO
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is QuickERP safe to use with my ERP credentials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, QuickERP is designed with security as the top priority. Your credentials are encrypted using AES-GCM encryption and stored locally on your device. No data is transmitted to external servers."
      }
    },
    {
      "@type": "Question",
      "name": "How do I install and set up QuickERP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Install QuickERP from the Chrome Web Store, then follow the setup wizard to enter your ERP credentials, add security questions, and connect your Gmail account for OTP retrieval."
      }
    },
    {
      "@type": "Question",
      "name": "What data does QuickERP collect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QuickERP collects minimal data necessary for functionality: your ERP credentials (encrypted), security question answers (encrypted), and Gmail access for OTP retrieval. All data is stored locally on your device and never transmitted to external servers."
      }
    },
    {
      "@type": "Question",
      "name": "How does the OTP retrieval work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you log in to ERP, the system sends an OTP to your registered email. QuickERP monitors your Gmail for these OTP emails, extracts the code automatically, and enters it into the ERP login form - all without manual intervention."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use QuickERP on multiple devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each device requires separate setup since all data is stored locally. You'll need to install and configure QuickERP on each Chrome browser where you want to use it."
      }
    },
    {
      "@type": "Question",
      "name": "What if I change my ERP password?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply open the QuickERP extension and update your credentials in the settings. The extension will encrypt and store the new password locally."
      }
    },
    {
      "@type": "Question",
      "name": "Does QuickERP work with two-factor authentication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! QuickERP is specifically designed to handle ERP's OTP-based two-factor authentication by automatically retrieving and entering OTP codes from your Gmail."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get support or report issues?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For support, you can check the FAQ section, visit the GitHub repository, create an issue on GitHub for bug reports, or contact via email for general inquiries."
      }
    }
  ]
}
