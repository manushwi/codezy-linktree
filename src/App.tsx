import React from 'react';
import { Linkedin, Instagram, Globe, Users, Mail, Calendar } from 'lucide-react';
import { BackgroundPattern } from './components/BackgroundPattern';
import { ProfileCard } from './components/ProfileCard';
import { LinkButton } from './components/LinkButton';

function App() {
  const links = [
    {
      title: 'Official Website',
      href: 'https://rkgitm.ac.in',
      icon: <Globe size={24} />
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rkgitm-gzb-308179385/',
      icon: <Linkedin size={24} />
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/_codezy/?utm_source=ig_web_button_share_sheet',
      icon: <Instagram size={24} />
    },
    // {
    //   title: 'Club Portal',
    //   href: 'https://codezy-club.rkgitm.ac.in',
    //   icon: <Users size={24} />
    // },
    {
      title: 'Contact Us',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=manushwi.test@gmail.com',
      icon: <Mail size={24} />
    },
    // {
    //   title: 'Events Calendar',
    //   href: 'https://events.rkgitm.ac.in/codezy',
    //   icon: <Calendar size={24} />
    // }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <BackgroundPattern />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-lg mx-auto space-y-8">
          <div className="animate-fade-in">
            <ProfileCard
              universityName="RKGITM"
              clubName="Codezy"
              description="Empowering students through coding, innovation, and technology. Join us in building the future of software development."
              handle="@codezy_club"
            />
          </div>

          <div className="space-y-4 animate-fade-in-up">
            {links.map((link, index) => (
              <div 
                key={link.title}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in-up"
              >
                <LinkButton
                  href={link.href}
                  icon={link.icon}
                >
                  {link.title}
                </LinkButton>
              </div>
            ))}
          </div>

          <div className="text-center text-white/60 text-sm mt-12 animate-fade-in">
            <p>© 2025 Codezy</p>
            <p className="mt-1">Raj Kumar Goel Institute of Technology & Management</p>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;