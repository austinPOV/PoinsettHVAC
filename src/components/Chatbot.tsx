import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/data';

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  options?: string[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      text: `Hi! I'm your AI receptionist for Poinsett Heating & Air. I can help you schedule service, answer questions, or connect you with our team. How can I assist you today?`,
      options: [
        'Schedule Service',
        'Emergency Repair',
        'Service Areas',
        'Pricing Info',
        'Talk to Human'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: option
    };

    let botResponse: Message;

    switch (option) {
      case 'Schedule Service':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: 'Great! I can help you schedule a service. Would you like to:',
          options: ['Book Online Now', 'Call to Schedule', 'Main Menu']
        };
        break;

      case 'Emergency Repair':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: `We offer 24/7 emergency HVAC service! Call us now at ${BUSINESS_INFO.phone} for immediate assistance. Our technicians typically arrive within 2 hours.`
        };
        break;

      case 'Service Areas':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: 'We proudly serve Greer, Greenville, Taylors, Simpsonville, Mauldin, and Travelers Rest. If you\'re outside these areas, give us a call and we\'ll see if we can help!'
        };
        break;

      case 'Pricing Info':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: 'Our pricing varies by service type. We offer upfront pricing with no hidden fees. Would you like information about:',
          options: ['AC Services', 'Heating Services', 'Maintenance Plans', 'Main Menu']
        };
        break;

      case 'Talk to Human':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: `I'd be happy to connect you with our team! You can call us at ${BUSINESS_INFO.phone} or leave your phone number and we'll call you back within the hour.`
        };
        break;

      case 'Book Online Now':
        window.location.href = '/book';
        return;

      case 'Call to Schedule':
        window.location.href = `tel:${BUSINESS_INFO.phoneRaw}`;
        return;

      case 'AC Services':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: 'Our AC services include installation, repair, and maintenance. Service calls start at $89, and we provide free estimates for installations. Would you like to schedule a service?',
          options: ['Schedule Service', 'Main Menu']
        };
        break;

      case 'Heating Services':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: 'We provide furnace installation, repair, heat pump service, and more. Pricing depends on the specific service needed. Contact us for a free estimate!',
          options: ['Schedule Service', 'Main Menu']
        };
        break;

      case 'Maintenance Plans':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: 'Our preventative maintenance plans start at $129/year and include bi-annual inspections, priority scheduling, and discounted repairs. Interested in learning more?',
          options: ['Schedule Service', 'Main Menu']
        };
        break;

      case 'Main Menu':
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: 'How can I help you today?',
          options: [
            'Schedule Service',
            'Emergency Repair',
            'Service Areas',
            'Pricing Info',
            'Talk to Human'
          ]
        };
        break;

      default:
        botResponse = {
          id: (Date.now() + 1).toString(),
          role: 'bot',
          text: 'I\'m not sure I understand. Let me connect you with our team. Please call us at ' + BUSINESS_INFO.phone + ' or try one of these options:',
          options: [
            'Schedule Service',
            'Emergency Repair',
            'Main Menu'
          ]
        };
    }

    setMessages([...messages, userMessage, botResponse]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: 'bot',
      text: `Thanks for your message! For the fastest response, please call us at ${BUSINESS_INFO.phone} or choose from these options:`,
      options: [
        'Schedule Service',
        'Emergency Repair',
        'Talk to Human'
      ]
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputValue('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-primary text-white rounded-full shadow-2xl hover:bg-accent transition-all transform hover:scale-110 flex items-center justify-center z-50"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-2 lg:right-6 w-[calc(100vw-1rem)] sm:w-full max-w-md h-[500px] sm:h-[600px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
      <div className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="font-semibold">AI Receptionist</div>
            <div className="text-sm text-primary-100">Available 24/7</div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-accent rounded-brand transition-colors"
          aria-label="Close chat"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-coolWhite">
        {messages.map((message) => (
          <div key={message.id}>
            <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-brand p-3 ${
                  message.role === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-white text-navy shadow-md border border-slate-200'
                }`}
              >
                {message.text}
              </div>
            </div>

            {message.options && (
              <div className="flex flex-wrap gap-2 mt-2 ml-0">
                {message.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="px-4 py-2 bg-white border-2 border-primary text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors shadow-sm"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex gap-2 mb-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-brand text-sm font-semibold hover:bg-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href="/book"
            className="flex-1 flex items-center justify-center gap-2 bg-accent text-white px-4 py-2 rounded-brand text-sm font-semibold hover:bg-primary transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Book
          </a>
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-slate-300 rounded-brand focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            className="p-2 bg-primary text-white rounded-brand hover:bg-accent transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
