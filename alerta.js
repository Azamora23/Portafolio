var x = document.getElementById("boton");
x.addEventListener("click", mensaje)

function mensaje(){
    swal.fire({
      title: "Enviado",  
      text: "Gracias por tu mensaje, me estare comunicando pronto.",
      icon: "success",
      width: "30%",
      background: "#F2F2F2",
      timer: "5000",
      timerProgressBar: "true",
      position: "center",
      stopKeydownPropagation: "true",
      confirmButtonColor: "#A6384C",
    })
  };