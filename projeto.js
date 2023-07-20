let btn_1 = document.getElementById('flecha-1')
let btn_2 = document.querySelector('#flecha-2')
let pokemons = document.getElementById('pokemon-1')
let soma = 0
let soma2 = 0



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
function alternar_1() {
    if(soma > 2 || soma < -2) {
        soma = 0
        pokemons.id = 'pokemon-1'
    } else if(soma == 0) {
        pokemons.id = 'pokemon-1'
    } else if(soma == 1) {
        pokemons.id = 'pokemon-2'
    } else if(soma == 2) {
        pokemons.id = 'pokemon-3'
    } else if(soma == -1) {
        pokemons.id = 'pokemon-3'
    } else if(soma == -2) {
        pokemons.id = 'pokemon-2'
    }
}
