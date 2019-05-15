import jwt from "express-jwt";

export default jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
  getToken: req => {
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer" //1
    ) {
      return req.headers.authorization.split(" ")[1]; // token//2
    }
    return null;
  }

  
});