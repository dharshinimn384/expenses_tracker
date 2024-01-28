import React,{useContext} from "react"
import { GlobalContext } from "./GlobalState"
function Balance()
{
  const {transaction} = useContext(GlobalContext);
  const amounts = transaction.map(transaction=>transaction.amount);
  const total =amounts.reduce((acc,item) => acc+=item,0).toFixed(2)
    return(
        <>
          <h4> Your Balance</h4>
          <h4>${total}</h4>
        </>
    )
}
export default Balance