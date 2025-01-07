const jwt = require('jsonwebtoken');

function signJWT(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

module.exports = signJWT;
