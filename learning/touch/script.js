document.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();
    /* Здесь ваш код обработки события*/
    }, false);
    
    document.addEventListener('touchmove', function(event) {
    event.preventDefault();
    event.stopPropagation();
    /* Здесь ваш код обработки события*/
    }, false);
    
    document.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();
    /* Здесь ваш код обработки события*/
    }, false);

    var initialPoint;
    var finalPoint;
    var img=document.querySelectorAll('img');
    var i=0;

    document.getElementById('touch').addEventListener('touchstart', function(event) {
        initialPoint=event.changedTouches[0].screenX;
        console.log(initialPoint);
        });

    document.getElementById('touch').addEventListener('touchend', function(event){
        finalPoint=event.changedTouches[0].screenX;
        if (initialPoint>finalPoint){            
            if (i>0){
                img[i].classList.remove('img');
            i--;
            img[i].classList.add('img');
        }
        }
            // console.log("false"+finalPoint);
        if(initialPoint<finalPoint){            
            if (i<4){
            img[i].className='';
            i++;
            img[i].className='img';     
        }       
        }
            // console.log("true",finalPoint);        
    })