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

async function doubleAsync() {
    let result = await doublePromisse(1)
    console.log(`${result.x} * 2 = ${result.double}`)

    result = await doublePromisse(2)
    console.log(`${result.x} * 2 = ${result.double}`)
    
    result = await doublePromisse(3)
    console.log(`${result.x} * 2 = ${result.double}`)
    
    result = await doublePromisse(4)
    console.log(`${result.x} * 2 = ${result.double}`)
    
    result = await doublePromisse(5)
    console.log(`${result.x} * 2 = ${result.double}`)
}

doubleAsync()