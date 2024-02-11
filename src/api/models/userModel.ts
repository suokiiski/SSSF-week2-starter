import mongoose from 'mongoose';
import {User} from '../../types/DBTypes';

const userSchema = new mongoose.Schema({
  user_name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
    role: {enum: ['user', 'admin'], type: String, required: true},
});

const userModel = mongoose.model<User>('User', userSchema);
export default userModel;