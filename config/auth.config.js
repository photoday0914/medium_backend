module.exports = {
    secret: "bezkoder-secret-key",
    // jwtExpiration: 3600,         // 1 hour
    // jwtRefreshExpiration: 86400, // 24 hours
    user: 'ea689bc87d2726',
    pass: 'ae7b1ca6532833',
    /* for test */
    jwtExpiration: 60,          // 1 minute
    jwtRefreshExpiration: 30000,  // 2 minutes
    baseUrl:'http://ec2-3-83-2-186.compute-1.amazonaws.com:3000',
    frontUrl:'http://ec2-3-83-2-186.compute-1.amazonaws.com'
  };
  