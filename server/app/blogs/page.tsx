'use client'

import { useState } from 'react'
import { BookOpen, Calendar, Clock, ArrowRight, User, Tag, Search, Sparkles, Zap, Shield, Star, TrendingUp, FileText, Lightbulb } from 'lucide-react'
import { config } from '@/lib/config'
import Link from 'next/link'
import { blogStructuredData } from './metadata'

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

export default function BlogsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All Posts')

    const blogPosts = [
        {
            title: 'Complete Setup Guide for QuickERP Chrome Extension',
            description: 'Step-by-step instructions to install and configure QuickERP for automated IIT Kharagpur ERP login with Gmail OTP integration.',
            slug: 'setup',
            category: 'Setup Guide',
            readTime: '8 min read',
            publishDate: 'August 29, 2025',
            featured: true,
            icon: Zap,
            gradient: 'from-blue-500 to-purple-500',
            bgGradient: 'from-blue-50 to-purple-50',
            popularity: 'Most Popular'
        },
        {
            title: 'Google OAuth2 Setup for Gmail Integration',
            description: 'Learn how to configure Google OAuth2 credentials for secure Gmail access and automatic OTP retrieval in QuickERP.',
            slug: 'oauth',
            category: 'Configuration',
            readTime: '6 min read',
            publishDate: 'August 29, 2025',
            featured: true,
            icon: Shield,
            gradient: 'from-emerald-500 to-teal-500',
            bgGradient: 'from-emerald-50 to-teal-50',
            popularity: 'Essential'
        }
    ]

    const categories = [
        { name: 'All Posts', count: blogPosts.length },
        { name: 'Setup Guide', count: 1 },
        { name: 'Configuration', count: 1 }
    ]

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-10 sm:bottom-20 left-1/3 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Blog Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogStructuredData),
                }}
            />

            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 md:mb-8 shadow-lg border border-blue-200/50">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-blue-800">Guides & Tutorials</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight animate-fade-in px-2">
                        QuickERP Blog
                    </h1>
                </div>

                {/* Search Bar */}
                <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl blur-xl"></div>
                        <div className="relative bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/50 shadow-2xl">
                            <Search className="absolute left-3 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            <input
                                type="text"
                                placeholder="Search guides and tutorials..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 sm:pl-12 md:pl-16 pr-3 sm:pr-4 md:pr-6 py-3 sm:py-3.5 md:py-4 bg-transparent border-0 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all text-sm sm:text-base text-slate-700 placeholder-slate-400"
                            />
                            {searchTerm && (
                                <div className="absolute right-3 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 text-xs sm:text-sm text-slate-500">
                                    {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto">
                        {categories.map((category, index) => {
                            const isActive = selectedCategory === category.name
                            return (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`group relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 backdrop-blur-sm border ${isActive
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-400 shadow-xl shadow-blue-500/30'
                                            : 'bg-white/70 text-slate-700 border-white/50 hover:bg-white/90 hover:border-blue-300 hover:shadow-lg'
                                        }`}
                                >
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <span className="text-xs sm:text-sm md:text-base">{category.name}</span>
                                        <span className={`text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full ${isActive
                                                ? 'bg-white/20 text-white'
                                                : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100'
                                            }`}>
                                            {category.count}
                                        </span>
                                    </div>
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl blur-xl opacity-30 -z-10"></div>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Featured Posts */}
                <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                            <span className="text-xs sm:text-sm font-semibold text-amber-800">Featured Content</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4 px-2">Essential Guides</h2>
                        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">Start your QuickERP journey with these comprehensive guides</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        {filteredPosts.filter(post => post.featured).map((post, index) => {
                            const IconComponent = post.icon
                            return (
                                <Link
                                    key={index}
                                    href={`/blogs/${post.slug}`}
                                    className="group relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
                                >
                                    {/* Animated Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${post.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>

                                    {/* Popularity Badge */}
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                                        <div className={`px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-bold shadow-lg animate-pulse`}>
                                            {post.popularity}
                                        </div>
                                    </div>

                                    <div className="relative p-4 sm:p-6 md:p-8">
                                        {/* Icon */}
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${post.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                            <span className={`px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r ${post.gradient} bg-opacity-10 text-slate-700 rounded-full text-xs sm:text-sm font-medium border border-white/30`}>
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500">
                                                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                                            <HighlightedText text={post.title} searchTerm={searchTerm} />
                                        </h3>

                                        <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                                            <HighlightedText text={post.description} searchTerm={searchTerm} />
                                        </p>

                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
                                            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-500">
                                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                                <span>{post.publishDate}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm sm:text-base text-blue-600 font-medium group-hover:gap-3 transition-all">
                                                <span>Read Guide</span>
                                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -bottom-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* All Posts Section */}
                <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8 text-center px-2">All Guides & Tutorials</h2>
                    {filteredPosts.length > 0 ? (
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            {filteredPosts.map((post, index) => (
                                <Link
                                    key={index}
                                    href={`/blogs/${post.slug}`}
                                    className="group block bg-white/60 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 hover:bg-white/80"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                                <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                                                    {post.category}
                                                </span>
                                                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-500">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        <span className="hidden sm:inline">{post.publishDate}</span>
                                                        <span className="sm:hidden">{post.publishDate.split(' ')[0]} {post.publishDate.split(' ')[1]}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        <span>{post.readTime}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
                                                <HighlightedText text={post.title} searchTerm={searchTerm} />
                                            </h3>

                                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                                <HighlightedText text={post.description} searchTerm={searchTerm} />
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm sm:text-base text-blue-600 font-medium group-hover:gap-3 transition-all md:ml-6">
                                            <span>Read Guide</span>
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 sm:py-12 md:py-16">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl">
                                <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-slate-500" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-2 sm:mb-3 md:mb-4 px-4">No guides found</h3>
                            <p className="text-sm sm:text-base md:text-lg text-slate-500 mb-4 sm:mb-6 px-4">Try adjusting your search terms or selecting a different category</p>
                            <button
                                onClick={() => {
                                    setSearchTerm('')
                                    setSelectedCategory('All Posts')
                                }}
                                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-3xl animate-pulse"></div>
                        <div className="relative bg-gradient-to-r from-blue-50/80 via-white/90 to-purple-50/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/60 shadow-2xl hover:shadow-3xl transition-all duration-500">
                            {/* Floating Icons */}
                            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center delay-500">
                                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                            </div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                                    <span className="text-xs sm:text-sm font-semibold text-emerald-800">Get Started Now</span>
                                </div>

                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 px-2">
                                    Ready to Automate Your ERP Experience?
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                                    Join thousands of IIT Kharagpur students who have streamlined their ERP access.
                                    Install QuickERP and follow our guides for a seamless setup.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                                    <Link
                                        href={config.extension.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 w-full sm:w-auto justify-center"
                                    >
                                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                                        Install Extension
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <Link
                                        href="/blogs/setup"
                                        className="group inline-flex items-center gap-2 sm:gap-3 bg-white/80 hover:bg-white text-slate-700 hover:text-blue-600 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50 hover:border-blue-200 w-full sm:w-auto justify-center"
                                    >
                                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                                        Setup Guide
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
