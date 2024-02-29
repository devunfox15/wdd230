const p = document.querySelector('#password');
const cp = document.querySelector('#password-confirmed');
const msg = document.querySelector('#passwordFeedback');

cp.addEventListener('focusout', controlar)

function controlar(){
   if(p.value !== cp.value){
       p.value = '';
       cp.value = '';
       cp.focus();
       msg.textContent = 'Password Values do not match, try again';


   }else{
    //    console.log('values match')
       msg.textContent=""
   }
}