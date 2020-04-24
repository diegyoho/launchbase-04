function doubleMoreOne(x, y) {
    return (x * 2) + y
}

let result = 0

for(let i = 1; i <= 5; ++i) {
    setTimeout(function() {
        let newResult = doubleMoreOne(i, result)
        console.log(`(${i} * 2) + ${result} = ${newResult}`)
        result = newResult
    }, Math.round(Math.random() * 100))
}