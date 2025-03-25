import React, { useEffect, useState } from 'react'

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    
    // Handle script loading events
    script.onload = () => setIsLoading(false);
    script.onerror = () => {
      console.error('Failed to load Fillout form script');
      setScriptError(true);
      setIsLoading(false);
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Check if script exists before removing
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`w-full ${className || ''}`}>
      {isLoading && (
        <div className="flex items-center justify-center py-12 text-doit-600">
          <svg className="animate-spin -ml-1 mr-3 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading form...</span>
        </div>
      )}
      
      {scriptError && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
          <p className="font-medium">Failed to load the contact form</p>
          <p className="text-sm mt-2">Please refresh the page or try again later</p>
        </div>
      )}
      
      <div 
        className={`${isLoading || scriptError ? 'hidden' : 'block'} transition-opacity duration-300`}
        style={{width: '90%', minHeight: '500px'}} 
        data-fillout-id="m9aLYXhaYrus" 
        data-fillout-embed-type="standard" 
        data-fillout-inherit-parameters="true"
        data-fillout-dynamic-resize="true"
      />
    </div>
  )
}

export default ContactForm
