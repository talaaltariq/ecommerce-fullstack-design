import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt;
    if (!token) {
      return res.status(401).json({ message: "Not authorized, token missing" });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined. Authentication cannot proceed.");
      return res.status(401).json({ message: "Not authorized, server misconfiguration" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.id).select("-password");
    
    if (!user) {
      console.error("user not found in db, from protectedRoute");
      return res.status(401).json({ message: "Not authorized, user not found" });
    }
    
    req.user = user;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message || error);
    res.status(401).json({ message: "Not authorized, invalid or expired token" });
  }
};

export const adminRoute = (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Unauthorized - Admin only" });
  }
};
