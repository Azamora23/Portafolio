<?php 
//variables
$nombre = $_POST['nombre'];
$email = $_POST['email']; 
$mensaje = $_POST['mensaje'];

$destinatario = "azamora1111@gmail.com";
$asunto = "Contacto desde portafolio";

$carta = "De: $nombre \n";
$carta .= "Email: $email \n";
$carta .= "Mensaje: $mensaje";

//enviar mensaje
mail($destinatario, $asunto, $carta);
header('Location:index.html');
?>