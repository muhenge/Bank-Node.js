const submit = document.getElementById('submitt');
const article = document.getElementById('account-article');

submit.addEventListener('click',($event)=>{
    if ($event.target){
        article.classList.remove('none');
    }
    else{
        article.classList.add('none');
    }
});

const passs = document.getElementById('pass');
const smallMsg = document.getElementById('mmsg');
const smallVer = document.getElementById('ver')
passs.addEventListener('input',($event)=>{
    if($event.target.value.length < 8){
        smallMsg.textContent = 'At least 8 caracters allowed';
        smallMsg.style.color = 'red';
    }
    else{
        smallMsg.textContent = 'Good to go';
        smallMsg.style.color = 'green';
    }
});
const conff = document.getElementById('conf');
conff.addEventListener('input',($event)=>{
    if($event.target.value !== passs.value ){
        smallVer.textContent =  `password don't match`;
        smallVer.style.color = 'red';
    }
    else{
        smallVer.textContent = 'password match';
        smallVer.style.color = 'green';
    }
});