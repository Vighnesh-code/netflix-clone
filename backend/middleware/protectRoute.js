import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies["jwt"];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Access! No Token Provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Access! Invalid Token",
      });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found!k",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error!" });
    console.log(`Error in protectRoute Middleware: ${error.message}`);
  }
};
