function doubleTimeout(x) {
    setTimeout(function() {
        console.log(`${x} * 2 = ${x * 2}`)
    }, Math.round(Math.random() * 100))
}

for(let i = 1; i <= 5; ++i) {
    doubleTimeout(i)
}