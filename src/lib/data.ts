import { Service, Review, ServiceArea, TeamMember, BlogPost, JobPosting } from './types';

export const BUSINESS_INFO = {
  name: 'Poinsett Heating & Air Inc.',
  phone: '(864) 551-1125',
  phoneRaw: '+18645511125',
  email: 'info@poinsettheatingandair.com',
  address: {
    street: '901 W Poinsett St',
    city: 'Greer',
    state: 'SC',
    zip: '29650',
    full: '901 W Poinsett St, Greer, SC 29650'
  },
  hours: 'Open 24 Hours — 7 Days a Week',
  rating: 4.9,
  reviewCount: 127,
  serviceArea: 'Greer, Greenville, Taylors, Simpsonville, Travelers Rest, and nearby Upstate SC communities',
  yearsExperience: '40+ years combined',
  tagline: 'Fast. Fair. 24/7 Service.',
  about: 'Poinsett Heating & Air is a locally owned and trusted HVAC contractor based in Greer, South Carolina. We\'ve proudly served the Greenville and Upstate SC area for years, providing fast, honest, and reliable service for residential and light commercial customers. Our mission is simple — keep our neighbors comfortable year-round with expert workmanship and fair pricing.',
  lat: 34.937,
  lng: -82.219
};

export const services: Service[] = [
  {
    id: '1',
    slug: 'ac-installation-repair',
    title: 'Central A/C Installation & Repair',
    subtitle: 'Expert Air Conditioning Services in Greer, SC',
    description: 'Professional central air conditioning installation, repair, and replacement services. Our certified technicians ensure your home stays cool and comfortable year-round with efficient, reliable AC systems.',
    features: [
      'New AC system installation',
      'Emergency AC repair',
      'Refrigerant leak detection',
      'Compressor replacement',
      'Ductwork inspection',
      'Energy-efficient upgrades'
    ],
    benefits: [
      'Same-day emergency service',
      'Certified HVAC technicians',
      'Upfront pricing guarantee',
      '100% satisfaction guarantee',
      'Financing options available',
      'Extended warranty coverage'
    ],
    faq: [
      {
        question: 'How often should I service my AC unit?',
        answer: 'We recommend servicing your AC unit at least once a year, ideally before the cooling season begins.'
      },
      {
        question: 'What are signs my AC needs repair?',
        answer: 'Common signs include poor cooling, strange noises, water leaks, high energy bills, and frequent cycling.'
      },
      {
        question: 'Do you offer same-day AC repair?',
        answer: 'Yes, we provide 24/7 emergency AC repair services with same-day availability in most cases.'
      }
    ],
    icon: 'Snowflake',
    imageUrl: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg',
    priceRange: '$$',
    duration: '2-4 hours',
    metaTitle: 'AC Installation & Repair Greer SC | Poinsett Heating & Air',
    metaDescription: '24/7 air conditioning installation and repair in Greer, SC. Expert AC service, same-day repairs, and affordable pricing. Call (864) 551-1125 now!'
  },
  {
    id: '2',
    slug: 'cooling-systems-maintenance',
    title: 'Cooling Systems Maintenance',
    subtitle: 'Keep Your AC Running Efficiently',
    description: 'Regular maintenance is the key to extending the life of your cooling system and preventing costly breakdowns. Our comprehensive maintenance plans keep your AC running at peak performance.',
    features: [
      'Complete system inspection',
      'Refrigerant level check',
      'Coil cleaning',
      'Filter replacement',
      'Thermostat calibration',
      'Electrical connection testing'
    ],
    benefits: [
      'Lower energy bills',
      'Fewer breakdowns',
      'Extended equipment life',
      'Priority scheduling',
      'Discounted repair rates',
      'Peace of mind protection'
    ],
    faq: [
      {
        question: 'What is included in AC maintenance?',
        answer: 'Our maintenance includes full system inspection, cleaning, filter replacement, refrigerant check, and performance testing.'
      },
      {
        question: 'How much can I save with regular maintenance?',
        answer: 'Regular maintenance can reduce energy costs by 15-20% and prevent 95% of potential breakdowns.'
      }
    ],
    icon: 'Settings',
    imageUrl: 'https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg',
    priceRange: '$',
    duration: '1-2 hours',
    metaTitle: 'AC Maintenance Greer SC | Preventative Cooling Service',
    metaDescription: 'Professional AC maintenance in Greer, SC. Extend system life, lower bills, and prevent breakdowns. Affordable maintenance plans available.'
  },
  {
    id: '3',
    slug: 'heating-furnace-service',
    title: 'Heating & Furnace Service & Installation',
    subtitle: 'Stay Warm All Winter Long',
    description: 'Expert heating and furnace installation, repair, and maintenance services. From gas furnaces to heat pumps, we keep your home warm and comfortable during the coldest months.',
    features: [
      'Furnace installation',
      'Heating system repair',
      'Heat pump service',
      'Thermostat upgrades',
      'Gas line inspection',
      'Ductwork sealing'
    ],
    benefits: [
      '24/7 emergency heating repair',
      'Energy-efficient solutions',
      'Licensed and insured',
      'No hidden fees',
      'Flexible financing',
      'Satisfaction guaranteed'
    ],
    faq: [
      {
        question: 'How long does a furnace last?',
        answer: 'With proper maintenance, a furnace typically lasts 15-20 years. We can assess your current system and recommend the best solution.'
      },
      {
        question: 'When should I replace my furnace?',
        answer: 'Consider replacement if your furnace is over 15 years old, requires frequent repairs, or your energy bills are increasing significantly.'
      }
    ],
    icon: 'Flame',
    imageUrl: 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg',
    priceRange: '$$',
    duration: '3-5 hours',
    metaTitle: 'Furnace Installation & Repair Greer SC | Heating Service',
    metaDescription: 'Expert furnace installation and heating repair in Greer, SC. Emergency service available 24/7. Stay warm this winter with Poinsett Heating & Air.'
  },
  {
    id: '4',
    slug: 'preventative-maintenance-plans',
    title: 'Preventative Maintenance Plans',
    subtitle: 'Protect Your Investment',
    description: 'Comprehensive HVAC maintenance plans designed to keep your heating and cooling systems running efficiently year-round. Save money and avoid unexpected breakdowns.',
    features: [
      'Bi-annual system inspections',
      'Priority service scheduling',
      'Discounted repair rates',
      'Extended equipment warranties',
      'Seasonal tune-ups',
      'Energy efficiency reports'
    ],
    benefits: [
      'Save up to 20% on energy bills',
      'Extend equipment lifespan',
      'Prevent costly emergencies',
      'Priority emergency service',
      'Transferable to new homeowners',
      'No surprises or hidden costs'
    ],
    faq: [
      {
        question: 'What does a maintenance plan include?',
        answer: 'Our plans include two annual visits (spring and fall), full system inspections, cleaning, adjustments, and discounted repair rates.'
      },
      {
        question: 'Can I cancel my maintenance plan?',
        answer: 'Yes, our plans are flexible. You can cancel at any time with no penalties or fees.'
      }
    ],
    icon: 'Shield',
    imageUrl: 'https://images.pexels.com/photos/5691546/pexels-photo-5691546.jpeg',
    priceRange: '$',
    duration: 'Annual plan',
    metaTitle: 'HVAC Maintenance Plans Greer SC | Preventative Service',
    metaDescription: 'Affordable HVAC maintenance plans in Greer, SC. Protect your investment, save money, and enjoy peace of mind. Call (864) 551-1125 to enroll.'
  },
  {
    id: '5',
    slug: 'commercial-hvac',
    title: 'Commercial HVAC',
    subtitle: 'Business Climate Control Solutions',
    description: 'Comprehensive commercial HVAC services for businesses in the Greenville area. From retail stores to office buildings, we keep your business comfortable and your customers satisfied.',
    features: [
      'Commercial system design',
      'Installation and replacement',
      'Preventative maintenance',
      'Emergency repair service',
      'Rooftop unit service',
      'Building automation integration'
    ],
    benefits: [
      'Minimize business downtime',
      'Reduce operating costs',
      'Improve indoor air quality',
      'Flexible scheduling options',
      'Dedicated account manager',
      'Custom maintenance plans'
    ],
    faq: [
      {
        question: 'Do you work on weekends and after hours?',
        answer: 'Yes, we offer flexible scheduling including evenings and weekends to minimize disruption to your business operations.'
      },
      {
        question: 'What types of commercial buildings do you service?',
        answer: 'We service all types of commercial properties including offices, retail stores, restaurants, warehouses, and medical facilities.'
      }
    ],
    icon: 'Building2',
    imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
    priceRange: '$$$',
    duration: 'Varies by project',
    metaTitle: 'Commercial HVAC Services Greer SC | Business Climate Control',
    metaDescription: 'Professional commercial HVAC installation, repair, and maintenance in Greer, SC. Minimize downtime and maximize comfort. Call (864) 551-1125.'
  },
  {
    id: '6',
    slug: 'emergency-repair',
    title: 'Emergency 24/7 Repairs',
    subtitle: 'Fast Response When You Need It Most',
    description: 'HVAC emergencies don\'t wait for business hours. Our 24/7 emergency repair service ensures you\'re never left in the heat or cold for long.',
    features: [
      'Available 24/7/365',
      'Rapid response time',
      'Fully-stocked service vehicles',
      'Same-day repairs',
      'No overtime charges',
      'Upfront pricing'
    ],
    benefits: [
      'Fast emergency response',
      'Experienced technicians',
      'All makes and models',
      'Transparent pricing',
      'Quality parts and workmanship',
      'Satisfaction guaranteed'
    ],
    faq: [
      {
        question: 'How quickly can you respond to an emergency?',
        answer: 'We typically arrive within 2 hours for emergency calls in the Greer and Greenville area.'
      },
      {
        question: 'Do you charge extra for emergency service?',
        answer: 'No, we believe in fair pricing. You pay the same rate whether it\'s 2pm or 2am.'
      }
    ],
    icon: 'AlertCircle',
    imageUrl: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg',
    priceRange: '$$',
    duration: '1-3 hours',
    metaTitle: '24/7 Emergency HVAC Repair Greer SC | Fast Response',
    metaDescription: 'Emergency HVAC repair in Greer, SC available 24/7. Fast response, no overtime charges. Call (864) 551-1125 now for immediate help!'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    customerName: 'Sarah Johnson',
    rating: 5,
    reviewText: 'Excellent service! They came out the same day my AC broke down in the middle of summer. The technician was professional, knowledgeable, and had my system running in no time. Highly recommend!',
    serviceId: '1',
    source: 'google',
    featured: true,
    createdAt: new Date('2024-08-15')
  },
  {
    id: '2',
    customerName: 'Michael Davis',
    rating: 5,
    reviewText: 'Outstanding experience from start to finish. Fair pricing, prompt service, and they really know their stuff. Our new furnace is working perfectly. Thank you Poinsett Heating & Air!',
    serviceId: '3',
    source: 'google',
    featured: true,
    createdAt: new Date('2024-09-22')
  },
  {
    id: '3',
    customerName: 'Jennifer Martinez',
    rating: 5,
    reviewText: 'Best HVAC company in Greer! They\'ve been maintaining our system for years and it\'s running better than ever. The maintenance plan is worth every penny.',
    serviceId: '4',
    source: 'website',
    featured: true,
    createdAt: new Date('2024-10-05')
  },
  {
    id: '4',
    customerName: 'Robert Thompson',
    rating: 5,
    reviewText: 'Called them for an emergency repair on a Sunday night. They were here within an hour and fixed the problem quickly. Professional, courteous, and reasonably priced.',
    serviceId: '6',
    source: 'website',
    featured: true,
    createdAt: new Date('2024-10-10')
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    id: '1',
    city: 'Greer',
    state: 'SC',
    zipCode: '29650',
    latitude: 34.9393,
    longitude: -82.2270,
    description: 'Proudly serving Greer with expert HVAC services for residential and commercial properties.'
  },
  {
    id: '2',
    city: 'Greenville',
    state: 'SC',
    zipCode: '29601',
    latitude: 34.8526,
    longitude: -82.3940,
    description: 'Providing reliable heating and cooling services throughout the Greenville area.'
  },
  {
    id: '3',
    city: 'Taylors',
    state: 'SC',
    zipCode: '29687',
    latitude: 34.9204,
    longitude: -82.2971,
    description: 'Expert HVAC installation, repair, and maintenance for Taylors residents.'
  },
  {
    id: '4',
    city: 'Simpsonville',
    state: 'SC',
    zipCode: '29681',
    latitude: 34.7371,
    longitude: -82.2543,
    description: 'Trusted HVAC contractor serving Simpsonville with 24/7 emergency service.'
  },
  {
    id: '5',
    city: 'Mauldin',
    state: 'SC',
    zipCode: '29662',
    latitude: 34.7787,
    longitude: -82.3101,
    description: 'Quality heating and air conditioning services for homes and businesses in Mauldin.'
  },
  {
    id: '6',
    city: 'Travelers Rest',
    state: 'SC',
    zipCode: '29690',
    latitude: 34.9676,
    longitude: -82.4432,
    description: 'Serving Travelers Rest with professional HVAC solutions year-round.'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Anderson',
    title: 'Owner & Lead Technician',
    bio: 'With over 20 years of experience in the HVAC industry, John founded Poinsett Heating & Air to provide honest, reliable service to the Greer community.',
    photoUrl: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg',
    phone: '(864) 551-1125',
    email: 'info@poinsettheatingandair.com',
    isTechnician: true,
    availableHours: {}
  },
  {
    id: '2',
    name: 'Mike Stevens',
    title: 'HVAC Technician',
    bio: 'Certified HVAC technician with 15 years of experience specializing in residential and commercial installations.',
    photoUrl: 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg',
    phone: '(864) 551-1125',
    email: 'info@poinsettheatingandair.com',
    isTechnician: true,
    availableHours: {}
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-often-change-hvac-filter',
    title: 'How Often Should You Change Your HVAC Filter?',
    excerpt: 'Learn the recommended schedule for changing your HVAC filter and why it matters for your system\'s efficiency and your home\'s air quality.',
    content: '',
    authorId: '1',
    featuredImage: 'https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg',
    metaTitle: 'How Often to Change HVAC Filter | Greer SC HVAC Tips',
    metaDescription: 'Expert advice on HVAC filter replacement schedules. Learn how often to change filters for optimal efficiency and air quality in your Greer, SC home.',
    publishedAt: new Date('2024-09-15')
  },
  {
    id: '2',
    slug: 'signs-need-new-air-conditioner',
    title: '7 Signs You Need a New Air Conditioner',
    excerpt: 'Is your AC on its last legs? Discover the warning signs that indicate it\'s time to replace your air conditioning system.',
    content: '',
    authorId: '1',
    featuredImage: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg',
    metaTitle: '7 Signs You Need a New AC | Greer SC Air Conditioning',
    metaDescription: 'Learn the warning signs that your AC needs replacement. Expert guidance from Poinsett Heating & Air in Greer, SC. Call for free estimate.',
    publishedAt: new Date('2024-09-22')
  },
  {
    id: '3',
    slug: 'hvac-maintenance-save-money',
    title: 'How HVAC Maintenance Can Save You Money',
    excerpt: 'Discover how regular HVAC maintenance can significantly reduce your energy bills and prevent costly emergency repairs.',
    content: '',
    authorId: '1',
    featuredImage: 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg',
    metaTitle: 'Save Money with HVAC Maintenance | Greer SC',
    metaDescription: 'Learn how regular HVAC maintenance saves money on energy bills and repairs. Affordable maintenance plans in Greer, SC. Call (864) 551-1125.',
    publishedAt: new Date('2024-10-01')
  }
];

export const faqs = [
  {
    id: '1',
    question: 'Do you offer emergency service?',
    answer: 'Yes — we\'re available 24/7 for emergency heating and cooling repairs. Call (864) 551-1125 anytime.',
    category: 'service'
  },
  {
    id: '2',
    question: 'Which HVAC brands do you service?',
    answer: 'We repair and install most major HVAC brands including Trane, Lennox, Goodman, Carrier, and Rheem.',
    category: 'service'
  },
  {
    id: '3',
    question: 'Do you provide financing?',
    answer: 'Yes — financing options are available for new system installations. Ask us for details.',
    category: 'pricing'
  },
  {
    id: '4',
    question: 'Can I schedule online?',
    answer: 'Absolutely! Customers can call, text, or use our online booking form to request service or a quote. The AI receptionist can help you schedule an appointment right now.',
    category: 'booking'
  },
  {
    id: '5',
    question: 'How soon can you come out?',
    answer: 'We can usually provide same-day service for most repair calls in the Greenville and Greer area.',
    category: 'service'
  },
  {
    id: '6',
    question: 'What areas do you serve?',
    answer: 'We proudly serve Greer, Greenville, Taylors, Simpsonville, Travelers Rest, and nearby Upstate South Carolina communities.',
    category: 'service'
  },
  {
    id: '7',
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and insured. We stand behind every job with a satisfaction guarantee.',
    category: 'trust'
  },
  {
    id: '8',
    question: 'Do you offer free estimates?',
    answer: 'Yes, we offer free estimates on new installations and transparent upfront pricing on repairs. No surprise fees.',
    category: 'pricing'
  }
];

export const jobPostings: JobPosting[] = [
  {
    id: '1',
    title: 'HVAC Technician',
    description: 'We are seeking an experienced HVAC technician to join our growing team. The ideal candidate will have strong technical skills, excellent customer service, and a passion for quality work.',
    requirements: [
      'EPA Universal Certification',
      '3+ years HVAC experience',
      'Valid driver\'s license',
      'Strong troubleshooting skills',
      'Excellent communication',
      'Ability to work independently'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Paid time off',
      'Continuing education',
      'Company vehicle',
      '401(k) plan'
    ],
    location: 'Greer, SC',
    employmentType: 'Full-time'
  },
  {
    id: '2',
    title: 'HVAC Apprentice',
    description: 'Great opportunity for someone looking to start a career in HVAC. We provide on-the-job training and support for EPA certification.',
    requirements: [
      'High school diploma or GED',
      'Mechanical aptitude',
      'Willingness to learn',
      'Valid driver\'s license',
      'Physical ability to lift 50+ lbs',
      'Professional demeanor'
    ],
    benefits: [
      'Paid training',
      'Certification support',
      'Health insurance',
      'Advancement opportunities',
      'Tool allowance',
      'Paid time off'
    ],
    location: 'Greer, SC',
    employmentType: 'Full-time'
  }
];
