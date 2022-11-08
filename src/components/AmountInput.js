import React from 'react';

export const AmountInput =({amount, validAmount, amountRequired, handleChange})=>{
    return(
        <div className='input-container'>
            <label htmlFor="amount">סכום</label>
            <input  type="number"  name="amount" value={amount}  onChange={event=>handleChange(event.target.name, event.target.value)}  placeholder="הכנס סכום עסקה..."/>
            {amountRequired?(<p className="error">{amountRequired}</p>):validAmount?(<p className="error">{validAmount}</p>):null }
        </div>
    )
}