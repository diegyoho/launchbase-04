function double(x) {
    return x * 2
}

function doubleCallback(x, callback) {
    setTimeout(function() {
        console.log(`${x} * 2 = ${double(x)}`)
        if(callback)
            callback()
    }, Math.round(Math.random() * 100))
}

doubleCallback(1, function() {
    doubleCallback(2, function() {
        doubleCallback(3, function() {
            doubleCallback(4, function() {
                doubleCallback(5)
            })
        })
    })
})