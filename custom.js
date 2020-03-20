(()=>{




for(var element of document.querySelectorAll('.modal')){

    element.querySelector('.close').addEventListener('click', function(event){
        let modalElement = event.srcElement.parentNode.parentNode.parentNode.parentNode.querySelector('.modal');
        if(modalElement.classList.contains('show')){
            modalElement.classList.remove('show');
        }
    });
    
    element.parentNode.querySelector('.project-img-container img')
    .addEventListener('click', function(event){
        let modalElement = event.srcElement.parentNode.parentNode.querySelector('.modal');
        if(!modalElement.classList.contains('show')){
            modalElement.classList.add('show');
        }
    });
}


const elements = document.querySelectorAll('.my-data-slider');


for(var i=0;i<elements.length;i++){
    simpleslider.getSlider({
        container: elements[i],
        transitionTime: 1,
        delay: 3.5
    });
}


})()

