import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  const authorizationHeaders = req.headers["authorization"];
  const token = authorizationHeaders.split(" ")[1];
  if (!token) res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    console.log(err, data);
  });
  next();
};

export const isAdmin = (req, res, next) => {
  if (req.profile.role == 0) {
    return res.status(402).json({
      message: "Bạn không phải là admin",
    });
  }
  next();
};
