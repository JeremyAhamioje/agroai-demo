import { Link } from 'react-router-dom'
import {
  ArrowRight, Upload, Cpu, FileCheck, Zap, Shield, BarChart3,
  Sprout, FlaskConical, Tractor, Star, ChevronDown, ChevronUp,
  Leaf, Check, Globe, Activity, AlertTriangle
} from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Amara Osei',
    role: 'Smallholder Farmer, Ghana',
    avatar: 'AO',
    text: 'PlantAid helped me detect early blight on my tomatoes before it spread. Saved nearly 70% of my harvest this season.',
    rating: 5,
  },
  {
    name: 'Dr. Lena Mwangi',
    role: 'Agricultural Researcher, Kenya',
    avatar: 'LM',
    text: 'The diagnostic accuracy and speed are remarkable. We now integrate PlantAid into our field research workflow for rapid plant screening.',
    rating: 5,
  },
  {
    name: 'Raj Patel',
    role: 'Hydroponic Farm Owner, India',
    avatar: 'RP',
    text: "Running a hydroponic facility, plant health is everything. PlantAid's real-time monitoring gives us confidence every single day.",
    rating: 5,
  },
  {
    name: 'Sofia Almeida',
    role: 'Agronomist, Brazil',
    avatar: 'SA',
    text: 'I recommend PlantAid to all my clients. The interface is intuitive and the recommendations are actionable and accurate.',
    rating: 4,
  },
]

const faqs = [
  {
    q: 'What types of plants can PlantAid detect diseases in?',
    a: 'PlantAid currently supports over 40 plant species including major crops like tomatoes, maize, lettuce, wheat, and more. Our database is continuously expanding through community contributions and research partnerships.'
  },
  {
    q: 'How accurate is the disease detection?',
    a: 'Our AI model achieves 91–97% accuracy across tested plant species and disease types. Accuracy may vary depending on image quality and lighting conditions. We recommend uploading clear, well-lit photographs for best results.'
  },
  {
    q: 'Is my data secure and private?',
    a: 'Yes. All uploaded images are processed in-memory and never stored on our servers without explicit consent. We are fully GDPR compliant and take user privacy seriously.'
  },
  {
    q: 'Can PlantAid be used offline?',
    a: 'A lightweight offline mode is available for the mobile app. However, for the full AI diagnostics suite, an internet connection is required to process images through our cloud infrastructure.'
  },
  {
    q: 'Do I need any special equipment to use PlantAid?',
    a: 'No special equipment is needed. A standard smartphone camera or any digital camera is sufficient. Simply take a clear photo of the plant leaf and upload it directly through the app or web interface.'
  },
]

const features = [
  { icon: Zap, title: 'Real-Time Diagnosis', desc: 'Get instant disease detection results in under 3 seconds, powered by our optimized AI inference pipeline.' },
  { icon: Shield, title: 'High Confidence Scoring', desc: 'Every diagnosis includes a confidence score so you know exactly how certain the AI is about its findings.' },
  { icon: BarChart3, title: 'Crop Health Trends', desc: 'Track plant health over time with visual analytics. Spot patterns before they become problems.' },
  { icon: Globe, title: '40+ Plant Species', desc: 'Our model covers major crops, horticultural plants, and ornamentals — expanding constantly.' },
  { icon: Activity, title: 'Treatment Recommendations', desc: 'Alongside every diagnosis, receive evidence-based treatment and prevention guidelines.' },
  { icon: Leaf, title: 'Eco-Friendly Insights', desc: 'Reduce pesticide use with targeted interventions. PlantAid encourages sustainable farming practices.' },
]

const useCases = [
  {
    icon: Tractor,
    tag: 'Agriculture',
    title: 'Smallholder & Commercial Farmers',
    desc: 'Protect your yields from crop diseases early. PlantAid acts as an always-on field scout — monitoring plant health at scale without additional labor costs.',
    points: ['Early disease alerts', 'Yield loss prevention', 'Field-level reporting'],
  },
  {
    icon: Sprout,
    tag: 'Hydroponics',
    title: 'Hydroponic & Indoor Growers',
    desc: 'In controlled environments, a single diseased plant can compromise an entire system. PlantAid enables rapid identification before spread.',
    points: ['System-wide health tracking', 'Nutrient deficiency detection', 'Automated daily checks'],
  },
  {
    icon: FlaskConical,
    tag: 'Research',
    title: 'Agricultural Research Institutions',
    desc: 'Accelerate research with AI-assisted plant phenotyping and disease classification. Integrate our API directly into your data pipelines.',
    points: ['Batch image processing', 'API access', 'Exportable datasets'],
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="glass-card rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <span className="font-semibold text-sm sm:text-base pr-4" style={{ color: 'var(--text-primary)' }}>{q}</span>
        <span className="shrink-0" style={{ color: '#2d9e2d' }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </div>
      {open && (
        <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', borderTop: '1px solid var(--border)' }}>
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function LandingPage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 bg-grid-pattern"
          style={{ backgroundSize: '32px 32px' }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #4ab84a, transparent)' }} />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #7dd07d, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-on-load">
            <span className="section-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf-500 animate-pulse" />
              Now in Beta — Free for Farmers
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-700 text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 animate-on-load delay-100">
            <span style={{ color: 'var(--text-primary)' }}>AI-Powered</span>
            <br />
            <span className="text-gradient">Plant Health</span>
            <br />
            <span style={{ color: 'var(--text-primary)' }}>Monitoring</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-on-load delay-200"
            style={{ color: 'var(--text-secondary)' }}>
            Upload a photo of any plant. Our computer vision model identifies disease, stress markers,
            and nutrient deficiencies — in real time, with expert-level accuracy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-load delay-300">
            <Link to="/analyze" className="btn-primary text-base px-8 py-4">
              Try It Now <ArrowRight size={18} />
            </Link>
            <a href="#how-it-works" className="btn-outline text-base px-8 py-4">
              See How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-on-load delay-400">
            {[['92%', 'Avg. Accuracy'], ['40+', 'Plant Species'], ['3s', 'Avg. Diagnosis Time'], ['12k+', 'Active Growers']].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-display font-700 text-3xl text-gradient">{val}</div>
                <div className="text-xs mt-1 uppercase tracking-widest font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Hero mockup */}
          <div className="mt-20 animate-on-load delay-500">
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4 inline-block">Process</span>
            <h2 className="font-display font-700 text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Three steps to a <span className="text-gradient">diagnosis</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
              No specialist required. PlantAid puts expert-level plant diagnostics in your hands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #2d9e2d, transparent)' }} />

            {[
              { icon: Upload, step: '01', title: 'Upload Image', desc: 'Take a clear photo of your plant leaf and upload it directly from your phone or computer. Drag & drop supported.' },
              { icon: Cpu, step: '02', title: 'AI Analysis', desc: 'Our convolutional neural network scans for 100+ disease signatures, stress patterns, and deficiency markers.' },
              { icon: FileCheck, step: '03', title: 'Get Diagnosis', desc: 'Receive a confidence-scored diagnosis with expert recommendations for treatment, prevention, and follow-up care.' },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="glass-card rounded-3xl p-8 text-center relative">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(45,158,45,0.1)' }}>
                  <Icon size={28} style={{ color: '#2d9e2d' }} />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest" style={{ color: '#2d9e2d' }}>{step}</span>
                <h3 className="font-display font-600 text-xl mt-2 mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="py-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4 inline-block">Capabilities</span>
            <h2 className="font-display font-700 text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Everything you need to <span className="text-gradient">protect your crops</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-6 group hover:border-leaf-400/40 transition-all duration-200">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ background: 'rgba(45,158,45,0.1)' }}>
                  <Icon size={22} style={{ color: '#2d9e2d' }} />
                </div>
                <h3 className="font-display font-600 text-base mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section id="use-cases" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4 inline-block">Use Cases</span>
            <h2 className="font-display font-700 text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Built for <span className="text-gradient">every grower</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: 'var(--text-secondary)' }}>
              Whether you manage an acre or a thousand, PlantAid scales with your operation.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map(({ icon: Icon, tag, title, desc, points }) => (
              <div key={title} className="glass-card rounded-3xl p-8 flex flex-col">
                <span className="section-tag self-start mb-4">{tag}</span>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(45,158,45,0.1)' }}>
                  <Icon size={24} style={{ color: '#2d9e2d' }} />
                </div>
                <h3 className="font-display font-600 text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                <ul className="space-y-2">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <Check size={14} style={{ color: '#2d9e2d' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-tag mb-4 inline-block">Reviews</span>
            <h2 className="font-display font-700 text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Trusted by <span className="text-gradient">12,000+ growers</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map(({ name, role, avatar, text, rating }) => (
              <div key={name} className="glass-card rounded-2xl p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                  ))}
                  {rating < 5 && <Star size={14} style={{ color: 'var(--border)' }} />}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-5 italic" style={{ color: 'var(--text-secondary)' }}>
                  "{text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1f7d1f, #4ab84a)' }}>
                    {avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="py-24" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag mb-4 inline-block">FAQ</span>
            <h2 className="font-display font-700 text-4xl sm:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Common <span className="text-gradient">questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl px-8 py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-gradient opacity-50" />
            <div className="relative">
              <span className="section-tag mb-5 inline-block">Start Free</span>
              <h2 className="font-display font-700 text-4xl sm:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
                Protect your plants <span className="text-gradient">today</span>
              </h2>
              <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                No sign-up required. Upload a photo and get your first diagnosis in seconds — completely free.
              </p>
              <Link to="/analyze" className="btn-primary text-base px-10 py-4">
                Diagnose a Plant <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 border-t" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-leaf-500 flex items-center justify-center">
                  <Leaf size={14} className="text-white" />
                </div>
                <span className="font-display font-700 text-base" style={{ color: 'var(--text-primary)' }}>
                  Plant<span className="text-gradient">Aid</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                AI-powered plant health monitoring for modern agriculture.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'API Docs', 'Changelog'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
              { title: 'Support', links: ['Documentation', 'Community', 'Status', 'Contact'] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--text-primary)' }}>{title}</h4>
                <ul className="space-y-2">
                  {links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-xs hover:text-leaf-500 transition-colors" style={{ color: 'var(--text-secondary)' }}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border)' }}>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>© 2025 PlantAid Technologies. All rights reserved.</p>
            <div className="flex gap-4 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <a href="#" className="hover:text-leaf-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-leaf-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-leaf-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function HeroMockup() {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: 'rgba(45,158,45,0.2)' }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 mx-3">
            <div className="h-5 rounded-md px-3 flex items-center" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}>
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>plantaid.app/analyze</span>
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dz6kxumoo/image/upload/v1777752458/Valley_Heart_Romaine_Lettuce_Seeds_250_Garden_Seeds_d3vhko.jpg"
            alt="Plant image placeholder"
            className="w-full object-cover"
            style={{ maxHeight: '340px', objectPosition: 'center' }}
          />
          {/* Overlay result card */}
          <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-72">
            <div className="glass-card rounded-2xl p-4 shadow-xl" style={{ backdropFilter: 'blur(16px)', background: 'rgba(10,26,10,0.85)', border: '1px solid rgba(45,158,45,0.3)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-leaf-500 flex items-center justify-center">
                  <Leaf size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60">Detected Plant</p>
                  <p className="font-display font-600 text-white text-sm">Lettuce — Lactuca sativa</p>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-white/60">Confidence</span>
                  <span className="text-xs font-bold text-leaf-400">92%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div className="h-full rounded-full w-[92%]" style={{ background: 'linear-gradient(90deg, #1f7d1f, #4ab84a)' }} />
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(245,158,11,0.2)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.3)' }}>Phosphorus Deficiency</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(59,130,246,0.2)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)' }}>Dehydration Stress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
