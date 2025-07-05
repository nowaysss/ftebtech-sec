// Performance Monitoring and Error Tracking
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
}));

// Compression middleware
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

app.use('/api/', limiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
  });
});

// Performance monitoring middleware
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    
    // Log slow requests
    if (duration > 1000) {
      console.warn(`Slow request: ${req.method} ${req.url} - ${duration}ms`);
    }
    
    // Send metrics to monitoring service
    if (process.env.NODE_ENV === 'production') {
      // Send to monitoring service (e.g., DataDog, New Relic)
      sendMetrics({
        method: req.method,
        url: req.url,
        statusCode: res.statusCode,
        duration,
        timestamp: new Date().toISOString(),
      });
    }
  });
  
  next();
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Error:', error);
  
  // Send error to monitoring service
  if (process.env.NODE_ENV === 'production') {
    sendErrorToMonitoring(error, req);
  }
  
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
  });
});

function sendMetrics(metrics) {
  // Implementation for sending metrics to monitoring service
  // Example: DataDog, New Relic, CloudWatch, etc.
}

function sendErrorToMonitoring(error, req) {
  // Implementation for sending errors to monitoring service
  // Example: Sentry, Bugsnag, etc.
}

module.exports = app;