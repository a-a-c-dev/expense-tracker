import React, {useContext} from 'react';
import { GlobalContext ,AppState, TransactionType} from '../context/GlobalState';
import {Transaction} from './Transaction';


export const TransactionList =React.memo(() => {
    const {transactions} = useContext<AppState>(GlobalContext);
   
    return(
        <div className='transaction-list-container'>
            <h3>היסטוריה</h3>
            <ul  className="list">
                {transactions.map((transaction:TransactionType)=>(
                  <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    )
})