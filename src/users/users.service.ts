import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(name: string, password: string) {
    const createdUser = new this.userModel({ name, password });
    return createdUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: number) {
    return this.userModel.findOne({ _id: id }).exec();
  }

  async findOneByName(name: string) {
    return this.userModel.findOne({ name }).exec();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: id }, updateUserDto).exec();
  }

  remove(id: number) {
    return this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
