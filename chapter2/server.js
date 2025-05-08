// The address of this server connected to the network is: 
// URL -> http://localhost:1960
// IP -> 127.0.0.1:1960
const express = require('express')
const app = express()
const PORT = 1960

let data = ['raven']

// MIDDLEWARE - tells the app what to expect
app.use(express.json())
app.use(express.static('public'))

// WEBSITE ENDPOINTS - sending back html or website and rendering view
// visual endpoints

// ENDPOINT - HTTP VERBS (methods) AND ROUTES
// this is endpoint number 1
app.get('/', (req,res) => {
    console.log('endpoint 1',req.method)
    res.status(200).send(`
        <body 
        style="background: pink;color: blue;">
        <h1>DATA: </h1>
            <p>${JSON.stringify(data)}</p>

            <input type="text" id="nameInput" placeholder="Enter name" />
            <a href="/dashboard">Dashboard</a> 
            <button onclick="addData()">ADD</a> 
            <button onclick="deleteData()">DELETE</a> 
            <script src="/script.js"></script>
        </body>
        `)
})

// dashboard
app.get('/dashboard',(req,res) => {
    console.log('endpoint 2')
    res.status(200).send(`<h1>Dashboard</h1>
        <a href="/">Home</a> 
        `)
})

// API ENDPOINTS - sending data to the api
// non-visuaal endpoints
app.get('/api/data',(req,res) => {
    console.log('endpoint 3')
    res.send(data)
})

// post 
app.post('/api/data', (req,res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201) // CREATED
})

// delete
app.delete('/api/data',(req,res) => {
    data.pop()
    console.log('Deleted entry')
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
