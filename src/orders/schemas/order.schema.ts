import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import * as mongoose from 'mongoose';

export type OrderDocument = Order & HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({
    required: true,
  })
  userName: string;
  //write @Props for stockCode, name, color, size, personalization, note, file, status
  @Prop({
    required: true,
  })
  stockCode: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  color: string;

  @Prop({
    required: true,
  })
  size: string;

  @Prop({
    required: true,
  })
  personalization: string;

  @Prop({
    required: true,
  })
  note: string;

  @Prop({
    required: true,
  })
  file: string;

  @Prop({
    required: true,
  })
  status: string;

  @Prop({
    required: true,
  })
  quantity: number;

  @Prop({
    required: true,
  })
  price: number;

  @Prop({
    default: Date.now, // set Date.now as the default value
  })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
