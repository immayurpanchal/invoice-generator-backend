const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

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
