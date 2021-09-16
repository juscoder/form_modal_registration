function validarModal(){
    var usuario, correo, password, password2, exprescorreo, expresuser, exprespass;
    usuario=document.getElementById("username").value;
    correo=document.getElementById("email").value;
    password=document.getElementById("password").value;
    password2=document.getElementById("password2").value;

    
    /* expresiones=/\w+@\w+\.+[a-z]/; */
    expresuser=/^[a-zA-Z0-9\_\-]{4,15}$/;
    exprescorreo =/\w+@\w+\.+[a-z]/;
    exprespass=/^.{6,15}$/;
    /* expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,15}$/, // Letras, numeros, guion y guion_bajo
        password: /^.{6,15}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, */
    
    if(usuario===""|| correo==="" || password==="" || password2===""){
        swal("Campos vacios", "Todos los campos debe ser llenado", "warning");           
        return false;
       
    }     
    else if(!expresuser.test(usuario)){
        swal("El usuario debe ser de 4 a 15 caracteres", "El campos de usuario debe ser mas de 4 y menos de 15", "warning");        
        return false;
    }    
   
    else if(!exprescorreo.test(correo)){
        swal("Correo inválido", "Escribe un correo válido", "warning");
        return false;
    }
    else if(password !== password2) {
        swal("Contraseña no coincide", "Los campos de contraseña debe ser iguales", "warning");
        return false;
	} 
    else if(!exprespass.test(password)){
        swal("Contraseña debe ser de 6 a 15 caracteres", "El campos contraseña debe ser mas de 6 y menos de 15", "warning");
        return false;
    }

    
}
