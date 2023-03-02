import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = React.memo(({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const sign = transaction.amount<0?'-':'';
    
    return (
        <li className={transaction.amount<0?'minus':'plus'}>
            {transaction.text} <span>{sign}{transaction.currency}{Math.abs(transaction.amount)}</span> 
            <button  onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>

    )
})