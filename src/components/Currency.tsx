import React,{useEffect,useState,useContext} from 'react';
import { GlobalContext ,AppContextType} from '../context/GlobalState';



export  const Currency =React.memo(() => {
    const { changeCurrency  ,currency} = useContext<AppContextType>(GlobalContext as React.Context<AppContextType>);
    const [selectionValue,setSelectionValue] = useState(currency);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {  value } = event.target;
        setSelectionValue(value);
    };
    useEffect(()=>{
        
        changeCurrency(selectionValue);

    },[selectionValue])
    return (               
        <div className="currency-container"> 
            <label htmlFor="currency-choice">בחר מטבע:</label>
            <select  id="currency-list" defaultValue={selectionValue} onChange={e=> handleSelectChange(e)}>
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