const inp_p1 = document.querySelector('#p1');
const inp_p2 = document.querySelector('#p2');
const inp_p3 = document.querySelector('#p3');
const inp_x = document.querySelector("#x")

const resulBox = document.querySelector('#resultBox');



function getResult(p1, p2, p3, XX) {

    const [x0, fx0] = p1.split(",");

    const [x1, fx1] = p2.split(",");

    const [x2, fx2] = p3.split(",");

    const x = XX?.trim().length > 0 ? XX : 'x'

    const b0 = fx0
    const b1 = (fx1 - fx0)/(x1-x0)
    const b2= (((fx2-fx1)/(x2-x1)) - ((fx1 - fx0)/ (x1-x0)))
    console.log(x)
    const div = document.createElement('div')
    const fSolution = `${b0} + ${b1} * ( ${x} - ${x0} ) + ${b2} * ( ${x} - ${x0} ) * (${x} - ${x1}) `
    console.log(fSolution)
    div.innerHTML = `
    <p class="mb-2">x0: ${x0}<span class=" ml-4">fx0: </span>${fx0}</p>
    <p class="mb-2">x1: ${x1}<span class=" ml-4">fx1: </span>${fx1}</p>
    <p class="mb-2">x2: ${x2}<span class=" ml-4">fx2: </span>${fx2}</p>

    <p>b0: ${b0}</p>
    <p>b1: ${b1}</p>
    <p>b2: ${b2}</p>

    <h2 class="mt-2 text-green-700 font-bold">f(x) =  ${fSolution}</h2>
    
    <p class="mt-5"> Si quieres ver como se resuelve esta ecuación copia y pegala en el siguiente enlace:   </p>
    <a class="text-blue font-bold underline" target="_blank" href="https://es.symbolab.com/solver/equation-calculator">symbolab.com</a>
    `
    resulBox.append(div)
}

btn_resolver.onclick = (e) => {
    resulBox.innerHTML = ''

    getResult(p1.value, p2.value, p3.value, inp_x.value)
};

