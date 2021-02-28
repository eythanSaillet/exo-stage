require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

// Connect to the DB
const knex = require('knex')({
	client: 'mysql',
	connection: {
		connectionString: process.env.DATABASE_URL,
	},
})

// Setup routes

app.post('/post', async function (req, res) {
	try {
		await knex.raw(`INSERT INTO restaurant VALUES ('${_name}', '${_photo}', '${_type}', '${_adress}', '${_pictos}')`)
	} catch (err) {
		return res.status(400).json(err)
	}
	return res.status(200)
})

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})
