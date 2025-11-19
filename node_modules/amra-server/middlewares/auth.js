import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : null;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

export const authorizeAdmin = (req, res, next) => {
  if  (req.user.role !== "Admin") {
    return res.status(403).json({ message: 'Access denied! only admin has access' });
  }
  next();
};

// export default { authMiddleware, authorizeAdmin };

export default authMiddleware;