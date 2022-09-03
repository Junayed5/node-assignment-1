const express = require('express');
const cors = require('cors');
const fs = require('fs');
const router = require('./routes/user.route');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/user', router)



app.get('/', (req,res) => {
    res.send("Hello world!!")
})

app.listen(port, () => {
    console.log(`listening ${port}`);
})