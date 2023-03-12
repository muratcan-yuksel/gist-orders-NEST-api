import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = User & HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({
    required: true,
    minlength: 6,
    maxlength: 50,
  })
  password: string;

  @Prop({
    default: Date.now, // set Date.now as the default value
  })
  date: Date;

  @Prop({
    default: false,
  })
  isAdmin: boolean;

  @Prop({
    default: 0,
  })
  toPay: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
