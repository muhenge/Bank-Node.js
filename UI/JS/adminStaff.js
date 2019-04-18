const views = document.getElementById('viewAll');
const del = document.getElementById('dell');
const welc = document.getElementById('welcome');
const table = document.getElementById('table_admin');
const popup = document.getElementById('PopupTrigger');

del.addEventListener('click',($event)=>{
    popup.style.display = "block";
    
})

views.addEventListener('click',($event)=>{
    if($event.target){
        table.classList.remove('none');
        welc.classList.add('none');
        de.classList.add('none');
    }
})
// const showPopup = () =>{
//     popup.style.display = "block";
// }
// span.onclick = () =>{
//     popup.style.display = 'none';
// }

// document.getElementById('popupBtn').onclick = () =>{
//     popup.style.display = "none"; 
// }
// window.onclick = (event) =>{
//     if(event.target == popup){
//         popup.style.display="none";
//     }
// }
