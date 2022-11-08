import React,{useEffect,useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';




export  const Currency =React.memo(() => {
    const { changeCurrency  ,currency} = useContext(GlobalContext);
    const [selectionValue,setSelectionValue] = useState(currency);

    const handleSelectChange = event => {
        const {  value } = event.target;
        setSelectionValue(value);
    };
    useEffect(()=>{
        
        changeCurrency(selectionValue);

    },[selectionValue])
    return (               
        <div className="currency-container"> 
            <label htmlFor="currency-choice">בחר מטבע:</label>
            <select  id="currency-list" defaultValue={selectionValue} onChange={handleSelectChange}>
                <option value="$">$(US-Dollar)</option>
                <option  value="₪">₪(Israeli Shekel)</option>
                <option value="€">€(Euro)</option>
                <option value="£">£(British Pound)</option>
                <option value="¥">¥ (Chinese Yuan)</option>
                <option value="R$">R$(Brazilian real)</option>            
            </select>
        </div>
    )
})