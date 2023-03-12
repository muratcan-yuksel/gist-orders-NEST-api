import { Injectable, StreamableFile } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { OrderDocument, Order } from './schemas/order.schema';
import { Model } from 'mongoose';
import { createReadStream, readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  create(createOrderDto: CreateOrderDto, file: string) {
    // here you can access the uploaded file using the 'file' parameter
    // and attach it to the order object before saving it to the database
    const order = { ...createOrderDto, file };
    return this.orderModel.create(order);
  }

  findAll() {
    return this.orderModel.find().exec();
  }

  async getFile(id: string): Promise<StreamableFile> {
    const order = await this.findOne(id);
    const file = createReadStream(join(process.cwd(), order.file));
    return new StreamableFile(file);
  }

  findOne(_id: string) {
    return this.orderModel.findOne({ _id }).exec();
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
