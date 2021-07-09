import React from "react";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import {Link,useHistory} from "react-router-dom"

function Subtotal() {
  const [{ basket,user }, dispatch] = useStateValue();
  const history=useHistory();
  

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
              {console.warn(value)}
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeperator={true}
        displayType={"text"}
        prefix={"₹"}
      />
      {user&&<a class="waves-effect btn blue lighten-1 " onClick={e=>history.push('/payment')}>Proceed to checkout</a>}  
      
    </div>
  );
}

export default Subtotal;
