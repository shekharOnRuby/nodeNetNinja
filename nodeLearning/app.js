console.log ('hello net ninjas')
console.log(__dirname)

setTimeout(function(){
    console.log('2 seconds have passed')
},2000)

let mod = require('./learn_module')

console.log(mod.counter(['me','tu','ti']))
console.log(mod.adder(1,4))
console.log(mod.adder(mod.pi,4))