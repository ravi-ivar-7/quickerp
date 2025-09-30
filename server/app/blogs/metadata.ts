import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - QuickERP Chrome Extension Guides & Tutorials',
  description: 'Learn how to set up and use QuickERP Chrome extension for IIT Kharagpur ERP automation. Step-by-step guides, OAuth setup, troubleshooting, and best practices.',
  keywords: [
    'QuickERP blog',
    'Chrome extension tutorials',
    'IIT Kharagpur ERP guides',
    'OAuth setup guide',
    'ERP automation tutorial',
    'Gmail OTP setup',
    'Chrome extension installation',
    'QuickERP setup guide',
    'ERP login automation',
    'security best practices',
    'troubleshooting guide',
    'IIT KGP ERP help'
  ],
  authors: [{ name: 'QuickERP Team', url: 'https://quickerp.rknain.com' }],
  openGraph: {
    title: 'Blog - QuickERP Chrome Extension Guides & Tutorials',
    description: 'Learn how to set up and use QuickERP Chrome extension for IIT Kharagpur ERP automation with our comprehensive guides.',
    type: 'website',
    images: [
      {
        url: '/images/extension-main.png',
        width: 1200,
        height: 630,
        alt: 'QuickERP Chrome Extension Blog - Setup Guides and Tutorials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - QuickERP Chrome Extension Guides & Tutorials',
    description: 'Comprehensive guides for QuickERP Chrome extension setup and IIT Kharagpur ERP automation.',
    images: ['/images/extension-main.png'],
  },
  alternates: {
    canonical: '/blogs',
  },
}

// Blog Page Structured Data
export const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "QuickERP Blog",
  "description": "Guides and tutorials for QuickERP Chrome extension and IIT Kharagpur ERP automation",
  "url": "https://quickerp.rknain.com/blogs",
  "author": {
    "@type": "Organization",
    "name": "QuickERP Team",
    "url": "https://quickerp.rknain.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "QuickERP",
    "url": "https://quickerp.rknain.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://quickerp.rknain.com/assets/logo-quickerp.png"
    }
  }
}
