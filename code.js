var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectnobuttons = document.querySelector('.modal .modal__actions button');
var selectplansbuttons = document.querySelectorAll('.plan button');


for(var i = 0 ; i < selectplansbuttons.length ;i++ ){
    selectplansbuttons[i].addEventListener('click' , function() {
        modal.classList.add('open') ;
        backdrop.classList.add('open') ;
    });
}

selectnobuttons.addEventListener('click' , myfunction ) ;
backdrop.addEventListener('click', myfunction );
function myfunction(){
    modal.classList.remove('open') ;
    backdrop.classList.remove('open') ;
    mobileit.classList.remove('open');
};