function doubleMoreOne(x, y) {
    return (x * 2) + y
}

function doubleMoreOnePromisse(x, y) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({ x, y, doubleMoreOne: doubleMoreOne(x, y)})
        }, Math.round(Math.random() * 100))
    })
}

doubleMoreOnePromisse(1, 0)
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
        return doubleMoreOnePromisse(2, result.doubleMoreOne)
    })
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
        return doubleMoreOnePromisse(3, result.doubleMoreOne)
    })
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
        return doubleMoreOnePromisse(4, result.doubleMoreOne)
    })
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
        return doubleMoreOnePromisse(5, result.doubleMoreOne)
    })
    .then(function(result) {
        console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
    })