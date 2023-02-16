const calcular = function () {

    //================================== MOSTRAR ELEMENTOS BÁSICOS  ==================================
    //MOSTRAR LOS ELEMENTOS BÁSICOS
    //Elemento padre que contendrá el resultado
    const boxCalculos = document.getElementById('calculos')
    boxCalculos.innerText = ""
    //Elemento para una barra <hr>
    const barra = document.createElement('hr')
    //Elemento para un subtitulo <h2>
    const subtitulo = document.createElement('h2')

    //AGREGAR LOS ELEMENTOS
    //Agregar la barra
    boxCalculos.appendChild(barra)

    //Agregar el subtitulo
    subtitulo.innerText = "Resultados"
    boxCalculos.appendChild(subtitulo)

    //================================== ELEMENTOS PARA LOS CALCULOS  ==================================
    //Elementos para mostrar los cálculos
    const interes = document.createElement('p');
    const periodo = document.createElement('p');
    const montoMes = document.createElement('p');
    const cuentaFinal = document.createElement('p');
    let registroMovimientos = []

    //================================== REALIZAR LOS CÁLCULOS  ==================================
    //Variables para los valores del problema
    const interesMensual = 0.0125
    const montoMensual = 250.00
    const meses = 12
    let cuenta = 0;

    //CICLO FOR para agregar 250 bs cada mes y aplicar el interes
    for (let i = 0; i < meses; i++) {

        //Sumarle el monto mensual a la cuenta, siendo este 
        //el monto bruto (sin intereses)
        let montoBruto = cuenta + montoMensual;

        //Aplicar el interés al monto bruto
        let montoInteres = montoBruto * interesMensual

        //Sumar el monto bruto con los intereses aplicados
        //para sacar el total de la cuenta en el mes
        cuenta = montoBruto + montoInteres

        //Añadir un nuevo elemento <p>, según la cantidad de meses
        registroMovimientos.push(
            document.createElement('p')
        )

        //Almacenar la cuenta mensual para llevar 
        //el registro de los movimientos al mes
        registroMovimientos[i].innerText = `Mes ${i + 1}: ${montoBruto.toFixed(2)} Bs (+${montoInteres.toFixed(2)} de interes).`

    }

    //================================== MOSTRAR LOS CALCULOS  ==================================
    //Asignar los textos para que muestren los resultados
    interes.innerText = `Intereses aplicados mensualmente: ` + (interesMensual * 100) + `%`
    interes.className = "mb-4"
    periodo.innerText = `Ahorros por un periodo de: ${meses} meses`
    periodo.className = "mb-4"
    montoMes.innerText = `Monto ingresado mensualmente: ${montoMensual} Bs`
    montoMes.className = "mb-20"
    cuentaFinal.innerText = `Monto final en la cuenta de ahorros: ${cuenta.toFixed(2)} Bs`
    cuentaFinal.className = "mt-20 bold"

    //Agregar los elementos
    boxCalculos.appendChild(interes)
    boxCalculos.appendChild(periodo)
    boxCalculos.appendChild(montoMes)
    registroMovimientos.forEach(cuentaMes => {
        boxCalculos.appendChild(cuentaMes)
    });
    boxCalculos.appendChild(cuentaFinal)
}