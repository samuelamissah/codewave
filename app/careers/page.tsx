'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Clock,
  DollarSign,
  Home,
  Coffee,
  BookOpen,
  Zap,
  Calendar,
  GraduationCap
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation with regular reviews'
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Remote First',
    description: 'Work from anywhere in the world'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Career Growth',
    description: 'Clear progression paths and mentorship'
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Learning Budget',
    description: '$5,000 annual budget for courses and conferences'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Flexible Hours',
    description: 'Work when you\'re most productive'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Team',
    description: 'Work with talented people worldwide'
  }
];

const openPositions = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    experience: '5+ years',
    description: 'Lead development of enterprise-grade applications using modern tech stack.'
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    type: 'Full-time',
    location: 'Remote',
    experience: '3+ years',
    description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Remote',
    experience: '4+ years',
    description: 'Create beautiful, user-centered interfaces for enterprise applications.'
  },
  {
    id: 4,
    title: 'Project Manager',
    department: 'Delivery',
    type: 'Full-time',
    location: 'Remote',
    experience: '5+ years',
    description: 'Lead project delivery and ensure client success from start to finish.'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-secondary-900/10" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-6">
                <Zap className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium gradient-text">Were Hiring</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Build</span> The Future
                <br />
                <span className="text-white">With Us</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Join a team of passionate innovators creating cutting-edge solutions 
                for the world's most ambitious companies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="default" size="lg">
                  <a href="#positions">View Open Roles</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#culture">Our Culture</a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Users />, value: '50+', label: 'Global Team' },
                { icon: <Globe />, value: '15+', label: 'Countries' },
                { icon: <Award />, value: '95%', label: 'Retention Rate' },
                { icon: <Heart />, value: '4.9', label: 'Team Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="corporate-card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <div className="text-primary-500">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Culture & Benefits */}
      <section id="culture" className="py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="gradient-text">CodeWave</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We're building more than software—we're building a workplace where 
              exceptional people can do their best work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mb-6">
                  <div className="text-primary-500">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Hiring Process */}
          <div className="corporate-card p-12 mb-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our <span className="gradient-text">Hiring Process</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Application', description: 'Submit your resume and portfolio' },
                { step: '02', title: 'Screening', description: 'Initial call with our talent team' },
                { step: '03', title: 'Technical', description: 'Skills assessment and interviews' },
                { step: '04', title: 'Offer', description: 'Welcome to the team!' },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-2xl font-bold">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{process.title}</h4>
                  <p className="text-gray-400">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-dark-800/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover-lift hover:border-primary-500/30"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold">{position.title}</h3>
                      <span className="px-3 py-1 bg-primary-500/10 text-primary-300 rounded-full text-sm">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Globe className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        {position.experience}
                      </div>
                    </div>
                    
                    <p className="text-gray-300">{position.description}</p>
                  </div>
                  
                  <Button asChild variant="default">
                    <a href={`/careers/apply/${position.id}`}>Apply Now</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No matching role? */}
          <div className="text-center mt-20">
            <div className="glass-card p-12 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">
                Don&apos;t See Your Role?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                We&apso;re always looking for exceptional talent. Send us your resume 
                and tell us how you can contribute to our mission.
              </p>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:careers@codewave.com">Send General Application</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}