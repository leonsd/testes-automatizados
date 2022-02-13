import { Request, Response } from "express";
import { User as UserModel } from '../models/User';

export class User {
  static getInstance() {
    return new User();
  }

  async create(req: Request, res: Response) {
    const user = await UserModel.create({ name: 'Leonardo ' });
    res.status(201).json(user);
  }
}
