import { Sequelize } from 'sequelize-typescript';
import config from '../config/database';
import { User } from './User';

const sequelize = new Sequelize({ ...config, dialect: config.dialect as any });

sequelize.addModels([User]);
