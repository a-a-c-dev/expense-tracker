import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Transaction} from './Transaction';


export const TransactionList =React.memo(() => {
    const {transactions} = useContext(GlobalContext);
   
    return(
        <div className='transaction-list-container'>
            <h3>היסטוריה</h3>
            <ul  className="list">
                {transactions.map(transaction=>(
                  <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    )
})