const express =  require("express")
const app = express()
const port = 8000
const sendMail = require("./controler/control")
app.get("/", (req,res) => {
    res.send("Hello World")
} )

app.get("/mail",sendMail)

app.get







app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})