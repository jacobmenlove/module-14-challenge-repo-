"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const express_1 = require("express");
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await user_1.User.findOne({ where: { username } });
    if (!user)
        return res.status(404).json({ message: 'User not found' });
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch)
        return res.status(401).json({ message: 'Invalid credentials' });
    const token = jsonwebtoken_1.default.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
};
exports.login = login;
const router = (0, express_1.Router)();
router.post('/login', exports.login);
exports.default = router;
