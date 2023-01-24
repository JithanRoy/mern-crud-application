const mongoose = require('mongoose');
const { string } = require('yup/lib/locale');
const Schema = mongoose.Schema;


let studentSchema = new Schema({
    name: {
        type: string
    },
    email: {
        type: string
    },
    rollno: {
        type: Number
    }
}, {
    collection:'students'
})

module.exports = mongoose.model('student', studentSchema)