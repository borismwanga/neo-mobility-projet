const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('Auth header:', authHeader); // Log the auth header
  console.log('Request headers:', req.headers);


  if (authHeader) {
    const token = authHeader.split(' ')[1];
    console.log('Token:', token); // Log the token

    try {
      const decodedToken = jwt.verify(token, '21617e6bb07bf0bf2d2dc3df4f83883aad131e0142ebf51cbe9d61e1f1c490f4');
      console.log('Decoded token:', decodedToken); // Log the decoded token

      req.userData = {
        userId: decodedToken.userId, // Assuming your JWT payload contains the user ID as 'userId'
      };

      next(); // Continue to the next middleware or route handler
    } catch (error) {
      console.error('Error decoding token:', error); // Log the error
      res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
  }
};
