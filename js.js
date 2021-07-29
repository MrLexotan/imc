const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {
    const altura = document.querySelector('.altura input').value
    const peso = document.querySelector('.peso input').value
    console.log(altura)
    console.log(peso)
    e.preventDefault();

        function calcular(altura, peso) {
            const imc = peso / (Math.pow(altura, 2))
            console.log(imc)

            if(imc > 40){
                document.getElementById('resultado').value = 'Seu Imc é de ' + imc
                document.getElementById('resultado').value = 'Procure um médico: obesidade morbida'
            } else if (imc < 40 && imc > 35) {
                document.getElementById('resultado').value = 'Seu Imc é de ' + imc
                document.getElementById('resultado').value ='Você está em um grau de obesidade'
            } else if (imc < 35 && imc > 25) {
                document.getElementById('resultado').value = 'Seu Imc é de ' + imc
                document.getElementById('resultado').value = 'Você está com sobre peso'
            } else if (imc < 25 && imc > 20) {
                document.getElementById('resultado').value = 'Seu Imc é de ' + imc
                document.getElementById('resultado').value = 'Ele é Normal'
            }

        }

        calcular(altura, peso)

});