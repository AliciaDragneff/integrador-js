console.log("todo ok");

const precio = 200;
let precioFinal;


const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");



const mensajeNombre = document.getElementById("mensajeNombre");
const mensajeCantidad = document.getElementById("mensajeCantidad");
const mensajeEmail = document.getElementById("mensajeEmail");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

const mensajeTotal = document.getElementById("mensajeTotal");



const botonEnviar = document.getElementById("enviar");
const botonLimpiar = document.getElementById("limpiar");


function calcularDescuento()
   {  
   const inputCantidad = document.getElementById("cantidad").value;
   const inputCategoria = document.getElementById("categoria").value;
      
   precioFinal = ( (precio - (precio * inputCategoria)) * inputCantidad);  
   
   return (precioFinal);
  
}  

function mostrarTotal() {

   if (precioFinal > 0 )
  
   {mensajeTotal.innerHTML = "<span class='' > Total a pagar en $ </span>"  + precioFinal ;}

  else {
   
   mensajeTotal.innerHTML = "<p class='text-danger '>Debes ingresar una cantidad para tener tu resumen </p>";
   }
 
}


function validarNombre() {
   if (inputNombre.value.length < 3) {
      mensajeNombre.innerHTML = "Ingrese un nombre válido"; 
  
   }

   else {
       mensajeNombre.innerHTML = "<div class='text-success'>Nombre correcto!!</div>"; 
       
   }
}

function validarApellido() {
   if (inputApellido.value.length < 3) {
      mensajeApellido.innerHTML = "Ingrese un Apellido válido";
      
          
   }
   else {
       mensajeApellido.innerHTML = "<div class='text-success'>Apellido correcto!! </div>";
       
      
   }
}

function validarEmail() {
   if (!expRegular.test(inputEmail.value)) {
       mensajeEmail.innerHTML = "El email no es valido";
       
      
   }
   else {
       mensajeEmail.innerHTML = "<div class='text-success'>Email correcto</div>";
   }
}

function limpiarFormulario() {
   document.getElementById("miFormulario").reset();
   mensajeTotal.innerHTML = " <span class='' > Total a pagar en $ </span>";
   mensajeEmail.innerHTML = "";
   mensajeNombre.innerHTML = "";
   mensajeApellido.innerHTML = "";

 }




botonEnviar.addEventListener("click", validarNombre);
botonEnviar.addEventListener("click", validarApellido);
botonEnviar.addEventListener("click", validarEmail);

botonEnviar.addEventListener("click", calcularDescuento);
botonEnviar.addEventListener("click", mostrarTotal);


botonLimpiar.addEventListener("click", limpiarFormulario);


   

 







