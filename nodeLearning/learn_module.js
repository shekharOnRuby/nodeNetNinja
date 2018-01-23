let counter = function(arr){
return ('there are '+ arr.length + ' elements in the array')
}

let adder = function(a,b){
    return `the sum of ${a} and ${b} is ${a+b}`
}

const pi = 3.143
module.exports = {
    counter:counter,
    adder: adder,
    pi: pi
}