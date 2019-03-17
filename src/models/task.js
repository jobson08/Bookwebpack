const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required:true }

});

module.exports = mongoose.model('Task', TaskSchema );