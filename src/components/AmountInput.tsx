import React from 'react';

interface AmountInputProps {
    amount:number,
    validAmount?:string,
    amountRequired?:string,
    handleChange:(name:string , value:string)=>void
}

export const AmountInput =({amount, validAmount, amountRequired, handleChange}:AmountInputProps)=>{
    return(
        <div className='input-container'>
            <label htmlFor="amount">סכום</label>
            <input  type="number"  name="amount" value={amount}  onChange={event=>handleChange(event.target.name, event.target.value)}  placeholder="הכנס סכום עסקה..."/>
            {amountRequired?(<p className="error">{amountRequired}</p>):validAmount?(<p className="error">{validAmount}</p>):null }
        </div>
    )
}