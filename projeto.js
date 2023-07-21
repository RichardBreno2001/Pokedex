let btn_1 = document.getElementById('flecha-1')
let btn_2 = document.querySelector('#flecha-2')
let pokemons = document.getElementById('pokemon-1')
let CampoProcurar = document.getElementById('procurar')
const btnProcurar = document.getElementById('btn_procurar')
let soma = 0
let soma2 = 0
let P_nome = document.querySelector('#p_nome')
btn_2.addEventListener('click',()=>{
    soma++
    alternar_1()
    console.log(soma)
})
btn_1.addEventListener('click',function(){
    soma--
    alternar_1()
    console.log(soma)
})


btnProcurar.addEventListener('click',(objeto)=>{
    objeto.preventDefault()
    let valor = CampoProcurar.value
    if(valor == 'pikachu' || valor == 'Pikachu' || valor == 3) {
        soma = 2
        alternar_1()
        P_nome.innerHTML = 'Pikachu-3'
    } else if(valor == 'snorlax' || valor == 'Snorlax' || valor == 1) {
        soma = 0
        alternar_1()
        P_nome.innerHTML = 'Snorlax-1'
    } else if(valor == 'Growlithe' || valor == 'growlithe' || valor == 2) {
        soma = 1
        alternar_1()
        P_nome.innerHTML = 'Growlithe-2'
    }
})


function alternar_1() {
    if(soma > 2 || soma < -2) {
        soma = 0
        pokemons.id = 'pokemon-1'
        P_nome.innerHTML = 'Snorlax-1'
    } else if(soma == 0) {
        pokemons.id = 'pokemon-1'
        P_nome.innerHTML = 'Snorlax-1'
    } else if(soma == 1) {
        pokemons.id = 'pokemon-2'
        P_nome.innerHTML = 'Growlithe-2'
    } else if(soma == 2) {
        pokemons.id = 'pokemon-3'
        P_nome.innerHTML = 'Pikachu-3'
    } else if(soma == -1) {
        pokemons.id = 'pokemon-3'
        P_nome.innerHTML = 'Pikachu-3'
    } else if(soma == -2) {
        pokemons.id = 'pokemon-2'
        P_nome.innerHTML = 'Growlithe-2'
    }
}
