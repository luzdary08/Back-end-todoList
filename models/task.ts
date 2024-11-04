import mongoose, { model, PopulatedDoc, Types } from 'mongoose';
import { Status, statusSchemaType } from './status';

interface taskSchemaType extends Document{
  description:string
  status: PopulatedDoc<statusSchemaType>
  completed:boolean
}

const taskSchema = new mongoose.Schema({
  description: String,
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status'
},
completed: {
    type:Boolean,
    default:false
}

});


export const Task = model<taskSchemaType>('Task', taskSchema);