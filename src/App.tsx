import { motion } from "motion/react";
import { 
  Cpu, 
  Users, 
  Calendar, 
  FileText, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Award,
  Globe,
  Zap
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
          <Cpu className="text-white w-6 h-6" />
        </div>
        <span className="font-display font-bold text-xl tracking-tighter">SUPERCOMPUTING <span className="text-brand-primary">CHALLENGE</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Register</a>
        <a href="#" className="hover:text-white transition-colors">Sponsors</a>
        <a href="#" className="hover:text-white transition-colors">Archive</a>
        <button className="btn-primary py-2 text-sm">Log In</button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent rounded-full blur-[150px]" />
    </div>
    
    <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-xs font-semibold text-brand-secondary mb-6">
          <Zap className="w-3 h-3" />
          <span>WELCOME TO THE 36TH ANNUAL</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter">
          2025-26 <br />
          <span className="text-gradient">SUPERCOMPUTING</span> <br />
          CHALLENGE
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
          Real-world problem solving through computational science. Join the most exciting program 
          offering a unique experience to students in New Mexico.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">
            Register Now <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-[4/3] rounded-3xl overflow-hidden glass p-2">
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <img 
              src="https://supercomputingchallenge.org/23-24/images/finalist-teams.jpg" 
              alt="Supercomputing Challenge Finalists" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/challenge-finalists/800/600";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-xs font-bold text-white/80 mb-1">
                <Users className="w-3 h-3" />
                <span>CLASS OF 2024</span>
              </div>
              <div className="text-lg font-bold">Celebrating our future innovators</div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 px-6 border-y border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { label: "Years of Innovation", value: "35+" },
        { label: "Student Projects", value: "10k+" },
        { label: "Partner Institutions", value: "50+" },
        { label: "Scholarships Awarded", value: "$1M+" },
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="text-center md:text-left"
        >
          <div className="text-3xl font-bold mb-1 font-display">{stat.value}</div>
          <div className="text-xs uppercase tracking-widest text-white/40 font-semibold">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const QuickLinks = () => {
  const links = [
    { title: "Dates", icon: Calendar, href: "#" },
    { title: "Students", icon: Users, href: "#" },
    { title: "Teachers", icon: GraduationCap, href: "#" },
    { title: "Teams", icon: Users, href: "#" },
    { title: "Proposal", icon: FileText, href: "#" },
    { title: "Kickoff", icon: Zap, href: "#" },
    { title: "Scholarships", icon: Award, href: "#" },
    { title: "Resources", icon: Globe, href: "#" },
  ];

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tighter">QUICK LINKS</h2>
            <p className="text-white/50 max-w-md">Everything you need to participate in this year's challenge.</p>
          </div>
          <button className="text-brand-secondary flex items-center gap-2 font-semibold hover:gap-3 transition-all">
            View All Resources <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="glass p-6 rounded-2xl flex flex-col gap-4 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                <link.icon className="w-6 h-6 text-white group-hover:text-brand-primary transition-colors" />
              </div>
              <span className="font-display font-semibold text-lg">{link.title}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden glass relative group">
          <img 
            src="https://picsum.photos/seed/computing/800/800" 
            alt="Computational Science" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="text-2xl font-bold mb-2">Computational Science</div>
            <p className="text-white/60 text-sm">Empowering the next generation of innovators through high-performance computing.</p>
          </div>
        </div>
        <div className="absolute -bottom-6 -right-6 w-48 h-48 glass rounded-2xl p-6 hidden md:block">
          <div className="text-brand-primary font-bold text-4xl mb-2">36th</div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/40">Annual Challenge</div>
        </div>
      </div>
      
      <div>
        <h2 className="text-4xl font-bold mb-8 tracking-tighter">IMPACTING THE FUTURE</h2>
        <div className="space-y-6 text-white/60 leading-relaxed">
          <p>
            The Supercomputing Challenge is an exciting program that offers a truly unique experience 
            to students in our state. The opportunity to work on the most powerful computers in the 
            world is currently available to only a very few students in the entire United States.
          </p>
          <p>
            In New Mexico, it is just one of the benefits of living in the “Land of Enchantment.” 
            We are dedicated to helping produce the high-tech workforce of the future by having 
            students tackle the problems of today and tomorrow.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Diverse Community</h4>
              <p className="text-xs text-white/40">Attracting students from across the spectrum including minorities and women.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-brand-secondary" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Scholarships</h4>
              <p className="text-xs text-white/40">Rewarding excellence with significant college scholarships and awards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Sponsors = () => {
  const partners = [
    "Los Alamos National Laboratory",
    "Triad National Security, LLC",
    "Sandia National Laboratories",
    "Microsoft",
    "PNM",
    "Westwind",
    "Holmans",
    "Simtable"
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16 tracking-tighter">OUR PARTNERS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50">
          {partners.map((partner, i) => (
            <div key={i} className="text-lg font-display font-bold text-white/80 hover:text-white transition-colors cursor-default">
              {partner}
            </div>
          ))}
        </div>
        <div className="mt-20">
          <button className="btn-secondary mx-auto">
            Become a Sponsor <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="font-display font-bold text-lg tracking-tighter">SUPERCOMPUTING CHALLENGE</span>
        </div>
        <p className="text-white/40 max-w-sm mb-8">
          Preparing the next generation of high-tech workforce through computational science and real-world problem solving.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
            <Globe className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Contact</h4>
        <ul className="space-y-4 text-sm text-white/60">
          <li className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-brand-primary" />
            (505) 412-2558
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-brand-primary mt-1" />
            P.O. Box 91824<br />Albuquerque, NM 87199
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-brand-primary" />
            consult@supercomputingchallenge.org
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">Quick Links</h4>
        <ul className="space-y-4 text-sm text-white/60">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Registration</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Sponsorship</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Archives</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-white/20">
      &copy; {new Date().getFullYear()} Supercomputing Challenge. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <QuickLinks />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
