import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import UserModel from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export const signupController = async (req, res) => {
  const user = await UserModel.findOne({ username: req.body.username });
  if (user) {
    console.log('username not available')
    return res.status(400).send('Username not available');
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new UserModel({ username: req.body.username, password: hashedPassword });
    const savedUser = await newUser.save();
    const query = `
    mutation {
      createUser(user: {
        user: "${req.body.username}",
        email: "${req.body.email}",
      }) {
        user
      }
    }
    `;
    const accessToken = jwt.sign(
      { username: req.body.username },
      jwtSecret,
      { expiresIn: "1m" }
    );
    await axios.post(process.env.RESOURCE_SERVER || 'http://localhost:5000/graphql',
      { query },
      { headers: 
        { 'Authorization': `Bearer ${accessToken}` }
      });
    res.sendStatus(201);
    console.log('User created');
  } catch (e) {
    res.sendStatus(500);
  }
};

export const loginController = async (req, res) => {
  const user = await UserModel.findOne({ username: req.body.username });
  if (!user) {
    console.log('User not found')
    return res.sendStatus(400);
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { username: req.body.username },
        jwtSecret,
        { expiresIn: "1d" }
      )
      res.status(200).header('metanetauth', accessToken).send('Logged in');
    } else {
      console.log('Wrong password');
      res.status(400).send('Wrong password');
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).send();
  }
};