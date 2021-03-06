const mongoose = require('mongoose');
const { ObjectID } = require('mongodb')


const ReservationSchema = new mongoose.Schema({
	resvUserName: {
		type: String,
		required: true,
		trim: true,
	},
	resvRestaurantName: {
    	type: String,
    	required: true,
    	trim: true
    },
    resvTime: {
    	type: String,
    	required: true,
    	trim: true
    },
    resvPeople: {
    	type: Number,
    	required: true,
    	default: 1
    },
    resvDate: {
    	type: String,
    	require: true,
    	trim: true
    },
    resvEmail: {
        type: String,
        trim: true
    },
    resvId: ObjectID
});


module.exports = ReservationSchema;