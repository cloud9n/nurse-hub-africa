import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Blog & News</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay updated with the latest trends in African nursing, policy updates, and impact stories from our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center">
                      <Tag className="w-3 h-3 mr-2" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>5 min read</span>
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-primary font-bold flex items-center group">
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center space-x-4">
            <button className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold">1</button>
            <button className="w-12 h-12 rounded-full border-2 border-gray-100 text-gray-400 flex items-center justify-center font-bold hover:border-primary hover:text-primary transition-all">2</button>
            <button className="w-12 h-12 rounded-full border-2 border-gray-100 text-gray-400 flex items-center justify-center font-bold hover:border-primary hover:text-primary transition-all">3</button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">Never Miss an Update</h3>
            <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
              Subscribe to our newsletter and get the latest news delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-warm-white border border-gray-200 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
