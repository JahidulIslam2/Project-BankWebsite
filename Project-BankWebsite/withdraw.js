// step:1 add event handler with the withdraw button
// 2.get the withdraw amount from the withdraw input field
//step:2.5 make sure convert string to number
// step:3 get previous total
// step:4 calculate total amount
//step:5 set total value

document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const getWithdrawElement=document.getElementById('field-withdraw');
    const getWithdrawValue=getWithdrawElement.value;
    const WithdrawValueConvert=parseFloat(getWithdrawValue);

    getWithdrawElement.value ='';                   //clear the input field

    // NaN check
if(isNaN(WithdrawValueConvert)){
    alert('Please provide a number');
    return;
}
    // step:3
    const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawValue=withdrawTotal.innerText;
    const withdrawAmountConvert=parseFloat(withdrawValue);
    

    // step:5
    const getBalanceTotalElement= document.getElementById('balance-total');
    const balanceTotalinnerText=getBalanceTotalElement.innerText;
    const convertNumberBalance =parseFloat(balanceTotalinnerText);

    
    if(WithdrawValueConvert > convertNumberBalance ){
        alert('Sorry Balance insuficient');
        return;
    }

        // step:4
        const newWithdrawTotal=WithdrawValueConvert + withdrawAmountConvert;
        withdrawTotal.innerText = newWithdrawTotal;

    // step:6 withdraw minus main
    const newBalance=convertNumberBalance - newWithdrawTotal;
    getBalanceTotalElement.innerText=newBalance;
    

});