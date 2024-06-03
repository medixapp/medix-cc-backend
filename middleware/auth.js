// middlewares/authMiddleware.js
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
        return next();
    }
    res.status(401).json({ status: 'fail', message: 'Unauthorized' });
};

module.exports = { isAuthenticated };