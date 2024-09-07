// jwtMiddleware.js
import jwt from 'jsonwebtoken';


export const generateAccessToken = (newUser) => {
  return jwt.sign(
      {
          id: newUser._id,
          username: newUser.username,
      },
      process.env.JWT_SECRET,
      {
          expiresIn: '1d',
      }
  );
};