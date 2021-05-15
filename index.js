const rango = document.getElementById('slider');
const valores = document.getElementById('valor');
const pages = document.getElementById('pages');
const check = document.getElementById('check');
const porcentaje = .25;
let precio = [8, 12, 16, 24, 36];
let anual = precio.map( (x) => x * porcentaje);
let cantidad = ['10K','50K','100K','500K','1M']


addEventListener('load',inicio,false); 


const texto = (lugar,valor) =>  lugar.innerHTML = valor;

function cambiodelvalor(){
    if(check.checked == false)
    for(let i = 0; i <= precio.length; i++){
        if(rango.value == i + 1){
            texto(valores,`$${precio[i]}.00`);
        }
    } else {
        for(let i = 0; i <= anual.length; i++){
            if(rango.value == i + 1){
                texto(valores,`$${anual[i]}.00`);
            }
    }
}
}
function cambiodepaginas(){
    for(let i = 0; i <= precio.length; i++){
        if(rango.value == i + 1){
            texto(pages,cantidad[i])
        }
    }
}
function cambiodevalor(){
    cambiodelvalor();
    cambiodepaginas();
}

function inicio() {
    rango.addEventListener('touchmove',cambiodevalor,false);
    rango.addEventListener('mousemove',cambiodevalor,false);
}