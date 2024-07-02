import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'
//template engine
app.set('view engine', 'ejs')

//load routes
app.use('/', web);

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})