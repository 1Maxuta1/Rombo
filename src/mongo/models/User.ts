import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  fullName: string;
  password: string;
  googleId?: string;
  bio : string;
  senderId: string;
}

const userSchema = new Schema<IUser>(
  {
  email: {
    type: String,
    unique: true,
    required: [true, 'Please enter an email'],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email'],
  },
  fullName: {
    type: String,
    required: [true, 'Please enter a full name'],
    select: true,
    minLength: [3, 'Name must be at least 3 characters long'],
    maxLength: [32, 'Name cannot be more than 32 characters long'],
  }, 
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minLength: [6, 'Password must be at least 6 characters long'],
    select: true,
  },
  googleId: {
    type: String,
    select: true,
  },
  bio: {
    type: String,
    default: '',
  },
}, {
  query:{
    byEmail: function (email: string) {
      return this.where({ email });
    },
  }
});


const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
