const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
titulo: {
    type: String,
    require: true,
},
data : {
    type: Date,
    default: Date.now(),
},
});


const Tasks = mongoose.model("Tasks" , TasksSchema)

module.exports = Tasks;

















