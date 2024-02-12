import mongoose from 'mongoose';

const { Schema } = mongoose;

import bcrypt from "bcrypt";

const SALT_ROUNDS = 8;

const usersSchema = Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        minLength: 3,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 50,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 200
    },
}, {
    timestamps: true,
    //convert to json 
    //transform it by deleting the password from the converted document
    //doc is the incoming doc, incoming from MongoDB
    toJSON: {
        transform: function (doc, retDoc) {
            delete retDoc.password; //removes password from the json doc 
            return retDoc;
        }
    }
});

usersSchema.index({email: 1});
usersSchema.index({username: 1});


//pre-save hook 

usersSchema.pre('save', async function(next) {
    // if the password has not change continue
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

export default mongoose.model('User', usersSchema);