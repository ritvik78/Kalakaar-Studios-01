import { formatCurrency, slugify } from './utils';

export type Category = {
  name: string;
  slug: string;
  description: string;
  featuredTalentIds: string[];
};

export type Talent = {
  id: string;
  name: string;
  slug: string;
  role: string;
  city: string;
  languages: string[];
  categorySlug: string;
  rating: number;
  priceFrom: number;
  image: string;
  bio: string;
  highlights: string[];
  availableFor: string[];
};

export type Article = {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  date: string;
  image: string;
  content: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company: string;
  image: string;
};

export type CaseStudy = {
  title: string;
  slug: string;
  metric: string;
  summary: string;
  challenge: string;
  outcome: string;
  image: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  caption: string;
};

const partnerLogos = ['Sony Music', 'Netflix', 'Spotify', 'Nike', 'Samsung', 'YouTube', 'Tata', 'Dior'];

const categorySeeds = [
  ['Actors', 'On-camera talent for branded films, product launches, and campaigns.'],
  ['Hosts', 'Event hosts and emcees who keep rooms warm and on schedule.'],
  ['Musicians', 'Live acts, studio artists, and crossover performers.'],
  ['DJs', 'Festival-ready selectors with premium event energy.'],
  ['Influencers', 'Performance creators with audience-building credibility.'],
  ['Voice Artists', 'Broadcast-grade voices for films, ads, and digital experiences.'],
  ['Dancers', 'Stage, screen, and spectacle movement artists.'],
  ['Models', 'Fashion and commerce talent with editorial polish.'],
  ['Comedians', 'Sharp, clean, and high-signal humor for live and digital moments.'],
  ['Athletes', 'Brand-safe sports talent for launches and partnerships.'],
  ['Chefs', 'Culinary personalities who perform under pressure.'],
  ['Speakers', 'Founders, operators, and keynote voices.'],
  ['Presenters', 'Studio hosts and live presentation specialists.'],
  ['Creators', 'Short-form and social-first storytellers.'],
  ['Fashion', 'Style-forward talent for lookbooks and events.'],
  ['Luxury', 'Premium faces for high-end hospitality and retail.'],
  ['Kids', 'Family-safe, casting-ready young talent.'],
  ['Regional', 'Local-language talent with city-specific reach.'],
  ['International', 'Global faces and multilingual talent.'],
  ['Lifestyle', 'Travel, wellness, and home storytelling specialists.'],
  ['Technical', 'Motion capture, live show, and hybrid production specialists.'],
] as const;

const talentSeeds = [
  ['Aarav Malhotra', 'Actor', 'Mumbai', 'Hindi, English', 18500, 'Cinema and brand films with a premium, calm screen presence.', ['Brand films', 'OTT', 'Luxury retail']],
  ['Nia Sen', 'Host', 'Delhi', 'Hindi, English', 12000, 'Fast on the mic, polished on stage, and strong with live resets.', ['Conferences', 'Awards', 'Launches']],
  ['Eshan Rao', 'Musician', 'Bengaluru', 'English, Kannada', 22000, 'Singer-guitarist with a cinematic set and strong crowd control.', ['Private events', 'Concerts', 'Brand activations']],
  ['Ira Kapoor', 'DJ', 'Goa', 'English', 25000, 'High-energy club and destination DJ with a luxe lounge edit.', ['Nightlife', 'Resorts', 'Fashion shows']],
  ['Zoya Mirza', 'Influencer', 'Dubai', 'English, Hindi', 30000, 'Culture and beauty creator with premium short-form storytelling.', ['Social campaigns', 'Travel', 'Beauty']],
  ['Kabir Sethi', 'Voice Artist', 'Pune', 'Hindi, English', 9000, 'Warm, authoritative voice for explainer and brand work.', ['Commercials', 'IVR', 'Documentary']],
  ['Anaya Bose', 'Dancer', 'Kolkata', 'Hindi, Bengali, English', 16000, 'Precision contemporary and commercial choreography lead.', ['Stage shows', 'Music videos', 'Product reveals']],
  ['Maya Fernandes', 'Model', 'Paris', 'English, French', 18000, 'Editorial polish with luxury fashion and beauty range.', ['Lookbooks', 'Runways', 'Campaigns']],
  ['Rishi Varma', 'Comedian', 'Bengaluru', 'Hindi, English', 14000, 'Clean observational sets that land with mixed-age rooms.', ['Corporate', 'Ticketed shows', 'Digital specials']],
  ['Sana Qureshi', 'Athlete', 'Doha', 'English, Arabic', 20000, 'Brand ambassador with elite sports credibility.', ['Endorsements', 'Talks', 'Appearances']],
  ['Dev Patel', 'Chef', 'London', 'English', 17000, 'Media-friendly chef with performance plating and live demos.', ['Dining events', 'TV', 'Brand collabs']],
  ['Meera Iyer', 'Speaker', 'Singapore', 'English, Tamil', 26000, 'Leadership keynote speaker with crisp, actionable delivery.', ['Summits', 'Leadership', 'Panels']],
  ['Arjun Khanna', 'Presenter', 'Mumbai', 'Hindi, English', 15000, 'Studio presenter with high polish and a reliable broadcast cadence.', ['Web shows', 'Live events', 'Brand films']],
  ['Tara Nadar', 'Creator', 'Chennai', 'English, Tamil', 13500, 'Short-form lifestyle creator with strong conversion storytelling.', ['Reels', 'UGC', 'Launch campaigns']],
  ['Laila Merchant', 'Fashion', 'Milan', 'English, Italian', 17500, 'Runway-ready fashion face with sharp editorial energy.', ['Fashion week', 'Campaigns', 'Lookbooks']],
  ['Owen Sterling', 'Luxury', 'Monaco', 'English, French', 35000, 'Luxury hospitality and watch-category campaign talent.', ['Luxury retail', 'Hospitality', 'Editorial']],
  ['Asha Nair', 'Kids', 'Hyderabad', 'English', 8000, 'Family-safe child talent with expressive camera comfort.', ['TVCs', 'Print', 'Digital']],
  ['Rohan Das', 'Regional', 'Kolkata', 'Bengali, Hindi, English', 11000, 'Regional-language host for city-led campaigns.', ['Regional TV', 'Events', 'Brand films']],
  ['Noura Haddad', 'International', 'London', 'English, Arabic, French', 29000, 'Multilingual talent for global brand rollouts.', ['Global campaigns', 'Events', 'Content']],
  ['Kiara Solomon', 'Lifestyle', 'Cape Town', 'English', 15500, 'Wellness and home storytelling with aspirational framing.', ['Travel', 'Wellness', 'Home']],
  ['Mikhail Voss', 'Technical', 'Berlin', 'English, German', 24000, 'Motion capture and live-show technical performance specialist.', ['Experiential', 'Stage tech', 'Hybrid productions']],
  ['Ina Rao', 'Actor', 'Chennai', 'Hindi, Tamil, English', 16500, 'Quiet intensity and premium brand film presence.', ['OTT', 'Ads', 'Cinema']],
  ['Farhan Ali', 'Host', 'Karachi', 'Urdu, English', 12500, 'Quick-witted stage host with event management discipline.', ['Awards', 'Conferences', 'Festivals']],
  ['Sophie Laurent', 'Musician', 'Lyon', 'French, English', 21000, 'Live vocal and piano sets with an elegant lounge feel.', ['Hotels', 'Galas', 'Weddings']],
  ['Yash Mehra', 'DJ', 'Mumbai', 'English, Hindi', 19500, 'Commercial and festival DJ bridging mainstream and premium crowds.', ['Brand parties', 'Beaches', 'Runways']],
  ['Rhea Kapoor', 'Influencer', 'Bengaluru', 'English', 31000, 'Tech and lifestyle creator with clean, conversion-oriented content.', ['Tech launches', 'UGC', 'Paid social']],
  ['Ayman Khan', 'Voice Artist', 'Dubai', 'English, Arabic, Hindi', 9800, 'Neutral, clear multilingual voice suitable for global campaigns.', ['Ads', 'E-learning', 'Corporate']],
  ['Pia Chakraborty', 'Dancer', 'Mumbai', 'Hindi, English, Bengali', 14800, 'Commercial dance specialist with strong rehearsal reliability.', ['Music videos', 'Tours', 'Launches']],
  ['Elena Rossi', 'Model', 'Milan', 'English, Italian', 19800, 'Luxury beauty and apparel model with sophisticated versatility.', ['Editorial', 'E-commerce', 'Luxury']],
  ['Vikram Jain', 'Comedian', 'Delhi', 'Hindi, English', 14200, 'Smart, safe, high-hit-rate material for corporate audiences.', ['Corporate', 'Campus', 'Streaming']],
  ['Noor Hassan', 'Athlete', 'Doha', 'English, Arabic', 22500, 'Track and field personality with sponsorship-ready discipline.', ['Brand ambassadorships', 'Speaking', 'Appearances']],
  ['Chef Adriana Vale', 'Chef', 'Barcelona', 'English, Spanish', 19200, 'High-impact live culinary demos and content shoots.', ['Restaurants', 'TV', 'Brand events']],
  ['Dr. Leena Suri', 'Speaker', 'New York', 'English', 34000, 'Strategy and innovation keynote speaker with boardroom authority.', ['Summits', 'Internal events', 'Panels']],
  ['Karan Singh', 'Presenter', 'Pune', 'Hindi, English', 13000, 'Television-style presenter with excellent teleprompter control.', ['Launches', 'Shows', 'Demos']],
  ['Mira Venkatesh', 'Creator', 'Singapore', 'English, Tamil', 14500, 'Lifestyle and productivity creator with polished thumbnails and hooks.', ['Reels', 'Series', 'Paid social']],
  ['Jia Wen', 'Fashion', 'Seoul', 'English, Korean', 18400, 'Editorial fashion and beauty talent for premium brands.', ['Fashion', 'Beauty', 'Lookbooks']],
  ['Sofia Al-Hassan', 'Luxury', 'Riyadh', 'Arabic, English', 37000, 'Luxury brand face with understated, elegant framing.', ['Jewelry', 'Automotive', 'Hospitality']],
  ['Anika Roy', 'Kids', 'Mumbai', 'Hindi, English', 7600, 'Cheerful, reliable child talent for family-safe shoots.', ['TVCs', 'Digital', 'Print']],
  ['Harshad Bhat', 'Regional', 'Bengaluru', 'Kannada, English', 10800, 'Regional host with local audience fluency and quick timing.', ['Regional campaigns', 'Events', 'Digital']],
  ['Layla Martin', 'International', 'Paris', 'English, French', 31500, 'Global brand talent with editorial poise and camera confidence.', ['Luxury', 'Fashion', 'Beauty']],
  ['Ayesha Thomas', 'Lifestyle', 'Sydney', 'English', 15200, 'Travel and home talent with bright, natural storytelling.', ['Travel', 'Home', 'Wellness']],
  ['Nikolai Petrov', 'Technical', 'Prague', 'English, Russian', 24800, 'Technical performance and immersive show specialist.', ['Events', 'Stage', 'Experiential']],
  ['Shaan Mukherjee', 'Actor', 'Hyderabad', 'Hindi, Telugu, English', 17200, 'High-trust commercial actor with warm family appeal.', ['Brand films', 'Cinema', 'OTT']],
  ['Priya Menon', 'Host', 'Kochi', 'Malayalam, English', 11800, 'Graceful live host for coastal and cultural programs.', ['Festivals', 'Talks', 'Awards']],
  ['Arianne Cruz', 'Musician', 'Manila', 'English, Tagalog', 20500, 'Pop vocalist with intimate live-set versatility.', ['Touring', 'Brand events', 'Content']],
  ['Zain Rehman', 'DJ', 'Lahore', 'Urdu, English', 18200, 'Groove-first DJ with high polish and wedding expertise.', ['Private events', 'Clubs', 'Destination']],
  ['Palak Jain', 'Influencer', 'Delhi', 'Hindi, English', 26500, 'Beauty and fashion creator with premium storyboarding skills.', ['Beauty', 'Fashion', 'UGC']],
  ['Rashid Noor', 'Voice Artist', 'Dubai', 'English, Arabic', 10200, 'Deep, premium voice for luxury and corporate work.', ['Ads', 'Brand films', 'Narration']],
  ['Sanya Prakash', 'Dancer', 'Mumbai', 'Hindi, English', 15100, 'Commercial dancer with bold, camera-friendly movement.', ['Music videos', 'Events', 'Shows']],
  ['Helena Costa', 'Model', 'Lisbon', 'English, Portuguese', 19600, 'Fashion and beauty model with clean retail usability.', ['Campaigns', 'Runways', 'Catalogues']],
  ['Aditya Bose', 'Comedian', 'Bengaluru', 'Hindi, English', 13800, 'Dry, observational humor tailored for corporate crowds.', ['Corporate', 'Digital', 'Live']],
  ['Riya Azad', 'Athlete', 'Mumbai', 'Hindi, English', 21800, 'High-performance athlete and brand ambassador.', ['Endorsements', 'Talks', 'Appearances']],
];

const articleSeeds = [
  ['How to Cast Premium Talent Without Slowing the Launch Calendar', 'Casting', '6 min read', 'A practical playbook for premium launches that need talent, approvals, and speed in one motion.', '2026-05-26'],
  ['Why Glass-Morphism Works for Booking Journeys', 'Design', '5 min read', 'How transparency, depth, and motion reduce perceived friction in a high-trust booking flow.', '2026-05-19'],
  ['Building a Brand-Safe Talent Roster for Global Campaigns', 'Strategy', '7 min read', 'A framework for multilingual, cross-market rosters that stay flexible without losing control.', '2026-05-09'],
  ['From Brief to Bounce: Making the Booking Experience Feel Effortless', 'Operations', '4 min read', 'What modern booking systems can borrow from premium hospitality UX.', '2026-04-30'],
  ['How to Evaluate Influencer Talent Beyond Vanity Metrics', 'Creators', '6 min read', 'A more reliable way to assess creator fit, conversion, and long-term value.', '2026-04-18'],
  ['Event Hosts That Hold the Room: What Great Emceeing Actually Looks Like', 'Hosting', '5 min read', 'The pacing, tone, and contingency planning that separates great hosts from average ones.', '2026-04-08'],
  ['Casting for Luxury Brands: Subtlety Beats Noise', 'Luxury', '5 min read', 'Why restraint, symmetry, and tactile presentation outperform broad-lens hype.', '2026-03-29'],
  ['The New Rules of Talent Shortlists for Hybrid Events', 'Events', '6 min read', 'How to build a shortlist that works for both the room and the livestream.', '2026-03-21'],
  ['Why Booking Managers Need Better Visibility Into Availability', 'Operations', '4 min read', 'A look at scheduling transparency, response time, and conversion math.', '2026-03-12'],
  ['How to Make Testimonials Do Real Conversion Work', 'Trust', '5 min read', 'The difference between decorative quotes and proof that closes the loop.', '2026-03-02'],
  ['The Anatomy of a High-Performing Talent Page', 'Design', '7 min read', 'What users need to book with confidence in less than thirty seconds.', '2026-02-24'],
  ['What Premium Clients Expect From a Booking Partner', 'Sales', '6 min read', 'Clarity, speed, and reliability are now table stakes for agency trust.', '2026-02-14'],
  ['From Search to Signature: Turning Browsers Into Briefs', 'Marketing', '5 min read', 'SEO, landing pages, and on-site proof can materially improve inquiry quality.', '2026-02-04'],
  ['The Role of Motion in High-Trust Digital Brands', 'Motion', '4 min read', 'Subtle animation can guide the eye without turning into distraction.', '2026-01-26'],
  ['How to Price Talent Without Confusing the Client', 'Pricing', '6 min read', 'A transparent conversation about rate cards, usage, and scope control.', '2026-01-18'],
  ['Why Regional Talent Matters in National Campaigns', 'Casting', '5 min read', 'Local resonance, language fluency, and cultural context increase campaign realism.', '2026-01-08'],
  ['Short-Form Video Needs Better Briefs, Not Just Better Creators', 'Creators', '5 min read', 'A useful breakdown of assets, hooks, and guardrails for high-volume content.', '2025-12-27'],
  ['How to Build a Talent Ops Workflow That Scales', 'Operations', '6 min read', 'A view on templates, approvals, and response handling for busy teams.', '2025-12-17'],
  ['When to Choose a Specialist Over a Celebrity Face', 'Strategy', '5 min read', 'The decision tree for campaign fit, conversion, and authenticity.', '2025-12-08'],
  ['What Makes a Creative Roster Feel Premium', 'Brand', '4 min read', 'The visual, editorial, and operational details that change how a roster is perceived.', '2025-11-29'],
];

const testimonialSeeds: Array<[string, string, string, string]> = [
  ['They responded like a real production partner, not a directory. The shortlist was tight, the approvals were clean, and the launch stayed on time.', 'Maya Deshpande', 'VP Brand', 'Aster Retail'],
  ['The booking flow felt premium and controlled. We moved from brief to confirmation faster than any agency we have used.', 'Jonas Reed', 'Head of Events', 'Northline Hotels'],
  ['The talent quality was consistently high, but what stood out was the clarity around usage, logistics, and follow-through.', 'Priya Nand', 'Campaign Lead', 'Volt Beauty'],
  ['We needed hosts who could handle a hybrid summit without losing the room. The recommendation set was strong and easy to work with.', 'Amit Khurana', 'Producer', 'Summit House'],
  ['The roster felt curated, not crowded. That made the decision path for our stakeholders much easier.', 'Elise Hart', 'Marketing Director', 'Monarch Living'],
  ['Excellent response time, clean communication, and talent that arrived fully briefed. That combination is rare.', 'Faisal Mir', 'Senior Producer', 'Blue Frame Studios'],
];

const caseStudySeeds: Array<[string, string, string, string, string]> = [
  ['Luxury Launch in 10 Days', 'A beauty and accessories launch needed three talent types and a live event host within a compressed approval window.', '$1.8M launch revenue attributed', 'The team used a short, curated roster with clear rights and availability checks.', 'The launch stayed on schedule and the client renewed for a regional rollout.'],
  ['Hybrid Summit, Zero Friction', 'A global summit needed a presenter, a keynote speaker, and an audience-friendly host across two time zones.', '93% attendee satisfaction', 'Operations used one booking workflow for all three talent streams and centralized confirmations.', 'The event ran without a single talent-side delay.'],
  ['Creator-Led Commerce Push', 'A product release needed short-form creators who could deliver conversion-friendly content at scale.', '3.4x CTR lift', 'Content briefs were tightened and talent was selected for audience trust, not just reach.', 'The campaign beat the benchmark by a wide margin.'],
];

const gallerySeeds = [
  ['Backstage polish', 'Live event', 'A glassy setup with silver lighting and high-contrast stage styling.'],
  ['Studio calm', 'Campaign shoot', 'A modern talent capture with clean framing and reflective surfaces.'],
  ['Launch room energy', 'Brand event', 'A red-and-gold reveal scene with premium audience flow.'],
  ['Host in motion', 'Conference', 'A live presenter working with a confident, editorial stage look.'],
  ['Creator set', 'Digital campaign', 'A social-first scene optimized for premium content capture.'],
  ['Luxury portrait', 'Lookbook', 'High-end portraiture with soft highlights and structured shadow.'],
  ['Music lighting', 'Performance', 'A bright, fizz-like atmosphere with stage glow and motion blur.'],
  ['Panel discussion', 'Summit', 'An executive discussion framed in glass and brushed metal tones.'],
];

function imageFor(seed: number) {
  const urls = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
  ];

  return `${urls[seed % urls.length]}&sig=${seed}`;
}

export const categories: Category[] = categorySeeds.map(([name, description], index) => ({
  name,
  slug: slugify(name),
  description,
  featuredTalentIds: [
    `talent-${(index * 2) % talentSeeds.length}`,
    `talent-${(index * 2 + 1) % talentSeeds.length}`,
    `talent-${(index * 2 + 6) % talentSeeds.length}`,
  ],
}));

export const talents: Talent[] = talentSeeds.map((seed, index) => {
  const [name, role, city, languages, priceFrom, bio, highlights] = seed;
  const categorySlug = categories[index % categories.length].slug;

  return {
    id: `talent-${index}`,
    name,
    slug: slugify(name),
    role,
    city,
    languages: languages.split(', ').map((entry) => entry.trim()),
    categorySlug,
    rating: Number((4.7 + ((index % 4) * 0.1)).toFixed(1)),
    priceFrom,
    image: imageFor(index),
    bio,
    highlights,
    availableFor: ['Brand films', 'Events', 'Digital campaigns', 'Luxury launches'].slice(0, 3 + (index % 2)),
  };
});

export const articles: Article[] = articleSeeds.map(([title, category, readTime, excerpt, date], index) => ({
  title,
  slug: slugify(title),
  category,
  readTime,
  excerpt,
  date,
  image: imageFor(index + 21),
  content: [
    'Great booking systems feel decisive, not crowded. The best experience narrows the choice set, shows concrete proof, and moves the user toward a single next action.',
    'For premium brands, presentation matters as much as logistics. Metallic surfaces, clean spacing, and calm hierarchy signal that the process is under control.',
    'A high-conviction talent page should answer fit, credibility, availability, and scope in one pass. Anything else belongs in the support layer, not the first screen.',
  ],
}));

export const testimonials: Testimonial[] = testimonialSeeds.map(([quote, author, title, company], index) => ({
  quote,
  author,
  title,
  company,
  image: imageFor(index + 41),
}));

export const caseStudies: CaseStudy[] = caseStudySeeds.map(([title, challenge, metric, summary, outcome], index) => ({
  title,
  slug: slugify(title),
  metric,
  summary,
  challenge,
  outcome,
  image: imageFor(index + 51),
}));

export const galleryItems: GalleryItem[] = gallerySeeds.map(([title, category, caption], index) => ({
  title,
  category,
  caption,
  image: imageFor(index + 61),
}));

export const partners = partnerLogos.map((name, index) => ({
  name,
  accent: index % 2 === 0 ? 'red' : 'yellow',
}));

export const stats = [
  { label: 'Active talent', value: '250+', detail: 'Curated cross-category roster' },
  { label: 'Cities covered', value: '32', detail: 'Domestic and international reach' },
  { label: 'Average response', value: '< 2h', detail: 'Fast shortlist turnaround' },
  { label: 'Repeat clients', value: '78%', detail: 'Retained for multi-campaign work' },
];

export const processSteps = [
  { title: 'Brief the need', detail: 'Tell us the event, creative goal, audience, and timing window.' },
  { title: 'Shortlist talent', detail: 'We build a focused lineup with price, usage, and availability clarity.' },
  { title: 'Confirm logistics', detail: 'We lock travel, run-of-show, tech, and on-site needs.' },
  { title: 'Deliver and review', detail: 'You get a polished experience and a simple post-event follow-up.' },
];

export const pricingPlans = [
  { name: 'Starter', price: formatCurrency(5000), description: 'For focused launches and one-off bookings.', features: ['1 talent shortlist', 'Usage guidance', '48-hour support'] },
  { name: 'Studio', price: formatCurrency(12000), description: 'For recurring campaigns and multi-talent coordination.', features: ['Multi-category search', 'Booking support', 'Priority turnaround'] },
  { name: 'Signature', price: formatCurrency(25000), description: 'For high-touch launches, tours, and international campaigns.', features: ['Dedicated manager', 'Logistics support', 'White-glove scheduling'] },
];

export const faqItems = [
  { question: 'How quickly can you share a shortlist?', answer: 'Most standard requests receive a focused shortlist within one business day, and urgent premium briefs can be handled faster when the scope is clear.' },
  { question: 'Can you manage usage and approvals?', answer: 'Yes. We help structure usage, rights, approvals, and deliverable scope so the client and talent stay aligned.' },
  { question: 'Do you support international bookings?', answer: 'Yes. The roster includes multilingual and international talent, and the process supports travel and time-zone coordination.' },
  { question: 'Can the booking wizard send real requests?', answer: 'Yes. The booking form posts to a server route that validates the request and returns a success state.' },
  { question: 'Are the pages optimized for mobile?', answer: 'Yes. Motion effects are reduced on smaller screens, touch targets are large, and layouts collapse cleanly across breakpoints.' },
];

export const newsletterBenefits = [
  'Curated talent spotlights',
  'Pricing and availability notes',
  'Launch and event planning insights',
];

export const contactReasons = [
  'Book a talent shortlist',
  'Discuss a launch or event',
  'Ask for pricing guidance',
  'Plan a multi-city campaign',
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getTalent(slug: string) {
  return talents.find((talent) => talent.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
