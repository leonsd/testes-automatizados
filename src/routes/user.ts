import express from 'express';
import { User } from '../controllers/User';

const Router = express.Router();
const user = User.getInstance();

Router.post('/users', user.create);

export default Router;
