import Link from 'next/link';
import { Code2, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-bold">
                Code<span className="gradient-text">Wave</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We deliver innovative digital solutions that transform businesses and drive growth in the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>kodewav3@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+233 505593485</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CodeWave Solutions. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="https://twitter.com/kodewav3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/samuelamissah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/samuelamissah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}