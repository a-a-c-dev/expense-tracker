import React from 'react';

export const TextInput =({text, validText, textRequired, handleChange})=>{
    return(
        <div className='input-container'>
            <label htmlFor="text">שם עסקה</label>
            <input type="text" name="text" value={text} onChange={event=>handleChange(event.target.name, event.target.value)}   placeholder="שם עסקה..."/>
            {textRequired?(<p className="error">{textRequired}</p>):validText?(<p className="error">{validText}</p>):null}
        </div>
    )
}
