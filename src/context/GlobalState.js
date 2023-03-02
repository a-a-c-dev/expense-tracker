import React,{ createContext, useEffect, useReducer} from 'react';
import AppReducer from './AppReducer';
import LocalStorageManager from "../utils/LocalStorageManager";

const storageTransaction = LocalStorageManager.get("transactions")?? [
    {id:1, text:'פרחים', amount:-20,currency:'₪'},
    {id:2, text:'משכורת', amount:300, currency:'$'} ,
    {id:3, text:'טלפון', amount:-200 , currency:'€'} 
];
const storageCurrency = LocalStorageManager.get("currency")??'$';
const initialState = {
    currency: storageCurrency,
    transactions:storageTransaction
}


export const GlobalContext = createContext(initialState);



export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    useEffect(()=>{
        LocalStorageManager.set("transactions", JSON.stringify(state.transactions));
    },[state.transactions])
    useEffect(()=>{
        LocalStorageManager.set("currency", state.currency);
    },[state.currency])

    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }
    function changeCurrency(currency) {
        dispatch({
            type:'CHANGE_CURRENCY',
            payload:currency
        });
    }
    return(<GlobalContext.Provider value={{
                transactions:state.transactions,
                currency:state.currency,
                deleteTransaction,
                addTransaction,
                changeCurrency
            }}>
                {children}
            </GlobalContext.Provider>);
}