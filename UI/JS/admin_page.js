const adminInput=document.getElementById('in');
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