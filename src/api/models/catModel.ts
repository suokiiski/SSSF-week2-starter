import mongoose from 'mongoose';
import {Cat} from '../../types/DBTypes';

const catSchema = new mongoose.Schema({
  cat_name: {type: String, required: true},
  weight: {type: Number, required: true},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  filename: {type: String},
  birthdate: {type: Date, required: true},
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    },
  },
});

const catModel = mongoose.model<Cat>('Cat', catSchema);
export default catModel;