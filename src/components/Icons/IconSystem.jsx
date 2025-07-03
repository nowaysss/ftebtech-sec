import React from 'react';

// Professional Icon System - Clean SVG Icons
export const Icons = {
  // Navigation Icons
  Home: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12H15V22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Services: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Contact: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="L22 6L12 13L2 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Menu: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 12H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 6H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 18H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Close: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Service Icons
  Cloud: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 10H16.74C16.24 6.67 13.39 4 10 4C6.61 4 3.76 6.67 3.26 10H2C0.9 10 0 10.9 0 12S0.9 14 2 14H18C19.1 14 20 13.1 20 12S19.1 10 18 10Z" fill={color}/>
    </svg>
  ),

  Server: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="3" width="20" height="4" rx="1" stroke={color} strokeWidth="2"/>
      <rect x="2" y="9" width="20" height="4" rx="1" stroke={color} strokeWidth="2"/>
      <rect x="2" y="15" width="20" height="4" rx="1" stroke={color} strokeWidth="2"/>
      <circle cx="6" cy="5" r="1" fill={color}/>
      <circle cx="6" cy="11" r="1" fill={color}/>
      <circle cx="6" cy="17" r="1" fill={color}/>
    </svg>
  ),

  Shield: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 22S2 16 2 9C2 9 2 3 12 3S22 9 22 9C22 16 12 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Code: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16 18L22 12L16 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6L2 12L8 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Database: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke={color} strokeWidth="2"/>
      <path d="M21 12C21 13.66 16.97 15 12 15S3 13.66 3 12" stroke={color} strokeWidth="2"/>
      <path d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5" stroke={color} strokeWidth="2"/>
    </svg>
  ),

  Network: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="16" y="16" width="6" height="6" rx="1" stroke={color} strokeWidth="2"/>
      <rect x="2" y="16" width="6" height="6" rx="1" stroke={color} strokeWidth="2"/>
      <rect x="9" y="2" width="6" height="6" rx="1" stroke={color} strokeWidth="2"/>
      <path d="M12 8V16" stroke={color} strokeWidth="2"/>
      <path d="M8 19H16" stroke={color} strokeWidth="2"/>
    </svg>
  ),

  Analytics: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 3V21H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9L12 6L16 10L20 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Settings: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2"/>
      <path d="M19.4 15C19.2 15.3 19.1 15.6 19.1 16C19.1 16.4 19.2 16.7 19.4 17L20.4 18.5C20.6 18.8 20.5 19.2 20.2 19.4L18.8 20.2C18.5 20.4 18.1 20.3 17.8 20L16.8 19C16.5 19.2 16.2 19.3 15.8 19.3C15.4 19.3 15.1 19.2 14.8 19L13.8 20C13.5 20.3 13.1 20.4 12.8 20.2L11.4 19.4C11.1 19.2 11 18.8 11.2 18.5L12.2 17C12 16.7 11.9 16.4 11.9 16C11.9 15.6 12 15.3 12.2 15L11.2 13.5C11 13.2 11.1 12.8 11.4 12.6L12.8 11.8C13.1 11.6 13.5 11.7 13.8 12L14.8 13C15.1 12.8 15.4 12.7 15.8 12.7C16.2 12.7 16.5 12.8 16.8 13L17.8 12C18.1 11.7 18.5 11.6 18.8 11.8L20.2 12.6C20.5 12.8 20.6 13.2 20.4 13.5L19.4 15Z" stroke={color} strokeWidth="2"/>
    </svg>
  ),

  // Contact Icons
  Phone: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M22 16.92V19.92C22 20.52 21.39 21 20.83 21C9.28 21 0 11.72 0 0.17C0 -0.39 0.48 -1 1.08 -1H4.08C4.68 -1 5.08 -0.39 5.17 0.17C5.35 1.37 5.76 2.48 6.4 3.48C6.61 3.81 6.5 4.26 6.15 4.47L4.9 5.28C6.07 7.37 7.63 8.93 9.72 10.1L10.53 8.85C10.74 8.5 11.19 8.39 11.52 8.6C12.52 9.24 13.63 9.65 14.83 9.83C15.39 9.92 16 10.32 16 10.92V13.92C16 14.52 15.39 15 14.83 15C14.39 15 13.92 14.68 13.92 14.17V13.92Z" fill={color}/>
    </svg>
  ),

  Email: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="L22 6L12 13L2 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Location: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke={color} strokeWidth="2"/>
      <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2"/>
    </svg>
  ),

  Clock: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
      <path d="M12 6V12L16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Action Icons
  ArrowRight: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 5L19 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  ArrowLeft: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M19 12H5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 19L5 12L12 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Check: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M20 6L9 17L4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Plus: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5V19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 12H19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Social Icons
  LinkedIn: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="9" width="4" height="12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="4" r="2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  // Technology Icons
  Azure: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Microsoft: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="8" height="8" fill={color}/>
      <rect x="13" y="3" width="8" height="8" fill={color}/>
      <rect x="3" y="13" width="8" height="8" fill={color}/>
      <rect x="13" y="13" width="8" height="8" fill={color}/>
    </svg>
  ),

  // Status Icons
  Success: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
      <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Warning: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M10.29 3.86L1.82 18C1.64 18.37 1.8 18.82 2.18 19C2.3 19.08 2.44 19.12 2.59 19.12H21.42C21.82 19.12 22.15 18.8 22.15 18.39C22.15 18.24 22.11 18.1 22.03 17.98L13.56 3.86C13.38 3.49 12.93 3.33 12.56 3.51C12.43 3.58 12.32 3.69 12.25 3.82L10.29 3.86Z" stroke={color} strokeWidth="2"/>
      <path d="M12 9V13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17H12.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),

  Info: ({ size = 24, color = "currentColor", className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
      <path d="M12 16V12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8H12.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

// Icon wrapper component for consistent styling
export const Icon = ({ 
  name, 
  size = 24, 
  color = "currentColor", 
  className = "",
  ...props 
}) => {
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent 
      size={size} 
      color={color} 
      className={`icon ${className}`}
      {...props}
    />
  );
};

export default Icons;