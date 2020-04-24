function doubleMoreOne(x, y) {
    return (x * 2) + y
}

function doubleMoreOneCallback(x, y, callback) {
    setTimeout(function() {
        result = doubleMoreOne(x, y)
        console.log(`(${x} * 2) + ${y} = ${result}`)
        if(callback)
            callback(result)
    }, Math.round(Math.random() * 100))
}

doubleMoreOneCallback(1, 0, function(result) {
    doubleMoreOneCallback(2, result, function(result) {
        doubleMoreOneCallback(3, result, function(result) {
            doubleMoreOneCallback(4, result, function(result) {
                doubleMoreOneCallback(5, result)
            })
        })
    })
})