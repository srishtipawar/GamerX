import React,{useState,useEffect} from 'react'
import axios from "../axios"
import "./Payment.css"
import { useStateValue } from "../StateProvider";
import CartProduct from "./CartProduct";
import {Link} from "react-router-dom"
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from "../reducer"
import { useHistory } from "react-router-dom";
import {db} from "../firebase"
function Payment() {
  const history = useHistory();
  const [{ basket,user}, dispatch] = useStateValue();
  const [error,setError]=useState(null)
  const [disabled,setDisabled]=useState(true)
  const [processing,setProcessing]=useState("")
  const [succeeded,setSucceeded]=useState(false)
  const [clientSecret,setClientSecret]=useState("")
  //const [{ basket, user }, dispatch] = useStateValue();
  const [address,setAddress]=useState("")

  useEffect(() => {
    // generate speacial stripe secret which allows us to charge a customer
    const getClientSecret=async()=>{
      const response=await axios({
        method:"post",
        //Stripe expects the total in currencies submits
        url:`/payments/create?total=${getBasketTotal(basket)*100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])

  console.log("The secret is>>>>",clientSecret)

  const stripe=useStripe()
  const elements=useElements()

  const handleSubmit=async (event)=>{
    event.preventDefault()
    setProcessing(true)
    const payload=await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      //paymentIntent = payment confirmation

      db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
          basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created
        })
      setSucceeded(true)
      setError(null)
      setProcessing(false)
      dispatch({
        type:"EMPTY_BASKET"
      })
      history.replace('/orders')
    })

  }
  const handleChange=event=>{
    // listen to
    setDisabled(event.empty)
    setError(event.error?event.error.message:"")
  }
  

  user?(
    db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((docRef) => {
      // console.log(user)
      setAddress(docRef.data().address)
    })
    .catch((error) => { })):console.log("USER DOES not exists")

    console.log(address)
  

  return (
    <div className="payment">
      
      <div className='payment__container'>
        <h1>
          Checkout {
            <Link to="/checkout">{basket?.length} items</Link>}
        </h1>
        {/* Pyment sectin-delievry address */}
        
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <h5>{address}</h5>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
          {basket.map((item, ind) => (
              <CartProduct
                key={ind}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                subtitle={item.subtitle}
              />
            ))}
            
          </div>
        </div>

        {/* Payment section- Review Items */}

        {/* Payment section - Payment section id */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                  <>
                    <h3>Order Total:{value}</h3>
                  </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  thousandSeperator={true}
                  displayType={"text"}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing?<p>Processing</p>:"Buy Now"}
                  </span>
                </button>
              </div>
              {error&&<div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
