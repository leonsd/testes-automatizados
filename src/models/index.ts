import { Sequelize } from 'sequelize-typescript';
import config from '../config/database';
import { UserModel } from './User';

const sequelize = new Sequelize({ ...config, dialect: config.dialect as any });

sequelize.addModels([UserModel]);
