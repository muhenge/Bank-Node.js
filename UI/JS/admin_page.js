const adminInput=document.getElementById('dispayActive');
const showAct = document.getElementById('deactive');
const table = document.getElementById('tableV');
document.getElementById('admin_out').addEventListener('click',($event)=>{
    if($event.target){
      let conf = confirm(`the staff with ID: ${adminInput.value} is going to be desactivated, Please verify wisely`);
      if(conf=='true'){
          alert(`the ID: ${adminInput.value} Deleted`) ;
      }
      else {
          alert('Canceled')
      }
      }

    }
);
document.getElementById('clickView').addEventListener('click',($event)=>{
    adminInput.classList.add('none');
    showAct.classList.add('none');
    table.classList.remove('none');
})