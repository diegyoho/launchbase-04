function double(x) {
    return x * 2
}

function doublePromisse(x) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({ x, double: double(x)})
        }, Math.round(Math.random() * 100))
    })
}

doublePromisse(1)
    .then(function(result) {
        console.log(`${result.x} * 2 = ${result.double}`)
        return doublePromisse(2)
    })
    .then(function(result) {
        console.log(`${result.x} * 2 = ${result.double}`)
        return doublePromisse(3)
    })
    .then(function(result) {
        console.log(`${result.x} * 2 = ${result.double}`)
        return doublePromisse(4)
    })
    .then(function(result) {
        console.log(`${result.x} * 2 = ${result.double}`)
        return doublePromisse(5)
    })
    .then(function(result) {
        console.log(`${result.x} * 2 = ${result.double}`)
    })