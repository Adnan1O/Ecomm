const express = require("express")
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get ('/', async (req, res)=>{
    res.send("hellow i aAm adnan")
})
app.post("/pay", async (req,res)=>{
    console.log(req.body.token);
    await stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
    });
});
app.listen(4000);