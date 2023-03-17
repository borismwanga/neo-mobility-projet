const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phoneNumber: req.body.phoneNumber,
    });

    const user = await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: { _id: user._id, name: user.name, email: user.email, phoneNumber: user.phoneNumber },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: email not found' });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed: incorrect password' });
    }

    const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || 'your_default_jwt_secret',
        { expiresIn: '1h' }
      );
      

    res.status(200).json({ message: 'Authenticated', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in user', error });
  }
};

exports.logout = async (req, res) => {
    try {
      // Perform any necessary logout actions, like clearing session data or revoking tokens
  
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error logging out', error });
    }
  };
  
