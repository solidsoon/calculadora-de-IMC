let btn = document.getElementById("btn");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let know = document.getElementById("know")

function calc(event) {
    event.preventDefault();
    let weightValue = weight.value;
    let heightValue = height.value;

    var imc = weightValue / heightValue ** 2
    convertIbm = imc.toFixed(2)

   if (imc < 17) {
    know.innerHTML = `Muito abaixo do peso, seu IBM é: ${convertIbm}`
   }
   else if(imc > 17 && imc < 18.49){
    know.innerHTML = `Abaixo do peso, seu IBM é: ${convertIbm}`
   }
   else if(imc < 24.99){
    know.innerHTML = `Peso normal, seu IBM é: ${convertIbm}`
   }
   else if(imc < 29.99){
    know.innerHTML = `Acima do peso, seu IBM é: ${convertIbm}`
   }
   else if(imc < 34.99){
    know.innerHTML = `Obesidade I, seu IBM é: ${convertIbm}`
   }
   else if(imc < 39.99){
    know.innerHTML = `Obesidade II, seu IBM é: ${convertIbm}`
   }else{
    know.innerHTML = `Obesidade mórbida, seu IBM é: ${convertIbm}`
   }
}



btn.addEventListener("click", calc)

