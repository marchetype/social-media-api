const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
  },
  {
    
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets an array of the user's friends
userSchema
.virtual('friendCount')
.get(function() {
    return this.friends.length;
})

// Initialize User model
const User = model('User', userSchema);

module.exports = User;
