//funcion validar datos
function validarDatos(){
  var nombre = document.getElementById("nombre");
  var email = document.getElementById("email");
  var mensaje = document.getElementById("mensaje");
  var boton = document.getElementById("enviar");

  boton.addEventListener("click", (e)=>{
    e.preventDefault()

    if(nombre.value == "" || email.value == "" || mensaje.value == ""){
      faltandatos();
    }
    else{ 
      enviarEmail(nombre.value, email.value, mensaje.value)
      correcto();
      console.log("mail enviado")
    }
  })
}
validarDatos()

//funcion enviar email
function enviarEmail(nombre, email, mensaje){
  emailjs.send("service_a9cq9nu","template_ba4gewg",{
    to_name: nombre,
    from_name: email,
    message: mensaje,
  });
}
//alerta correcto
function correcto(){
    swal.fire({
      title: "Enviado",  
      text: "Gracias por tu mensaje, me estare comunicando pronto.",
      icon: "success",
      width: "50%",
      background: "#F2F2F2",
      timer: "5000",
      timerProgressBar: "true",
      position: "center",
      stopKeydownPropagation: "true",
      confirmButtonColor: "#A6384C",
    })
  }
//alerta error  
function faltandatos(){
    swal.fire({
      title: "Ups",  
      text: "Diligencia todos los campos",
      icon: "error",
      width: "50%",
      background: "#F2F2F2",
      timer: "5000",
      timerProgressBar: "true",
      position: "center",
      stopKeydownPropagation: "true",
      confirmButtonColor: "#A6384C",
    })
}  

