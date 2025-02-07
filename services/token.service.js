const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token.model');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
      expiresIn: '10m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  async saveToken(userId, refreshToken) {
    const existToken = await tokenModel.findOne({ user: userId });
  }
}

module.exports = new TokenService();
