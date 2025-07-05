// Redis Cache Configuration
const redis = require('redis');

const client = redis.createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD,
});

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

// Cache middleware
const cacheMiddleware = (duration = 3600) => {
  return async (req, res, next) => {
    const key = req.originalUrl;
    
    try {
      const cached = await client.get(key);
      
      if (cached) {
        return res.json(JSON.parse(cached));
      }
      
      // Store original res.json
      const originalJson = res.json;
      
      res.json = function(data) {
        // Cache the response
        client.setex(key, duration, JSON.stringify(data));
        
        // Call original json method
        originalJson.call(this, data);
      };
      
      next();
    } catch (error) {
      console.error('Cache error:', error);
      next();
    }
  };
};

// Cache invalidation
const invalidateCache = (pattern) => {
  return new Promise((resolve, reject) => {
    client.keys(pattern, (err, keys) => {
      if (err) return reject(err);
      
      if (keys.length > 0) {
        client.del(keys, (err, result) => {
          if (err) return reject(err);
          resolve(result);
        });
      } else {
        resolve(0);
      }
    });
  });
};

module.exports = {
  client,
  cacheMiddleware,
  invalidateCache,
};