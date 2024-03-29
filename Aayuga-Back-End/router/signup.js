import { Router } from "express";
import User from '../model/user.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const router = new Router();

router.post('/api/signup', async (req, res) => {
   console.log(req.body);

   const { username, email, password, height, weight, bloodGroup } = req.body.formData;
   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(password, salt);
   if (!(username && email && password && height && weight && bloodGroup)) {
      return res.status(400).send({ message: 'Fill all the details' });
   }
   try {
      const newUser = new User({
         username: username,
         email: email,
         password: hashPassword,
         height: height,
         weight: weight,
         bloodGroup: bloodGroup
      });

      const response = await newUser.save();
      const token = jwt.sign({
         id: response._id,
         username: response.username,
         email: response.email
      },
         process.env.JWT_TOKEN_KEY,
         {
            expiresIn: "2h"
         }
      );
      console.log('User created successfully: ', response)
      return res.status(201).json({ status: 'Created!' ,token:token});
   } catch (err) {
      if (err.code === 11000) {
         err.message = 'Username or email already exists!';
      }
      return res.status(400).json({ status: 'error', error: err.message });
   }
});

export default router;