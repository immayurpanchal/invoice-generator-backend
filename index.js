const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get('/products', (req, res) => {
	res.json('Hi' + req.query.q);
});

app.get('/', (req, res) => {
	res.json('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
