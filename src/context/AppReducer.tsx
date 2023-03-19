import { AppState,TransactionType } from "./GlobalState"

export type ACTIONTYPE = 
| {type: 'DELETE_TRANSACTION'; payload:number}
| {type:'ADD_TRANSACTION'; payload:TransactionType}
| {type:'UPDATE_TRANSACTION'; payload:TransactionType}
| {type:'CHANGE_CURRENCY'; payload:string}


export default (state:AppState,action:ACTIONTYPE) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION': 
            return {
                ...state,
                transactions: state.transactions.filter((transaction:TransactionType) => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
            case 'UPDATE_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        case 'CHANGE_CURRENCY':
            return{
                ...state,
                currency:action.payload
            }
        default:
             return state
    }
}