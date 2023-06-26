import express from 'express';
import { addUser, getUser, getUsers, upDateUser } from '../controllers/users.controller.js';
import checkUserByEmail from '../middleware/checkUserByEmail.js';
import checkUserByID from '../middleware/checkUserByID.js';

const userRoutes = express.Router();

userRoutes.get('/users', getUsers);
userRoutes.get('/users/:id', getUser);

userRoutes.post('/users', checkUserByEmail, addUser);
userRoutes.post('/users/update/:id', checkUserByID, upDateUser);

export default userRoutes;
