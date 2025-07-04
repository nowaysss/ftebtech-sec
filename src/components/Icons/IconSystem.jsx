import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faLayerGroup,
  faEnvelope,
  faBars,
  faTimes,
  faCloud,
  faServer,
  faShieldAlt,
  faCode,
  faDatabase,
  faNetworkWired,
  faChartLine,
  faCog,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faArrowRight,
  faArrowLeft,
  faCheck,
  faPlus,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Icon mapping object
const iconMap = {
  // Navigation Icons
  Home: faHome,
  Services: faLayerGroup,
  Contact: faEnvelope,
  Menu: faBars,
  Close: faTimes,

  // Service Icons
  Cloud: faCloud,
  Server: faServer,
  Shield: faShieldAlt,
  Code: faCode,
  Database: faDatabase,
  Network: faNetworkWired,
  Analytics: faChartLine,
  Settings: faCog,

  // Contact Icons
  Phone: faPhone,
  Email: faEnvelope,
  Location: faMapMarkerAlt,
  Clock: faClock,

  // Action Icons
  ArrowRight: faArrowRight,
  ArrowLeft: faArrowLeft,
  Check: faCheck,
  Plus: faPlus,

  // Status Icons
  Success: faCheckCircle,
  Warning: faExclamationTriangle,
  Info: faInfoCircle,

  // Social Icons
  LinkedIn: faLinkedinIn,

  // Technology Icons
  Azure: faCloud,
  AWS: faCloud,
  GCP: faCloud,

};

// Icon wrapper component for consistent styling
export const Icon = ({ 
  name, 
  size = 24, 
  color = "currentColor", 
  className = "",
  ...props 
}) => {
  const iconDefinition = iconMap[name];
  
  if (!iconDefinition) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <FontAwesomeIcon 
      icon={iconDefinition}
      style={{ 
        fontSize: typeof size === 'number' ? `${size}px` : size,
        color: color,
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size
      }}
      className={`icon ${className}`}
      {...props}
    />
  );
};

// Legacy export for backward compatibility
export const Icons = iconMap;

export default Icons;