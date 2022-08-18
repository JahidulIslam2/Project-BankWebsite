//step:1 add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step:2 get the deposit amount from the deposit input field
    //for input field use .value to the value inside the inout field
    const depositfield=document.getElementById('input-field');
    const NewDepositAmount=depositfield.value;
    const amountTypeConverted=parseFloat(NewDepositAmount);        //string to number convert//
    
    depositfield.value='';
// NaN check
    if(isNaN(amountTypeConverted)){
        alert('Please Provide Number');
        return;
    }
    //step:3 get the current deposit total//
    // for none input( element other than input textarea)use innerText to fet the text
    const getDepositElement=document.getElementById('deposit-amount');
    const previousDepositAmount=getDepositElement.innerText;
    const previousAmount=parseFloat(previousDepositAmount);         //string to number convert
    const CurrentDeposit=previousAmount + amountTypeConverted;

    getDepositElement.innerText=CurrentDeposit;
    //step:4 deposit input field clear

    

    //step:5  get balance current total
    const balanceTotalElement=document.getElementById('balance-total');
    const balanceTotal=balanceTotalElement.innerText;
    const previousAmountTotal=parseFloat(balanceTotal);
    
    // step:6 calculate current total balance
    const currentBalance=previousAmountTotal + CurrentDeposit ;
    balanceTotalElement.innerText=currentBalance;           //set value in balance
    
});