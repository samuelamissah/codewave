// app/careers/page.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Sparkles,
  Target,
  Mail,
  Link as LinkIcon,
  Github,
  Linkedin,
  FileText,
  Send,
  CheckCircle,
  Users,
  Globe,
  Heart,
  Coffee,
  BookOpen,
  Cpu,
  Eye
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';

// Solo founder/visionary information
const founderInfo = {
  name: 'Temi Kojo', 
  role: 'Founder & Lead Developer',
  bio: 'A passionate developer and visionary with 5+ years of experience in frontend development. Building CodeWave Solutions from the ground up to deliver exceptional digital products.',
  expertise: ['Full-Stack Development', 'Data Analytics','Project Strategy'],
  links: {
    github: 'https://github.com/samuelamissah',
    linkedin: 'https://linkedin.com/in/samuelamissah',
    portfolio: 'https://potfoli-test.vercel.app',
    email: 'kodewav3@gmail.com'
  }
};

// Future roles you might hire for (when ready)
const futureRoles = [
  {
    title: 'Senior Frontend Developer',
    description: 'Will specialize in building beautiful, performant user interfaces with React/Next.js.',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend/DevOps Engineer',
    description: 'Will focus on building scalable APIs, databases, and deployment infrastructure.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS/Azure', 'Docker', 'CI/CD']
  },
  {
    title: 'UI/UX Designer',
    description: 'Will craft user-centered designs and design systems for client projects.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility']
  }
];

// Culture/vision points
const visionPoints = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Quality Over Quantity',
    description: 'We take on fewer projects to ensure each one receives meticulous attention and exceeds expectations.'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Innovation-First',
    description: 'We constantly explore and integrate cutting-edge technologies to solve problems in novel ways.'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Direct Impact',
    description: 'Every team member will see their work directly shape client success and company direction.'
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Autonomy & Trust',
    description: 'Future team members will own their work with flexibility and minimal bureaucracy.'
  }
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: '',
    message: '',
    portfolio: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mqakpzoz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Career Interest: ${formData.roleInterest} from ${formData.name}`,
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          roleInterest: '',
          message: '',
          portfolio: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Focus on Vision */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-secondary-900/10" />
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 mb-6">
                <Zap className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium gradient-text">Founder&apos;s Vision</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Join the</span>
                <br />
                <span className="text-white">Journey</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                CodeWave Solutions is being built from the ground up with a focus on excellence,
                innovation, and meaningful impact. While we&apos;re not actively hiring yet,
                we&apos;re always interested in connecting with exceptional talent who share our vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" size="lg">
                  <a href="#vision">
                    <Eye className="w-5 h-5 mr-2" />
                    Explore Our Vision
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#connect">
                    <Mail className="w-5 h-5 mr-2" />
                    Express Interest
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The <span className="gradient-text">Visionary</span>
                <br />
                <span className="text-white">Behind the Mission</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{founderInfo.name}</h3>
                  <p className="text-primary-400 mb-4">{founderInfo.role}</p>
                  <p className="text-gray-300">{founderInfo.bio}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {founderInfo.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={founderInfo.links.github}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary-500/30 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={founderInfo.links.linkedin}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary-500/30 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={founderInfo.links.portfolio}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary-500/30 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Placeholder for founder image/avatar */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Cpu className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-gray-400">Founder & Vision</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary-500/10 blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-secondary-500/10 blur-2xl -z-10" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision & Future Culture */}
      <section id="vision" className="py-20 bg-dark-800/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building a <span className="gradient-text">Culture</span> of
              <br />
              <span className="text-white">Excellence</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              This is the environment we&apos;re committed to creating as we grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mb-6">
                  <div className="text-primary-500">
                    {point.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Future Roles Preview */}
          <div className="corporate-card p-12">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Future</span> Opportunities
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {futureRoles.map((role, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-primary-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{role.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{role.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {role.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-primary-400">
                      Future consideration
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 mb-6">
                These represent the types of roles we envision creating as our company grows.
              </p>
              <Button asChild variant="outline">
                <a href="#connect">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Express Early Interest
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Expression of Interest Form */}
      <section id="connect" className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="gradient-text">Express</span> Interest
                </h2>
                <p className="text-gray-400">
                  Share your details, and we&apos;ll keep you in mind for future opportunities.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium text-green-400">Interest registered!</p>
                      <p className="text-sm text-green-300">
                        We&apos;ll reach out when opportunities align with our growth.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Alex Johnson"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="alex@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Role of Interest
                  </label>
                  <select
                    title='Role of Interest'
                    name="roleInterest"
                    value={formData.roleInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border text-black border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a future role of interest</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend/DevOps</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other/General Interest</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Portfolio/GitHub Link
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="https://github.com/yourusername"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your skills, interests, or why you're drawn to our vision..."
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-400">
                    * Required fields
                  </div>
                  <Button
                    type="submit"
                    variant="default"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Interest'}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="text-center pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-500">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Or email directly: {founderInfo.links.email}
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}