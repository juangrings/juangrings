let numero1 = parseInt(Math.random()* 10 + 1);
let numero2 = parseInt(Math.random()* 10 + 1);

function numeroMaior() {
    if (numero1 > numero2) {
        alert(`O maior número é o ${numero1}`);
     } else if(numero1 < numero2) {
            alert(`O maior número é o ${numero2}`);
        } else {
            alert('os números são iguais');
        }
    }


console.log(numero1);
console.log(numero2);
numeroMaior()
