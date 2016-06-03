$(document).ready(function() {
    $('.enviar').click(function(e) {

        //stop the form from being submitted
        e.preventDefault();

        /* declare the variables, var error is the variable that we use on the end
         to determine if there was an error or not */
        var error = false;
        var name = $('#nombre').val();  
        var lastname = $('#apellidos').val();     
        var email = $('#email').val();
        var phone = $('#telefono').val();
        var message = $('#mensaje').val();



        /* in the next section we do the checking by using VARIABLE.length
         where VARIABLE is the variable we are checking (like name, email),
         length is a javascript function to get the number of characters.
         And as you can see if the num of characters is 0 we set the error
         variable to true and show the name_error div with the fadeIn effect.
         if it's not 0 then we fadeOut the div( that's if the div is shown and
         the error is fixed it fadesOut.

         The only difference from these checks is the email checking, we have
         email.indexOf('@') which checks if there is @ in the email input field.
         This javascript function will return -1 if no occurence have been found.*/

/*        if (name.length == 0) {
            var error = true;
            $('#camposreq').fadeIn(500);        
            $('#camposreq').hover(function() {             
            $('#camposreq').fadeOut(500);         
             });
        } else {
            $('#name_error').fadeOut(500);
        }

     

        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
             $('#camposreq').fadeIn(500);        
             $('#camposreq').hover(function() {             
             $('#camposreq').fadeOut(500);
            

             });
        } else {
            $('#camposreq').fadeOut(500);               
        }        

        if (comentarios.length == 0) {
            var error = true;
             $('#camposreq').fadeIn(500);        
             $('#camposreq').hover(function() {             
             $('#camposreq').fadeOut(500);             
             });

        } else {
            $('#camposreq').fadeOut(500);
        }

*/


        $.ajax({
            type: "POST",
            url: "send_email.php",
            data: $("#contact_form").serialize(),
            success: function(result){
                bootbox.alert("Se ha enviado correctamente tu informacion", function() {});
                $("#nombre").val("");
                $("#apellidos").val("");
                $("#email").val("");
                $("#telefono").val("");
                $("#mensaje").val("");
            },
            error: function(result) {
                bootbox.alert("Error al enviar mensaje, revisa tus campos", function() {});
            }
        });
//        }
    });
});