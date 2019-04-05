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