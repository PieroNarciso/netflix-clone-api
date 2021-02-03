import { DataTypes, Model } from 'sequelize';

import { IUser, IUserModel } from '../interfaces/user.interface';
import db from '../db';


class User extends Model<IUser, IUserModel> implements IUser {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: 3
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8
      }
    }
  },
  {
    tableName: 'users',
    sequelize: db
  }
);


export { User };
