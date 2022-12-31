var finContar= new Date('Jan 1, 2023 00:00:00').getTime();


function nuevoAño(){
    var now=new Date().getTime();

    gap= finContar  - now;

    var seg=1000;
    var min=seg*60;
    var hora=min*60;
    var dia=hora*24;


    // definimos las variables con var y les asignamos nombre y valor

    var d= Math.floor(gap/(dia));
    var h= Math.floor((gap % (dia)) / (hora));
    var m= Math.floor((gap %(hora))/ (min));
    var s= Math.floor((gap % (min)) / seg);


    document.getElementById('dia').innerText=d;
    document.getElementById('hora').innerText=h;
    document.getElementById('min').innerText=m;
    document.getElementById('seg').innerText=s;
}

setInterval(function(){
    nuevoAño();
},1000)
