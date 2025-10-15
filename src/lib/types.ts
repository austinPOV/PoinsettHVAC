export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  faq: { question: string; answer: string }[];
  icon: string;
  imageUrl: string;
  priceRange: string;
  duration: string;
  metaTitle: string;
  metaDescription: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  phone: string;
  email: string;
  isTechnician: boolean;
  availableHours: Record<string, string[]>;
}

export interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  serviceId: string;
  technicianId: string;
  bookingDate: Date;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  paymentAmount: number;
  paymentMethod: string;
  promoCode?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  authorId: string;
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: Date;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  reviewText: string;
  serviceId?: string;
  source: 'google' | 'website';
  featured: boolean;
  createdAt: Date;
}

export interface ServiceArea {
  id: string;
  city: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

export interface ChatConversation {
  id: string;
  visitorName?: string;
  visitorEmail?: string;
  visitorPhone?: string;
  messages: ChatMessage[];
  status: 'active' | 'closed';
}

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
  location: string;
  employmentType: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  resumeUrl: string;
  coverLetter: string;
  status: 'new' | 'reviewing' | 'rejected' | 'accepted';
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved';
}
