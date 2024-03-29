import { Router } from "express";
import User from '../model/user.js'
const router = new Router();

router.get('/api/users/:user', async (req, res) => {
   const username = req.params.user;

   try {
      const user = await User.findOne({ username: username });
      if (!user) return res.status(404).send({ status: 'error', message: 'User not found!' });

      return res.status(201).send({ status: 'ok', message: 'User found!', userData: user });
   } catch (err) {
      return res.status(500).send({ status: 'error', message: 'Some error occurred!' });
   }
});

router.put('/api/users/:user/password', async (req, res) => {
   const username = req.params.user;
   const newPassword = req.body.newPassword;

   try {
      const user = await User.findOneAndUpdate({ username }, { password: newPassword });
      if (!user) {
         return res.status(404).json({ status: 'error', message: 'User not found' });
      }

      return res.status(200).json({ status: 'success', message: 'Password updated successfully' });
   } catch (error) {
      console.error('Error updating password:', error);
      return res.status(500).json({ status: 'error', message: 'Internal server error' });
   }
});

export default router;