const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
titulo: {
    type: String,
    require: true,
},
status: {
    type: String,
    default: "Begin"
},
tasks: [{
    titulo: String,
    checkbox: false,
}],
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
},
data : {
    type: Date,
    default: Date.now(),
},
});


const Tasks = mongoose.model("Tasks" , TasksSchema)

module.exports = Tasks;

















