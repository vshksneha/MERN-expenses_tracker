const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    //! Get the token from the header
    const headerObj = req.headers;
    const token = headerObj?.authorization?.split(" ")[1];

    if (!token) {
      // No token provided
      throw new Error("No token provided");
    }

    //! Verify the token
    const decoded = jwt.verify(token, "synckey");

    //! Save the user ID to the req object
    req.user = decoded.id;
    next();
  } catch (err) {
    // Handle token verification errors (e.g., expired, invalid token)
    if (err.name === "TokenExpiredError") {
      res.status(401).json({ message: "Token expired, login again" });
    } else if (err.name === "JsonWebTokenError") {
      res.status(401).json({ message: "Invalid token" });
    } else {
      res.status(500).json({ message: "Authentication failed" });
    }
  }
};

module.exports = isAuthenticated;
