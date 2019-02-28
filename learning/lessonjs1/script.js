'use stpict';

document.getElementById('submit').onclick=function(){

    var errors=document.querySelectorAll('form .message')
        errors.forEach(function(item){
            item.remove();
        })

    var inputs=document.querySelectorAll('form .necessary')
    inputs.forEach(function(item){
        var text=item.value;
        if (text===''){
            item.classList.add('error')
            setTimeout(error, 1000, item)
            var mesbox=document.createElement('span')
            mesbox.innerText="<--Поле не заполнено"
            mesbox.classList.add('message')
            item.parentNode.insertBefore(mesbox, item.nextElementSibling)
        }
    })
}

function error(item){
    item.classList.remove('error')
}