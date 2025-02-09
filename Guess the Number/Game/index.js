let computerNumber
let myNumbers =[]
let chances = 0
let maxChances = 10

function novoJogo() {
    window.location.reload()
}

function init(){
    computerNumber = Math.floor( Math.random()*100 + 1)
    console.log(computerNumber)
}

function compareNumbers (){
    const numeroSelecionado = Number(document.getElementById('inputBox').value)
    myNumbers.push(' ' +numeroSelecionado)
    document.getElementById('guesses').innerHTML = myNumbers
    document.getElementById('inputBox').value = ''

    if (chances < maxChances) {
        if (numeroSelecionado > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu numero é muito alto'
            document.getElementById('inputBox').value = ''
            chances++
            document.getElementById('chances').innerHTML = chances
        } else if (numeroSelecionado < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu numero é muito baixo'
            document.getElementById('inputBox').value = ''
            chances++
            document.getElementById('chances').innerHTML = chances
        } else {
            document.getElementById('textOutput').innerHTML = 'Parabééééns :)'
            chances++
            document.getElementById('chances').innerHTML = chances
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else{
        document.getElementById('textOutput').innerHTML = 'Você excedeu ao max de tentativas! O número misterioso era ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}
