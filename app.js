// Usando Objeto express 
const express = require('express')
//App de Express
const app = express()
// Puerto en el que se va a ver la app: localhost: 3000
const port = 3000

// path inicial, respondera a la url localhost: 3000
app.get('/', (req, res) => {
    res.send("Hello world my dear explorer Lucero 💞!!!")
})

// Respondiendo texto
// localhots:3000/launchX
app.get('/launchx', (req, res) => {
    res.send('Welcome to LaunchX! 🍀')
})

// Regresando un objeto
// Localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg:"Hello"}
    res.send(explorer)
})


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})