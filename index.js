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

app.get('/products', async (req, res) => {
	const { data, error } = await supabase.from('products').select('*').ilike('product_name', `%${req.query.q}%`);

	res.status(200).json({ data, error });
});

app.get('/customers', async (req, res) => {
	let { data, error } = await supabase.from('customers').select('*');
	res.status(200).json({ data, error });
});

app.get('/', (req, res) => {
	res.status(200).json('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
