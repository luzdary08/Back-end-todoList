import mongoose, { Document, model } from 'mongoose';

export interface statusSchemaType extends Document{
    name:string
}

const statusSchema = new mongoose.Schema({
  name: String
});

export const Status = model<statusSchemaType>('Status', statusSchema);