import React,{useState,useEffect} from 'react'
import './Orders.css'
import {db} from "../firebase"
import {useStateValue} from "../StateProvider"
import Order from "../components/Order"
function Orders() {

  const [{basket,user},dispatch]=useStateValue()
  const [orders,setOrders]=useState()
  const [address,setAddress]=useState("")

  useEffect(()=>{
    if(user)
    {

      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created','desc')
      .onSnapshot(snapshot =>{
        setOrders(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        })))
      })
    }
    else{
      setOrders([])
    }
  },[user])

  user?(
    db
    .collection("users")
    .doc(user.uid)
    .get()
    .then((docRef) => {
      setAddress(docRef.data().workplace)
    })
    .catch((error) => { })):console.log("USER DOES not exists")

  return (
    <div className="grey lighten-5 orders">
      <h1>Your orders</h1>      

      <div className="orders__order">
        {orders?.map(order=>(
          <Order order={order} ad={address} />
        ))}
      </div>
    </div>
  )
}

export default Orders
