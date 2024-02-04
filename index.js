import express from 'express'
import { create } from 'express-handlebars'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import flash from "connect-flash"

// routes
import authRoutes from './routes/auth.js'
import productsRoutes from './routes/products.js'
dotenv.config()

const app = express()
const url = process.env.MONGO_URL || " " 

const hbs = create({
    defaultLayout: "main",
    extname: "hbs"
})


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())
app.use(flash())

app.use(authRoutes)
app.use(productsRoutes)


const startApp = () => {
	try {
		mongoose.set('strictQuery', false)
		mongoose.connect(url, {useNewUrlParser: true}, () => console.log('Mongo DB connected'))

		const PORT = process.env.PORT || 3000
		app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

startApp()
//mongodb+srv://akbarali:<password>@cluster0.3wgy2t8.mongodb.net/?retryWrites=true&w=majority