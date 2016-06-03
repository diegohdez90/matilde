<?php

if (empty($_POST['mensaje']))
{
	@header("Location:index.php");
}
else
{ 
	 //we need to get our variables first
	
	
	$email_to = 'contacto@matilde.com.mx'; // Email al que se va a mandar
	
	$name = $_POST['nombre'];
	$lastname = $_POST['apellidos'];
	$email = $_POST['email'];
	$phone = $_POST['telefono'];
	$message = $_POST['mensaje'];
	
	
	
	
	$mensaje = "De:";
	$mensaje .= "Nombre: $name ";
	$mensaje .= "$lastname<br>";
	$mensaje .= "E-Mail: $email<br>";
	$mensaje .= "Teléfono/Celular: $phone<br>";
	$mensaje .= "Mensaje: $message<br>";
	
	/*the $header variable is for the additional headers in the mail function,
	we are asigning 2 values, first one is FROM and the second one is REPLY-TO.
	That way when we want to reply the email gmail(or yahoo or hotmail...) will know
	who are we replying to. */
	$headers = "From: 'Matilde - Contacto' <noreply@".$_SERVER['HTTP_HOST']."> \r\n";
	$headers .= "Reply-To: $email_from\r\n";
	$headers .= 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=UTF-8' . "\r\n";
	
	mail($email_to, "Contacto Matilde", $mensaje, $headers);
	/*if (mail($email_to, "Contacto Matilde", $mensaje, $headers)) {
		echo 'Enviado...'; // we are sending this text to the ajax request telling it that the mail is sent..
	} else {
		echo 'Fallo...'; // ... or this one to tell it that it wasn't sent
	}*/

}
?>