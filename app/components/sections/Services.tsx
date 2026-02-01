'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  BarChart, 
  Palette,
  Zap,
  Shield,
  Gavel,
  Scale
} from 'lucide-react';
import Container from '@/components/ui/Container';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Modern, responsive websites built with Next.js, React, and cutting-edge technologies.',
    features: ['SSR/SSG Optimization', 'E-commerce Solutions', 'CMS Integration', 'PWA Capabilities'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI & Automation',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    features: ['Predictive Analytics', 'Chatbots & NLP', 'Computer Vision', 'Process Automation'],
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Data Analytics',
    description: 'Data-driven insights and visualization dashboards for smarter decision making.',
    features: ['Real-time Analytics', 'Business Intelligence', 'Data Warehousing', 'ETL Pipelines'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Digital Transformation',
    description: 'Comprehensive strategies to modernize your business processes and technology stack.',
    features: ['Process Optimization', 'Legacy System Migration', 'Digital Strategy', 'Change Management'],
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: <Gavel className="w-8 h-8" />,
    title: 'Legal & Energy Consulting',
    description: 'Specialized legal advisory in energy law, regulatory compliance, and complex negotiations.',
    features: ['Energy Law', 'Contract Negotiation', 'Compliance', 'Policy Advisory'],
    color: 'from-emerald-500 to-teal-500'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive digital solutions designed to drive your business forward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="glass-card p-6 h-full hover:border-primary-500/50 transition-all duration-300 hover-lift">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="pt-4 border-t border-white/10">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}