const express = require ('express');
const morgan = require('morgan');
const path = require('path')

const { mongoose } = require('./database');

const app = express();

//Sentings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks' ,require('./routes/task.routes'));

//Setatic files
app.use(express.static(path.join(__dirname, 'public')));

//starta o sevidor
app.listen(app.get('port'), () =>{
    console.log(`Sevidor na porta ${app.get('port')}`);
});