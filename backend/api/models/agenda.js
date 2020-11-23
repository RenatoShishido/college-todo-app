const mongoose = require('mongoose')

const AgendaSchema = new mongoose.Schema({
titulo: {
    type: String,
    require: true,
},
descricao: {
    type: String,
},
status: {
    type: String,
    default: "Agenda"
},
tasks: [{
    titulo: String,
}],
data : {
    type: Date,
    default: Date.now(),
},
});


const Agenda = mongoose.model("Agenda" , AgendaSchema)

module.exports = Agenda;

















