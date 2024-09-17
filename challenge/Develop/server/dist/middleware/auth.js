import jwt from 'jsonwebtoken';
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err)
                return reject(err);
            resolve(user);
        });
    });
};
export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;
    if (token == null) {
        return res.sendStatus(401); // No token provided
    }
    try {
        const user = await verifyToken(token);
        req.user = user; // Attach user to request object
        next(); // Proceed to next middleware
    }
    catch (err) {
        return res.sendStatus(403); // Token is no longer valid
    }
};
