import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Briefcase, BookOpen, Users, FileText, MessageSquare, DollarSign, Star, Menu, X } from 'lucide-react';

// Color theme configuration
const colorThemes = {
  green: {
    primary: 'bg-green-600',
    primaryHover: 'hover:bg-green-700',
    primaryText: 'text-green-600',
    primaryLight: 'bg-green-100',
    primaryBorder: 'border-green-600',
    gradientFrom: 'from-green-600',
    gradientTo: 'to-green-800'
  },
  purple: {
    primary: 'bg-purple-600',
    primaryHover: 'hover:bg-purple-700',
    primaryText: 'text-purple-600',
    primaryLight: 'bg-purple-100',
    primaryBorder: 'border-purple-600',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-purple-800'
  },
  teal: {
    primary: 'bg-teal-600',
    primaryHover: 'hover:bg-teal-700',
    primaryText: 'text-teal-600',
    primaryLight: 'bg-teal-100',
    primaryBorder: 'border-teal-600',
    gradientFrom: 'from-teal-600',
    gradientTo: 'to-teal-800'
  }
};

// Form Modal Component
const FormModal = ({ isOpen, onClose, title, colorTheme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert(`Thank you, ${formData.name}! We'll be in touch soon.`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className={`p-4 ${colorTheme.primary} rounded-t-lg flex justify-between items-center`}>
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="interest" className="block text-gray-700 mb-2">What are you interested in?</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select an option</option>
              <option value="job-matching">Job Matching</option>
              <option value="training">Vocational Training</option>
              <option value="career-guidance">Career Guidance</option>
              <option value="financial-literacy">Financial Literacy</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded-md text-white ${colorTheme.primary} ${colorTheme.primaryHover}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Page components
const HomePage = ({ colorTheme, openForm }) => (
  <>
    {/* Hero Section */}
    <section className={`relative bg-gradient-to-r ${colorTheme.gradientFrom} ${colorTheme.gradientTo} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center md:text-left md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Beacon</h1>
          <p className="text-xl md:text-2xl font-semibold mb-4">Empowering People. Ending Poverty.</p>
          <p className="text-lg mb-8 opacity-90">Connecting youth and underserved communities to jobs, training, and financial tools.</p>
          <button 
            onClick={() => openForm('getstarted')}
            className={`bg-white ${colorTheme.primaryText} px-6 py-3 rounded-lg font-medium flex items-center mx-auto md:mx-0 hover:bg-gray-100 transition-colors`}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white opacity-20"></div>
    </section>

    {/* Core Features Section */}
    <FeaturesSection colorTheme={colorTheme} />
  </>
);

const FeaturesSection = ({ colorTheme }) => {
  const features = [
    { 
      title: "Job Matching & Opportunities", 
      description: "Find employment tailored to your skills and aspirations.", 
      icon: <Briefcase className={`h-8 w-8 ${colorTheme.primaryText}`} />
    },
    { 
      title: "Vocational Training Access", 
      description: "Access free and affordable skill development courses.", 
      icon: <BookOpen className={`h-8 w-8 ${colorTheme.primaryText}`} />
    },
    { 
      title: "Career Guidance & Coaching", 
      description: "Get personalized advice from industry professionals.", 
      icon: <Users className={`h-8 w-8 ${colorTheme.primaryText}`} />
    },
    { 
      title: "Resume Building Tools", 
      description: "Create standout resumes with our guided templates.", 
      icon: <FileText className={`h-8 w-8 ${colorTheme.primaryText}`} />
    },
    { 
      title: "Interview Prep Support", 
      description: "Practice with AI-powered mock interviews.", 
      icon: <MessageSquare className={`h-8 w-8 ${colorTheme.primaryText}`} />
    },
    { 
      title: "Financial Literacy Resources", 
      description: "Learn essential money management skills.", 
      icon: <DollarSign className={`h-8 w-8 ${colorTheme.primaryText}`} />
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologyPage = ({ colorTheme }) => (
  <section id="technology" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className={`${colorTheme.primaryLight} p-4 rounded-full inline-block mb-4`}>
            <CheckCircle className={`h-12 w-12 ${colorTheme.primaryText}`} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Skill-Matching Technology</h2>
          <p className="text-lg text-gray-700 mb-4">Beacon uses smart tech to connect your strengths with the right jobs.</p>
          <p className="text-gray-600">Our AI-powered platform analyzes your skills, experience, and goals to find opportunities that match your unique profile. We don't just find you any job—we find the right job.</p>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className={`${colorTheme.primaryLight} p-2 rounded-md`}>
                <Briefcase className={`h-5 w-5 ${colorTheme.primaryText}`} />
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Smart Job Matching</h4>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div className={`h-2 ${colorTheme.primary} rounded-full w-4/5`}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className={`${colorTheme.primaryLight} p-2 rounded-md`}>
                <Users className={`h-5 w-5 ${colorTheme.primaryText}`} />
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Personalized Training</h4>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div className={`h-2 ${colorTheme.primary} rounded-full w-2/3`}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className={`${colorTheme.primaryLight} p-2 rounded-md`}>
                <Star className={`h-5 w-5 ${colorTheme.primaryText}`} />
              </div>
              <div className="ml-4">
                <h4 className="font-medium">Career Growth Path</h4>
                <div className="h-2 bg-gray-200 rounded-full mt-2">
                  <div className={`h-2 ${colorTheme.primary} rounded-full w-3/4`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ImpactPage = ({ colorTheme }) => (
  <section id="impact" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Community Impact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Local Business Partnerships</h3>
          <p className="text-gray-600 mb-4">We collaborate with businesses in your community to create exclusive opportunities for Beacon users.</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>Over 500 local businesses committed to fair wages</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>Preference for employers offering benefits and growth paths</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>Regular job fairs and networking events</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Sustainable Employment</h3>
          <p className="text-gray-600 mb-4">Beacon focuses on long-term career development, not just temporary jobs.</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>85% of users maintain employment for over 1 year</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>Ongoing career coaching and skill development</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span>Community support groups and mentorship programs</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg font-medium mb-4">Together, we're creating pathways out of poverty through meaningful employment.</p>
      </div>
    </div>
  </section>
);

const TestimonialsPage = ({ colorTheme }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria L.",
      role: "Healthcare Professional",
      content: "Beacon helped me transition from odd jobs to a stable career in healthcare. The training resources and job matching were exactly what I needed."
    },
    {
      name: "James T.",
      role: "Software Developer",
      content: "After months of rejection, Beacon's resume tools and interview prep helped me land my first tech job. Now I'm supporting my family and building a career."
    },
    {
      name: "Aisha K.",
      role: "Retail Manager",
      content: "The financial literacy courses changed how I approach money. Beacon didn't just help me find work – it taught me how to build wealth."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="relative">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className={`${colorTheme.primaryLight} p-2 rounded-full`}>
                <Star className={`h-6 w-6 ${colorTheme.primaryText}`} />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">{testimonials[currentTestimonial].content}</p>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className={`p-2 rounded-full ${colorTheme.primaryLight} hover:${colorTheme.primaryHover.replace('hover:', '')} transition-colors`}
            >
              <ChevronLeft className={`h-5 w-5 ${colorTheme.primaryText}`} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    currentTestimonial === index ? `w-6 ${colorTheme.primary}` : 'w-2 bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className={`p-2 rounded-full ${colorTheme.primaryLight} hover:${colorTheme.primaryHover.replace('hover:', '')} transition-colors`}
            >
              <ChevronRight className={`h-5 w-5 ${colorTheme.primaryText}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentTheme, setCurrentTheme] = useState('green'); // Changed default to green
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeForm, setActiveForm] = useState('');
  const colorTheme = colorThemes[currentTheme];

  const openForm = (formType) => {
    setActiveForm(formType);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setActiveForm('');
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage colorTheme={colorTheme} openForm={openForm} />;
      case 'technology':
        return <TechnologyPage colorTheme={colorTheme} />;
      case 'impact':
        return <ImpactPage colorTheme={colorTheme} />;
      case 'testimonials':
        return <TestimonialsPage colorTheme={colorTheme} />;
      default:
        return <HomePage colorTheme={colorTheme} openForm={openForm} />;
    }
  };

  // Render different forms based on activeForm state
  const renderForm = () => {
    switch (activeForm) {
      case 'join':
        return <FormModal isOpen={isFormOpen} onClose={closeForm} title="Join Beacon" colorTheme={colorTheme} />;
      case 'signup':
        return <FormModal isOpen={isFormOpen} onClose={closeForm} title="Sign Up" colorTheme={colorTheme} />;
      case 'getstarted':
        return <FormModal isOpen={isFormOpen} onClose={closeForm} title="Get Started" colorTheme={colorTheme} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${colorTheme.primaryText} cursor-pointer`} onClick={() => setCurrentPage('home')}>Beacon</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setCurrentPage('home')} className={`text-gray-700 hover:${colorTheme.primaryText} transition-colors`}>Home</button>
              <button onClick={() => setCurrentPage('technology')} className={`text-gray-700 hover:${colorTheme.primaryText} transition-colors`}>Technology</button>
              <button onClick={() => setCurrentPage('impact')} className={`text-gray-700 hover:${colorTheme.primaryText} transition-colors`}>Impact</button>
              <button onClick={() => setCurrentPage('testimonials')} className={`text-gray-700 hover:${colorTheme.primaryText} transition-colors`}>Stories</button>
              
              {/* Theme selector */}
              <div className="flex space-x-2">
                <button onClick={() => setCurrentTheme('green')} className="w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow"></button>
                <button onClick={() => setCurrentTheme('purple')} className="w-6 h-6 rounded-full bg-purple-600 border-2 border-white shadow"></button>
                <button onClick={() => setCurrentTheme('teal')} className="w-6 h-6 rounded-full bg-teal-600 border-2 border-white shadow"></button>
              </div>
              
              <button 
                onClick={() => openForm('signup')}
                className={`${colorTheme.primary} text-white px-4 py-2 rounded-lg ${colorTheme.primaryHover} transition-colors`}
              >
                Sign Up
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md w-full text-left">Home</button>
              <button onClick={() => { setCurrentPage('technology'); setIsMenuOpen(false); }} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md w-full text-left">Technology</button>
              <button onClick={() => { setCurrentPage('impact'); setIsMenuOpen(false); }} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md w-full text-left">Impact</button>
              <button onClick={() => { setCurrentPage('testimonials'); setIsMenuOpen(false); }} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md w-full text-left">Stories</button>
              
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-500 mb-1">Theme Color</p>
                <div className="flex space-x-2">
                  <button onClick={() => setCurrentTheme('green')} className="w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow"></button>
                  <button onClick={() => setCurrentTheme('purple')} className="w-6 h-6 rounded-full bg-purple-600 border-2 border-white shadow"></button>
                  <button onClick={() => setCurrentTheme('teal')} className="w-6 h-6 rounded-full bg-teal-600 border-2 border-white shadow"></button>
                </div>
              </div>
              
              <button 
                onClick={() => { openForm('signup'); setIsMenuOpen(false); }}
                className={`w-full mt-2 ${colorTheme.primary} text-white px-4 py-2 rounded-lg ${colorTheme.primaryHover} transition-colors`}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Current Page Content */}
      {renderPage()}

      {/* Call to Action Section (shown on all pages) */}
      <section className={`py-16 ${colorTheme.primary} text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of people who have transformed their lives with Beacon.</p>
          <button 
            onClick={() => openForm('join')}
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors"
          >
            Join Beacon Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Beacon</h3>
              <p className="text-gray-300">Empowering People. Ending Poverty.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><button className="text-gray-300 hover:text-white transition-colors">Job Board</button></li>
                <li><button className="text-gray-300 hover:text-white transition-colors">Training Courses</button></li>
                <li><button className="text-gray-300 hover:text-white transition-colors">Financial Tools</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><button className="text-gray-300 hover:text-white transition-colors">About</button></li>
                <li><button className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
                <li><button className="text-gray-300 hover:text-white transition-colors">Privacy</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <button className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </button>
                <button className="text-gray-300 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.5 3.5L20.5 5.5H18L19 7.5H17L18 9.5H16L12 22H8L11 10.5H9L10 8.5H8L9 6.5H7L8 4.5H6L7 2.5H15L16 4.5H18L19.5 3.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Beacon. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Form Modals */}
      {renderForm()}
    </div>
  );
};

export default App;