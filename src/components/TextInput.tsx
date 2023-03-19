import React from 'react';

interface TextInputProps {
    text:string,
    validText?:string,
    textRequired?:string,
    handleChange:(name:string, value:string)=>void
}

export const TextInput =({text, validText, textRequired, handleChange}:TextInputProps)=>{
    return(
        <div className='input-container'>
            <label htmlFor="text">שם עסקה</label>
            <input type="text" name="text" value={text} onChange={event=>handleChange(event.target.name, event.target.value)}   placeholder="שם עסקה..."/>
            {textRequired?(<p className="error">{textRequired}</p>):validText?(<p className="error">{validText}</p>):null}
        </div>
    )
}
