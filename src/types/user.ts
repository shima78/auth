import { Document } from 'mongoose';
//this is same as domain I guess
export interface User extends Document {
  email: string;
  password: string;
}
