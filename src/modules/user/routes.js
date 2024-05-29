import express from 'express';
import SignInUser from './controllers/add-user.js';
import GetAllUsers from './controllers/get-all-users.js';

const authRoutes = express();

authRoutes.post('/sign-in', SignInUser);
authRoutes.get('/get-all-users', GetAllUsers);

export default authRoutes;