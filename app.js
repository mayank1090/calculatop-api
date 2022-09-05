const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json({extended:false}))





app.post("/add", (req, res) => {

    
    const n1 = Number(req.body.num1);

    const n2 = Number(req.body.num2);

    if(isNaN(n1) || isNaN(n2)){
        res.statusMessage="Error";
        res.status(400).send("Invalid data types")
    }

    if(n1 < -1000000 || n2 < -1000000){

        res.status(400).send("Underflow")
    }

    if (n1 > 1000000 || n2 > 1000000){
        res.status(400).send("Overflow")
    }

    else{
    const add = n1 + n2;
    res.statusMessage="success";
    res.status(200).send(`the sum of given two numbers 
    sum: ${add}
    `)}
});



app.post("/sub", (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
   

    if(isNaN(n1) || isNaN(n2)){
        res.statusMessage="Error";
        res.status(400).send("Invalid data types")
    }

    if(n1 < -1000000 || n2 < -1000000){

        res.status(400).send("Underflow")
    }

    if (n1 > 1000000 || n2 > 1000000){
        res.status(400).send("Overflow")
    }

    else{
        const sub = n1 - n2;
        res.statusMessage="success";
        res.status(200).send(`the subtration of given two numbers 
        subtraction: ${sub}
        `)}
    });
;


app.post("/multiply", (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);
    if(isNaN(n1) || isNaN(n2)){
        res.statusMessage="Error";
        res.status(400).send("Invalid data types")
    }

    if(n1 < -1000000 || n2 < -1000000){

        res.status(400).send("Underflow")
    }

    if (n1 > 1000000 || n2 > 1000000){
        res.status(400).send("Overflow")
    }

    else{
        const mul = n1 * n2;
        res.statusMessage="success";
        res.status(200).send(`the multiplication of given two numbers 
        multiplication: ${mul}
        `)}

});


app.post("/divide", (req, res) => {
    const n1 = Number(req.body.num1);
    const n2 = Number(req.body.num2);

    if (n2===0){
        res.statusMessage="Error"
        res.status(400).send("Cannot divide by Zero")
    }
    
    if(isNaN(n1) || isNaN(n2)){
        res.statusMessage="Error";
        res.status(400).send("Invalid data types")
    }

    if(n1 < -1000000 || n2 < -1000000){

        res.status(400).send("Underflow")
    }

    if (n1 > 1000000 || n2 > 1000000){
        res.status(400).send("Overflow")
    }

    else{
        const divide = n1/n2;
        res.statusMessage="success";
        res.status(200).send(`the division of given two numbers 
        division: ${divide}
        `)}
});


app.listen(3002, (req, res) => {
    console.log("Server is running at port 3002")
});


