import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  User,
  UserDocument,
} from '@src/users/models/user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userModel.create(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async findByID(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }
}