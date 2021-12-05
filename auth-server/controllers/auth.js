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
    const response = await axios.post('http://localhost:5000/graphql', { query });
    res.status(201).json(savedUser);
    console.log('User created')
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const loginController = async (req, res) => {
  const user = await UserModel.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).send('Wrong username');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {

      const accessToken = jwt.sign(
        { username: req.body.username },
        jwtSecret,
        { expiresIn: "15m" }
      )
      res.status(200).header('metanetauth', accessToken).send('Logged in');
    } else {
      res.status(400).send('Wrong password');
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).send();
  }
};