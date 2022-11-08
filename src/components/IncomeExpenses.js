import React, {useContext,useMemo } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {expenseCalculator,incomeCalculator } from '../utils/calculator';


export const IncomeExpenses = () => {
    const {transactions,currency} = useContext(GlobalContext)
    const income = useMemo(()=> incomeCalculator(transactions,currency),[transactions,currency]);
    const expense = useMemo(()=> expenseCalculator(transactions,currency),[transactions,currency]);

    return(
        <div className="inc-exp-container">
            <div>
                <h4>הכנסה</h4>
                <p  className="money plus">{
                     `${currency } ${Number(income).toFixed(2)}`
                }</p>
            </div>
            <div>
                <h4>הוצאה</h4>
                <p  className="money minus">
                  {
                  ` ${Number(expense).toFixed(2)} ${currency}`
                  }
                </p>
            </div>
        </div>
    )
}