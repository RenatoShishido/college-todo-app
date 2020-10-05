const mongoose = require('mongoose')

const AgendaSchema = new mongoose.Schema({
titulo: {
    type: String,
    require: true,
},
descricao: {
    type: String,
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

















