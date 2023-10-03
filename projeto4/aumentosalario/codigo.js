var salario = document.getElementById("salario")
var resul = document.getElementById("resul")

function calcular() {
    if (salario.value < 1200) {
        var aumento = Number(salario.value) * 0.16
        var novosalario = Number(salario.value) + aumento
        resul.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    }
    else if (salario.value <= 2100) {
        var aumento = Number(salario.value) * 0.13
        var novosalario = Number(salario.value) + aumento
        resul.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    }
    else if (salario.value <= 3000) {
        var aumento = Number(salario.value) * 0.10
        var novosalario = Number(salario.value) + aumento
        resul.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                        <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    }
    else if (salario.value <= 3000) {
            var aumento = Number(salario.value) * 0.05
            var novosalario = Number(salario.value) + aumento
            resul.innerHTML = `<p>Valor do aumento: R$  ${aumento.toFixed(2)}</p>
                            <p>Valor do novo salario: R$  ${novosalario.toFixed(2)}</p>`
    }
}