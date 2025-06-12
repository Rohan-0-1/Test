const GlassInput = ({ 
  icon: Icon, 
  label, 
  error, 
  className = "",
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon size={18} />
          </div>
        )}
        <input
          className={`
            w-full 
            ${Icon ? 'pl-10' : 'pl-4'} 
            pr-4 py-3 
            input-glass 
            rounded-xl 
            placeholder-gray-400 
            text-gray-700
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500/50
            ${error ? 'border-red-300 focus:border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default GlassInput;