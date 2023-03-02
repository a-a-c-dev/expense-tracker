import React, { useContext,useMemo } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {totalCalculator } from '../utils/calculator';

export const Balance =React.memo(() => {
    const {currency, transactions } = useContext(GlobalContext);
    const total =useMemo(()=> totalCalculator(transactions,currency),[transactions,currency]);
    return(
        <>
            <h3 >המאזן שלך</h3>
            <h1              
                data-test="user-balance"
                className={total<0?'minus':'plus'}>
                    {total<0?`${Number(total).toFixed(2)} ${currency}`:`${currency} ${Number(total).toFixed(2)}`}
            </h1>
        </>
    )
})