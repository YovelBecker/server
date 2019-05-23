const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello from Express!')
})

app.listen(port, (err) => {
    if (err) {
        console.log('ERROR:', err)
        return 'something bad happened'
    }
    console.log(`server is listening on port ${port}!`)
})