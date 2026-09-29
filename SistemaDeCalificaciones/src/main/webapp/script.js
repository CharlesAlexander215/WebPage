    // Para no declarar más veces y q mi arreglo no se rompa
    const listaResultados= [];
    let mensaje;


function calcularPromedio() {
    
    // Obtener los datos del formulario
    let res = document.getElementById("resultado");
    
    let nombre = document.getElementById("nombre").value;

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // El Switch se selecciona en true, para que detecte un booleano y en base a eso saber cual de las condiciones se cumple

    switch(true){
        case (promedio >= 9):
            mensaje = "Excelente";
            break;
        case (promedio >= 8 && promedio < 9):
            mensaje = "Muy Bien";
            break;
        case (promedio >= 7 && promedio < 7.9 ):
            mensaje = "Bien";
            break;
        case (promedio >= 6.5 && promedio < 6.9):
            mensaje = "Piensa en conta";
            break;
        case (promedio >= 6 && promedio < 6.4 ):
            mensaje = "Date de baja";
            break;
        case (promedio >= 0 && promedio < 5.9):
            mensaje = "Vete a turismo o a la 11";
            break;
        default: 
    }
    
    // Une todo el texto dentro de un solo mensaje
    let resultadoHTML = `<strong>Alumno:</strong> ${nombre}<br>` +`<strong>Promedio:</strong> ${promedio.toFixed(2)}<br><br>` +`${mensaje}`;
                    
    res.innerHTML = resultadoHTML;
    // Una vez terminado simplemente nos guia hacia donde está el resultado
    res.scrollIntoView({ behavior: 'smooth' });
    
}

function limpiar(){
    // Vacía todos los campos
    document.getElementById("resultado").innerHTML = " ";
    document.getElementById("nombre").value = " ";
    document.getElementById("edad").value = " ";
    document.getElementById("calificacion1").value = " ";
    document.getElementById("calificacion2").value = " ";
    document.getElementById("calificacion3").value = " ";
    document.getElementById("calificacion4").value = " ";
    
    // Reinicia el tamaño del arreglo
    listaResultados.length = 0;
}


function agregar(){
    
    // Obtener los datos del formulario
    
    let nombre = document.getElementById("nombre").value;

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }
    
    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    
    // Determina que mensaje será el añadido al mensaje final conforme a tu promedio
    // El "true" dentro del switch es para que me permita checkar condiciones lógicas
    
    switch(true){
        case (promedio >= 9):
            mensaje = "Excelente";
            break;
        case (promedio >= 8 && promedio < 9):
            mensaje = "Muy Bien";
            break;
        case (promedio >= 7 && promedio < 7.9 ):
            mensaje = "Bien";
            break;
        case (promedio >= 6.5 && promedio < 6.9):
            mensaje = "Piensa en conta";
            break;
        case (promedio >= 6 && promedio < 6.4 ):
            mensaje = "Date de baja";
            break;
        case (promedio >= 0 && promedio < 5.9):
            mensaje = "Vete a turismo o a la 11";
            break;
        default: 
    }
    
    // Une todo el texto dentro de un solo mensaje
    let resultadoHTML = `<strong>Alumno:</strong> ${nombre}<br>` +`<strong>Promedio:</strong> ${promedio.toFixed(2)}<br><br>` +`${mensaje}`;
                    
    // Le manda el mensaje al arreglo y lo guarda                
    listaResultados.push(resultadoHTML);
    
}

function mostrar(){
    let res = document.getElementById("resultado");
    
    // Un simple ciclo for
    for (let i = 0; i < listaResultados.length; i++) {
        let resultadoHTML = listaResultados[i];
        // Imprime el resultado como lo hace lo de antes
        res.innerHTML += resultadoHTML + "<br><br>";              
    }
    // Una vez terminado simplemente nos guia hacia donde está el resultado
    res.scrollIntoView({ behavior: 'smooth' });
}

