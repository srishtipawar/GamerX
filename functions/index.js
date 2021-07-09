const functions = require('firebase-functions');
const express=require("express")
const cors=require("cors")
const stripe=require("stripe")("sk_test_51HtqcoILO5wYEeKP844ZYffUsZXRWHxn33zMe8Ig5huusjmhNHyGXI4M8LZ8HGBmIsLmI58msRihl5SQcdQEJHeK00b1GHPEGv")

// API


//App config
const app=express()

// Middleware
app.use(cors({ origin:true }))
app.use(express.json())

// API routes

app.get('/',(req,res)=>res.status(200).send('Hello World'))
app.get('/sand',(req,res)=>res.status(200).send('Hello sand'))

app.post('/payments/create',async(request,response)=>{
  const total=request.query.total;
  if (total!=0)
  {console.log("Payment request received for this amount>>>>",total)
  const paymentIntent=await stripe.paymentIntents.create({
    amount:total,
    currency:"inr",
  })

  response.status(201).send({
    clientSecret:paymentIntent.client_secret,
  })
  }  
})

// Listen command
exports.api=functions.https.onRequest(app)



