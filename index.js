function addZero( x ){
if( x < 10){
   x = "0" + x;
}
return x;


} 


setInterval(function(){

let dateInstance = new Date();

// getHours se usa para obtener horas | getMinutes para minutos | getSeconds para segundos
let hours = dateInstance.getHours();
let minutes = dateInstance.getMinutes();
let secs = dateInstance.getSeconds();

// para agregar la funcion (addZero)

hours = addZero(hours);
minutes = addZero(minutes);
secs = addZero(secs);

//para obtener la fecha actual | Dias | Meses

let days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Deciembre']; 

//

let day = days[ dateInstance.getDay() ];
let today = dateInstance.getDate();
let month = months[ dateInstance.getMonth() ];
let fullYear = dateInstance.getFullYear();


//

let displayDate = `<h3> ${day},  ${today}<sup></sup> de ${month}, ${fullYear} </h3>`;
document.getElementById("show-date").innerHTML = displayDate;

//

document.getElementById('my-time').textContent = `${hours}:${minutes}:${secs}`;

},1000);
