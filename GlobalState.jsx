import React,{createContext,useReducer,Appreducer} from "react"; 

const initialState = {
    transaction:[
        {id : 1,text : "flower",amount : -20},
        {id : 2,text : "salary",amount : 20},
        {id : 3,text : "book",amount : 150},
        {id : 4,text : "CAMERA",amount : -70}
    ],
    
}
export const GlobalContext = createContext
(initialState)
export const GlobalProvider  = ({children})=>
{
    const[state,dispatch] =useReducer(Appreducer,initialState);
    function deleteTransaction(id)
    {
        dispatch({
            type:"DELETE_TRANSACTION",
            payload : id,
        })
    }
    return(<GlobalContext.Provider value={{transaction:state.transaction,deleteTransaction}}>
        {children}
    </GlobalContext.Provider>)
}
