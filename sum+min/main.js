let template = document.querySelector('.template');
let button = document.querySelector('.button');
let input =document.querySelector('.input');

let getRandomInRange = (min = 1, max = 9)=>{
    return Math.floor(min + Math.random()* (max - min + 1))
    }
//console.log(Math.floor(1 + Math.random()* (9 -1 + 1)))


let firstNumber = getRandomInRange();
let secondNumber = getRandomInRange();

let score = 0
let menuscore = document.querySelector('.score')

    template.innerHTML = `${firstNumber} + ${secondNumber} =`;

    let x = true;

button.addEventListener('click',()=>{

if (x){

    x = false


    let answer = +input.value
    if (answer === firstNumber + secondNumber){
        template.innerHTML = `Верно`
        score++;
        menuscore.innerHTML = `Ваши очки: ${score}`
    }else{
        template.innerHTML = `Двоечник`
        score--
         menuscore.innerHTML = `Ваши очки: ${score}`
    }

setTimeout(()=>{
    x = true;
  
    getRandomInRange = (min = 1, max = 9)=>{
        return Math.floor(min + Math.random()* (max - min + 1))
    }

        firstNumber = getRandomInRange();
        secondNumber = getRandomInRange();

template.innerHTML = `${firstNumber} + ${secondNumber} = `;},2000)
}
})