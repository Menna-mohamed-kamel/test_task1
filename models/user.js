const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(val) {
                // Regular expression for email validation
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    age: {
        type: Number,
        required: true
    },
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
    eventStatus: {
        type: String,
        enum: ['interested', 'going', 'not interested', 'booked'], 
        default: 'interested' 
    },
    accountStatus: {
        type: String,
        enum: ['active', 'inactive', 'suspended'], 
        default: 'active' 
    },
});

const User = mongoose.model('User',userSchema);

module.exports = {User, };
