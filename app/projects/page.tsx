'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Users, 
  BarChart,
  ExternalLink,
  Github,
  Shield,
  Zap,
  Filter,
  Calendar,
  Award
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projectCategories = [
  'All',
  'Web Development',
  'Mobile Apps',
  'Enterprise Solutions',
  'AI & Machine Learning',
  'FinTech',
  'Healthcare',
  'E-commerce'
];

const featuredProjects = [
  {
    id: 1,
    title: 'Global Banking Platform',
    category: 'FinTech',
    description: 'A secure, scalable banking platform serving 50,000+ users with real-time transaction processing.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    image: '/api/placeholder/600/400',
    client: 'Fortune 500 Bank',
    duration: '6 months',
    results: [
      '99.9% uptime',
      '50% faster transactions',
      'Enhanced security compliance'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Healthcare AI Assistant',
    category: 'Healthcare',
    description: 'AI-powered diagnostic tool that helps doctors analyze medical images with 95% accuracy.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React Native', 'MongoDB'],
    image: '/api/placeholder/600/400',
    client: 'Medical Research Institute',
    duration: '8 months',
    results: [
      '95% diagnostic accuracy',
      '30% faster diagnosis',
      'HIPAA compliant'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'E-commerce Superstore',
    category: 'E-commerce',
    description: 'Scalable e-commerce platform handling 10,000+ daily transactions with personalized recommendations.',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Redis', 'Kubernetes'],
    image: '/api/placeholder/600/400',
    client: 'Retail Giant',
    duration: '4 months',
    results: [
      '40% increase in conversions',
      'Sub-second load times',
      'Seamless mobile experience'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  }
];

const allProjects = [
  ...featuredProjects,
  {
    id: 4,
    title: 'Supply Chain Management',
    category: 'Enterprise Solutions',
    description: 'End-to-end supply chain optimization platform with real-time tracking and predictive analytics.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'RabbitMQ'],
    image: '/api/placeholder/600/400',
    client: 'Manufacturing Corporation',
    duration: '9 months',
    results: [
      '25% cost reduction',
      'Real-time tracking',
      'Automated inventory'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Fitness Mobile App',
    category: 'Mobile Apps',
    description: 'Personalized fitness coaching app with AI-powered workout plans and progress tracking.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Redux'],
    image: '/api/placeholder/600/400',
    client: 'Fitness Startup',
    duration: '5 months',
    results: [
      '100,000+ downloads',
      '4.8 star rating',
      'Social features'
    ],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Data Analytics Dashboard',
    category: 'Enterprise Solutions',
    description: 'Real-time business intelligence dashboard for enterprise decision making.',
    technologies: ['Vue.js', 'Python', 'D3.js', 'Elasticsearch', 'Docker'],
    image: '/api/placeholder/600/400',
    client: 'Technology Company',
    duration: '3 months',
    results: [
      'Real-time insights',
      'Custom reporting',
      'Team collaboration'
    ],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === category));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-secondary-900/10" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-6">
              <Award className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium gradient-text">Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Case Studies</span>
              <br />
              <span className="text-white">That Deliver Results</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our portfolio of transformative projects that have helped businesses scale, 
              innovate, and achieve digital excellence.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured</span> Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Highlighting our most impactful work with industry leaders
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="corporate-card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    {project.category === 'FinTech' && <BarChart className="w-8 h-8 text-white" />}
                    {project.category === 'Healthcare' && <Shield className="w-8 h-8 text-white" />}
                    {project.category === 'E-commerce' && <Globe className="w-8 h-8 text-white" />}
                  </div>
                </div>

                <div className="p-8">
                  {/* Category & Client */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-500/10 text-primary-300 rounded-full text-sm">
                      {project.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  {/* Client */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Key Results</p>
                    <ul className="space-y-2">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.liveUrl}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="flex-1">
                      <a href={project.githubUrl}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Filter className="w-5 h-5 text-primary-500 mr-3" />
              <h3 className="text-2xl font-bold">Browse by Category</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => filterProjects(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-300 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex -space-x-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.liveUrl}>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="corporate-card p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                Have a Project in Mind?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can transform your ideas into a successful digital solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" size="lg">
                  <a href="/contact">Start Your Project</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:sales@codewave.com">Contact Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}