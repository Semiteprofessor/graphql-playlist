const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const app = express()
const PORT = 4000


const cors = require('cors');

app.use(cors())

mongoose.connect('mongodb+srv://semiteprofessor:tayelolu@cluster0.q3tb7.mongodb.net/graphql-playlist?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('Connected to Mongoose database');
})

// Middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen({ port: PORT}, () => console.log(`Listening for request on http://localhost:${PORT}`))