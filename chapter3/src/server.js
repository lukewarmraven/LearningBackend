import express from 'express'
import path,{ dirname } from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'

const app = express()
const PORT = process.env.PORT || 1970

// gets the file path from the URL of current module 
const __filename = fileURLToPath(import.meta.url)
// get the directory name of the file path
const __dirname = dirname(__filename)
// tells express to serve all files from the public folder as static asset
// and to know where to resolve css requests - in the public folder
app.use(express.static(path.join(__dirname,'../public')))
app.use(express.json())

// serving up the html file from the public dir
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Server has started at: ${PORT}`)
})