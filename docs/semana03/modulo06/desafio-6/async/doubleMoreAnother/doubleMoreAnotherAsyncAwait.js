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

async function doubleMoreOneAsync() {
    let result = await doubleMoreOnePromisse(1, 0)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)

    result = await doubleMoreOnePromisse(2, result.doubleMoreOne)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
    
    result = await doubleMoreOnePromisse(3, result.doubleMoreOne)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
    
    result = await doubleMoreOnePromisse(4, result.doubleMoreOne)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
    
    result = await doubleMoreOnePromisse(5, result.doubleMoreOne)
    console.log(`(${result.x} * 2) + ${result.y} = ${result.doubleMoreOne}`)
}

doubleMoreOneAsync()