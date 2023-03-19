import React,{useContext} from 'react';
import { GlobalContext, TransactionType,AppContextType  } from '../context/GlobalState';


export const Transaction = React.memo(({transaction}:{transaction: TransactionType}) => {
    const { deleteTransaction } = useContext<AppContextType>(GlobalContext as React.Context<AppContextType>);
    
    const sign = transaction.amount<0?'-':'';
    
    return (
        <li className={transaction.amount<0?'minus':'plus'}>
            {transaction.text} <span>{sign}{transaction.currency}{Math.abs(transaction.amount)}</span> 
            <button  onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>

    )
})