const bar = document.getElementById('bar')
const mobile = document.querySelector('.mobile')
bar.addEventListener('click',()=>{
    mobile.classList.add('clicked')
})
mobile.addEventListener('click',e=>{
    console.log(e.target.tagName);
    if(e.target.tagName == "DIV"){
        mobile.classList.remove('clicked');
    }
})