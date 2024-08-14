const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT ||3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'a3q3.html'));
});

app.post('/submit', (req, res) => {
    const { name, phone } = req.body;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (phoneRegex.test(phone)) {
        res.send(`Thank you, ${name}. Your phone number ${phone} is valid.`);
    } else {
        res.send(`Sorry, ${name}. The phone number ${phone} is not in the correct format.`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
