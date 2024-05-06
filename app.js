document.addEventListener('DOMContentLoaded', () => { 
const tangkap = document.querySelector('.navbar-toggler');
tangkap.addEventListener('click', ()=>{
    if(!tangkap.className.includes('collapsed')){
       
    }else{
        window.location.reload();
    }
})
});