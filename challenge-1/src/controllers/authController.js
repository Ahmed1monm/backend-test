const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const signJWT = require('../utils/signJWT');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = signJWT({ id: user._id, role: user.role });

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await User.create({ username, password, role });

        const token = signJWT({ id: user._id, role: user.role });
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: `Server error: ${err.message}` });
    }
}
