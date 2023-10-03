var funcionarios = document.getElementById("funcionarios")
var dias = document.getElementById("dias")
var resul = document.getElementById("resul")
function calcular(){
    if (dias.value<=0 || funcionarios.value<=0){
        alert(`O número de pessoas e de dias deve ser maior que 0`)
    }else if (funcionarios.value <= 49 && funcionarios.value >= 1) {
        var transporte = Number(funcionarios.value) * Number(dias.value) * 4.5
        resul.innerHTML = `<p>O valor do transporte para ${funcionarios.value} pessoa(s) por ${dias.value} dia(s) será de: R$  ${transporte.toFixed(2)}</p>`
    } else if (funcionarios.value <= 99 && funcionarios.value >= 50) {
        var transporte = Number(funcionarios.value) * Number(dias.value) * 4.1
        resul.innerHTML = `<p>O valor do transporte para ${funcionarios.value} pessoa(s) por ${dias.value} dia(s) será de: R$  ${transporte.toFixed(2)}</p>`
    } else if (funcionarios.value <= 149 && funcionarios.value >= 100) {
        var transporte = Number(funcionarios.value) * Number(dias.value) * 3.8
        resul.innerHTML = `<p>O valor do transporte para ${funcionarios.value} pessoa(s) por ${dias.value} dia(s) será de: R$  ${transporte.toFixed(2)}</p>`
    } else {
        var transporte = Number(funcionarios.value) * Number(dias.value) * 3.6
        resul.innerHTML = `<p>O valor do transporte para ${funcionarios.value} pessoa(s) por ${dias.value} dia(s) será de: R$  ${transporte.toFixed(2)}</p>`
    }
}
