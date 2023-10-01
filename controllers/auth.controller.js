import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import nodemailer from "nodemailer";
import ejs from "ejs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from "path";

const transporter = nodemailer.createTransport({
  host: process.env.SMPT_HOST,
  port: process.env.SMPT_PORT,
  service: "gmail",
  auth: {
    user: "worldofhustles@gmail.com",
    pass: "tewcczqvepiskpbm",
  },
});

export const signup = async (req, res, next) => {
  const { username, email: userEmail, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email: userEmail, password: hashedPassword });

  try {
    const currentModuleURL = import.meta.url;
    const currentModulePath = fileURLToPath(currentModuleURL);
    const currentDir = dirname(currentModulePath);


    // const templatePath = path.join(currentDir, "../mails", template);
    // const html = await ejs.renderFile(templatePath, data);

    var mailOptions = {
      from: "worldofhustles@gmail.com",
      to: userEmail,
      subject: `Hello, welcome ${username} to Nwplus Tv. Click the link to login`,
      html: '<a href="https://nwplustv.netlify.app/sign-in">Login Link</a>',
    };
    

    await transporter.sendMail(mailOptions);
    console.log(transporter);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};




export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout success!');
};
