var salario = document.getElementById("salario")
var hora_semana = document.getElementById("hora_semana")
var hora_final_semana = document.getElementById("hora_final_semana")
var resul = document.getElementById("resul")

function calculo() {
    let horatrabalho = (Number(salario.value)/200).toFixed(2)
    resul.innerHTML += `<p style ="color:white">Hora = R$ ${horatrabalho}</p>` 

    resul.innerHTML += `<p style ="color:white">Hora p/ semana = R$ ${horatrabalho * Number(hora_semana.value)}</p>`

    resul.innerHTML += `<p style ="color:white">Hora p/ final de semana = R$ ${horatrabalho * 1.5 * Number(hora_final_semana.value)}</p>`

    resul.innerHTML += `<p style ="color:green">Ganho total = R$ ${horatrabalho * Number(hora_semana.value) + horatrabalho * Number(hora_final_semana.value) * 1.5 }</p>` 
}