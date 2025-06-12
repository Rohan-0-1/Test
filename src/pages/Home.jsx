import { useNavigate } from 'react-router-dom';
import { Users, UserCog, UserCircle, Building2, Heart, Clock, Shield, Sparkles } from 'lucide-react';
import { GlassCard } from '../components/common';

const Home = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: "Admin",
      description: "System administration and management",
      icon: UserCog,
      path: "/admin-login",
      gradient: "gradient-admin",
      delay: "animate-stagger-1"
    },
    {
      title: "Doctor", 
      description: "Patient management and consultations",
      icon: UserCircle,
      path: "/doctor-login",
      gradient: "gradient-doctor",
      delay: "animate-stagger-2"
    },
    {
      title: "Receptionist",
      description: "Appointment scheduling and front desk",
      icon: Users,
      path: "/receptionist-login", 
      gradient: "gradient-receptionist",
      delay: "animate-stagger-3"
    }
  ];

  const features = [
    {
      icon: Heart,
      title: "Patient Care",
      description: "Streamlined patient management for better healthcare delivery"
    },
    {
      icon: Clock,
      title: "24/7 Access", 
      description: "Round-the-clock access to medical records and resources"
    },
    {
      icon: Shield,
      title: "Secure System",
      description: "Advanced security measures to protect sensitive data"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-admin">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="p-4 glass rounded-2xl animate-pulse-glow">
              <Building2 className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Hospital Management
              </h1>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="text-xl text-white/90">System</span>
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </div>
            </div>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Access your personalized dashboard based on your role
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {roles.map((role, index) => (
            <GlassCard 
              key={role.title}
              className={`text-center cursor-pointer group animate-fadeInUp ${role.delay}`}
              onClick={() => navigate(role.path)}
            >
              <div className="relative">
                <div className={`w-20 h-20 ${role.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{role.title}</h3>
                <p className="text-gray-600 leading-relaxed">{role.description}</p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`text-center animate-fadeInUp animate-stagger-${index + 1}`}
            >
              <GlassCard className="h-full" hover={false}>
                <div className="p-4 glass rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-fadeInUp animate-stagger-4">
          <p className="text-white/70">
            © 2024 Hospital Management System. Secure • Reliable • Professional
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;