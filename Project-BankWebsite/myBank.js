
//step:1 add event handler in submit button//
document.getElementById('btn-sumbit').addEventListener('click', function(){
      // step:2 get the email address inside the email input field//
      //always remember to use .value to get text value an input field//
      const IdEmail =document.getElementById('email-field');
      const getValue=IdEmail.value;


      //step:3 get the password
      // set id on html
      //ge the element
      //get the value from the element

      const pass=document.getElementById('pass-field');
      const getPass=pass.value;
      
    //   Danger: do not verify email password on the client side
    //step:4 verify email password

    if(getValue === 'jahid@gmail.com' && getPass === '12345'){
        window.location.href='Page2.html';
    }
    else{
       alert('Sorry.email,password invalid');
    }
});

