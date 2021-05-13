const rango = document.getElementById('slider');
const valor = document.getElementById('valor');
const pages = document.getElementById('pages')


addEventListener('load',inicio,false); 


function inicio() {
    rango.addEventListener('touchmove',cambiodevalor,false);
    rango.addEventListener('mousemove',cambiodevalor,false);
}

function cambiodevalor(){
    //valor.innerHTML = rango.value;
    cambiodelvalor();
    cambiodepaginas();
}
function cambiodelvalor(){
    if(rango.value == 1){
        valor.innerHTML = '$8.00';
    }
    if(rango.value == 2){
        valor.innerHTML = '$12.00';
    }
    if(rango.value == 3){
        valor.innerHTML = '$16.00';
    }
    if(rango.value == 4){
        valor.innerHTML = '$24.00';
    }
    if(rango.value == 5) {
        rango.innerHTML = '$36.00';
    }
}
function cambiodepaginas(){
    if(rango.value == 1){
        pages.innerHTML = '10k';
    }
    if(rango.value == 2){
        pages.innerHTML = '50k';
    }
    if(rango.value == 3){
        pages.innerHTML = '100k';
    }
    if(rango.value == 4){
        pages.innerHTML = '500k';
    }
    if(rango.value == 5) {
        pages.innerHTML = '1M';
    }
}

