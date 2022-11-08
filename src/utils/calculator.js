const dollarSign='$';
const euroSign="€";
const poundSign="£";
const yuanSign="¥";
const realSign = 'R$';
const dollarRate = 3.5690; 
const euroRate = 3.4824;
const poundRate = 3.4824;
const yuanRate = 0.49;
const realRate = 0.70


const currencyCalculator = (amounts,currency) => {
    switch(currency){      
        case dollarSign:  return amounts.reduce((acc,val)=>(acc+=+val),0)/dollarRate.toFixed(2);
        case poundSign:  return amounts.reduce((acc,val)=>(acc+=+val),0)/poundRate.toFixed(2);
        case yuanSign:  return amounts.reduce((acc,val)=>(acc+=+val),0)/yuanRate.toFixed(2);
        case realSign:  return amounts.reduce((acc,val)=>(acc+=+val),0)/realRate.toFixed(2);
        case euroSign: return  (amounts.reduce((acc,val)=>(acc+=+val),0)/euroRate).toFixed(2);
        default: return   amounts.reduce((acc,val)=>(acc+=+val),0).toFixed(2);
        
    }
}
const amountsCalculator = transactions =>{
    return transactions.map(transaction=>{
        switch(transaction.currency){   
                case dollarSign: return(transaction.amount*dollarRate).toFixed(2);        
                case poundSign:  return(transaction.amount*poundRate).toFixed(2);
                case yuanSign:  return(transaction.amount*yuanRate).toFixed(2)
                case realSign: return(transaction.amount*realRate).toFixed(2)
                case euroSign:return (transaction.amount*euroRate).toFixed(2)            
                default:return  transaction.amount
            }
        })
}
const totalCalculator = (transactions,currency) =>{
        let totalAmount = amountsCalculator(transactions);
       return currencyCalculator(totalAmount,currency)
}
const expenseCalculator = (transactions,currency) =>{
    let totalAmount = amountsCalculator(transactions).filter(amount=>amount<0);
      return currencyCalculator(totalAmount,currency)
}
const incomeCalculator = (transactions,currency) =>{
    let totalAmount = amountsCalculator(transactions).filter(amount=>amount>0);
   return currencyCalculator(totalAmount,currency)
}


   
   

module.exports = {
    totalCalculator,
    expenseCalculator,
    incomeCalculator
  };