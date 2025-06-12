import { useState } from 'react';
import { UserCircle, Lock, Building2, Eye, EyeOff } from 'lucide-react';
import { GlassCard, GlassButton, GlassInput, LoadingSpinner } from './common';

const LoginForm = ({ role, onSubmit }) => {
  const [formData, setFormData] = useState({ loginId: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roleStyles = {
    Doctor: {
      gradient: 'gradient-doctor',
      iconColor: 'text-cyan-600',
      accentColor: 'cyan'
    },
    Receptionist: {
      gradient: 'gradient-receptionist', 
      iconColor: 'text-emerald-600',
      accentColor: 'emerald'
    },
    Admin: {
      gradient: 'gradient-admin',
      iconColor: 'text-blue-600', 
      accentColor: 'blue'
    }
  };

  const styles = roleStyles[role] || roleStyles.Admin;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fadeInUp">
      <GlassCard className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 glass rounded-full animate-float"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 glass rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <div className={`w-20 h-20 ${styles.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center animate-pulse-glow`}>
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{role} Login</h1>
          <p className="text-gray-600">Welcome back! Please sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <GlassInput
            icon={UserCircle}
            name="loginId"
            type="text"
            placeholder="Enter your Login ID"
            value={formData.loginId}
            onChange={handleChange}
            required
          />

          <div className="relative">
            <GlassInput
              icon={Lock}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <GlassButton
            type="submit"
            size="lg"
            loading={isLoading}
            disabled={!formData.loginId || !formData.password}
            className={`w-full ${styles.gradient} text-white hover:scale-105`}
          >
            {isLoading ? (
              <>
                <LoadingSpinner size="sm" color="white" />
                Signing in...
              </>
            ) : (
              `Login as ${role}`
            )}
          </GlassButton>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center relative z-10">
          <p className="text-sm text-gray-500">
            Need help? Contact system administrator
          </p>
        </div>
      </GlassCard>
    </div>
  );
};

export default LoginForm;