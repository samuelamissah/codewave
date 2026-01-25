'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Lightbulb, 
  User, // Changed from 'Users' to singular 'User'
  Award,
  CheckCircle,
  Rocket,
  HeartHandshake,
  TrendingUp,
  Zap,
  Cpu
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Mission-Driven',
    description: 'We focus on delivering real business value, not just code.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation',
    description: 'Constantly exploring new technologies and approaches.'
  },
  {
    icon: <User className="w-6 h-6" />, // Singular icon
    title: 'Founder-Led',
    description: 'Direct involvement and passion in every project.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence',
    description: 'Commitment to quality in everything we deliver.'
  }
];

// Updated to reflect a current, realistic starting point and future goals
const milestones = [
  { 
    year: '2025', 
    event: 'Vision & Foundation', 
    description: 'Launched with a clear vision for modern, effective digital solutions.' 
  },
  { 
    year: '2026', 
    event: 'Building Momentum', 
    description: 'Securing first client partnerships and delivering foundational projects.' 
  },
  { 
    year: '2027', 
    event: 'Strategic Growth', 
    description: 'Planned expansion of service offerings and team.' 
  },
  { 
    year: '2028', 
    event: 'Specialization & Scale', 
    description: 'Goal to launch dedicated AI/automation services.' 
  },
  { 
    year: '2029+', 
    event: 'Sustainable Impact', 
    description: 'Aspiring to make a significant mark on the digital landscape.' 
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid -z-10" />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Marketing Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Beyond Code</span>
                <br />
                <span className="text-white">Real Solutions</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="text-xl font-medium text-primary-300 mb-4">
                  In a world powered by technology, businesses need more than just a website.
                </p>
                
                <p>
                  They need a partner who can turn ideas into real digital solutions.
                  Welcome to <span className="font-semibold text-primary-400">CodeWave Solutions</span>.
                </p>
                
                <div className="space-y-4 pl-4 border-l-2 border-primary-500/30">
                  <p className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 shrink-0" />
                    We create fast, modern, and responsive websites that help your brand stand out.
                  </p>
                  
                  <p className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 shrink-0" />
                    We build custom software that solves real problems and streamlines operations.
                  </p>
                  
                  <p className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 shrink-0" />
                    We design dashboards and data systems that help you make smarter decisions.
                  </p>
                  
                  <p className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-1 shrink-0" />
                    We automate your workflows so you can work faster and grow bigger.
                  </p>
                </div>
                
                <div className="pt-6">
                  <p className="text-xl font-medium text-secondary-300 mb-2">
                    At CodeWave Solutions, innovation meets simplicity.
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold text-white">Your ideas.</span>{' '}
                    <span className="font-semibold text-primary-400">Our technology.</span>{' '}
                    <span className="font-semibold text-secondary-400">One powerful solution.</span>
                  </p>
                </div>
                
                <div className="pt-4 text-center text-2xl font-bold gradient-text tracking-wide">
                  CodeWave Solutions — Build Smart. Work Smart.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="default">
                <a href="#contact" className="inline-flex items-center gap-2">
                
                  Start Your Journey
                </a>
              </Button>
                
              <Button asChild variant="outline">
                <a href="#services" className="inline-flex items-center gap-2">
           
                  View Our Services
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <HeartHandshake className="w-6 h-6 mr-3 text-primary-500" />
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="glass-card p-4 hover-lift hover:border-primary-500/30"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats - Updated for a solo founder */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6">By The Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">15</div>
                  <div className="text-gray-400 text-sm mt-1">Projects Launched</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-gray-400 text-sm mt-1">Founder-Led Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">1</div>
                  <div className="text-gray-400 text-sm mt-1">Dedicated Expert</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">∞</div>
                  <div className="text-gray-400 text-sm mt-1">Creative Potential</div>
                </div>
              </div>
              {/* Small note about being founder-led */}
              <p className="text-xs text-center text-gray-500 mt-6">
                <Zap className="w-3 h-3 inline mr-1" />
                <em>Currently a passionate solo venture. Ready to build your vision.</em>
              </p>
            </div>

            {/* Timeline - Revised for clarity */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Our Roadmap</h3>
                <span className="text-xs px-3 py-1 bg-primary-500/10 text-primary-300 rounded-full">
                  Founder&apos;s Vision
                </span>
              </div>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="shrink-0 w-16">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all group-hover:scale-110 ${
                        milestone.year === '2025' 
                          ? 'bg-linear-to-r from-primary-500 to-secondary-500 ring-2 ring-primary-500/50' 
                          : 'bg-linear-to-r from-white/10 to-white/5 border border-white/10'
                      }`}>
                        {milestone.year}
                      </div>
                    </div>
                    <div className="ml-4 pb-4 border-b border-white/10 flex-1">
                      <h4 className="font-semibold flex items-center">
                        {milestone.event}
                        {milestone.year.includes('2026') && (
                          <span className="ml-2 text-xs px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full">Current Focus</span>
                        )}
                      </h4>
                      <p className="text-sm text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center">
                <Cpu className="w-4 h-4 inline mr-2" />
                Every great company starts with a single idea and relentless execution.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}