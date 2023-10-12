import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minLength: 6,
        select: false
    },
    counter: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Pre-hook to persist encypted password
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare with hashed password
UserSchema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default model('User', UserSchema);
