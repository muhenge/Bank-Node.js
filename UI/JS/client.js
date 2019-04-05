const clickDash = document.getElementById('clickDash');
const clickTrans = document.getElementById('transaction');
const dashArticle = document.getElementById('dashArt');
const tableArticle = document.getElementById('tableId');
const transctId = document.getElementById('transaction');
const welcomePara = document.getElementById('artParagraph');
clickDash.addEventListener('click',($event)=>{
  if($event.target){
    dashArticle.classList.remove('none');
    welcomePara.classList.add('none');
    tableArticle.classList.add('none');
  }
  else{
    dashArticle.classList.add('none');
  }
});


transctId.addEventListener('click',($event)=>{
  if($event.target){
    tableArticle.classList.remove('none');
    welcomePara.classList.add('none');
    dashArticle.classList.add('none');
  }
  else{
    tableArticle.classList.add('none');
  }
});