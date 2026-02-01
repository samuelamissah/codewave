'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail, ExternalLink, Scale, Code, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import { TEAM } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';

export default function TeamPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the <span className="gradient-text">Experts</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A specialized team blending cutting-edge technology with high-level legal and strategic consulting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card group overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Member Image/Placeholder */}
                  <div className="relative w-full aspect-[4/5] md:w-48 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/10 group-hover:border-primary-500/50 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/20">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110" 
                    /> 
                  </div>

                  <div className="flex-grow space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold group-hover:text-primary-400 transition-colors">
                        {member.name}
                      </h2>
                      <p className="text-primary-400 font-medium">{member.role}</p>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      {member.social.linkedin && (
                        <Link href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      )}
                      {member.social.github && (
                        <Link href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                      {member.social.twitter && (
                        <Link href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                          <Twitter className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 glass-card text-center border-primary-500/20"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold">Why This Matters</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              At CodeWave, we believe the best solutions are born at the intersection of disciplines. 
              By combining <span className="text-primary-400 font-bold">technical excellence</span> with 
              <span className="text-secondary-400 font-bold"> legal foresight</span> and 
              <span className="text-emerald-400 font-bold"> strategic negotiation</span>, 
              we don&apos;t just build software we build compliant, sustainable, and future-proof businesses.
            </p>
            <div className="flex justify-center gap-8 pt-8 text-gray-500">
              <div className="flex flex-col items-center gap-2">
                <Code className="w-8 h-8" />
                <span className="text-xs uppercase tracking-widest">Build</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Scale className="w-8 h-8" />
                <span className="text-xs uppercase tracking-widest">Consult</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="w-8 h-8" />
                <span className="text-xs uppercase tracking-widest">Scale</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
