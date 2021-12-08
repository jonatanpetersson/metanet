import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;
const protectedResources = /getUserByUsername|createParcel|createUser|getOffersByUsername|createOffer|updateOfferById/;

export const isAuthorized = (req, res, next) => {
  const requestQuery = req.body.query;
  const needsVerification = protectedResources.test(requestQuery);
  if (!needsVerification) {
    console.log('Requesting public resource - authorized without accesstoken');
    return next();
  }
  if (!req.headers.authorization) {
    console.log('No accesstoken provided, unauthorized request');
    return res.sendStatus(401);
  }
  const accessToken = req.headers.authorization.split(' ')[1];
  jwt.verify(accessToken, jwtSecret, (err, decoded) => {
    if (err) {
      console.log('Unauthorized, bad accesstoken: ', err.message);
      return res.sendStatus(403);
    }
    console.log('Authorized request, verified accesstoken: ', decoded);
    next();
  });
}
