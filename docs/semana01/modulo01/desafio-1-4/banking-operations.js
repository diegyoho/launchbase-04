const user = {
    name: "Deborah",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) { // transaction = { type: 'credit' | 'debit', value: 23.4 }
    if (transaction.type === 'credit') {
        user.balance += transaction.value
    } else if (transaction.type === 'debit') {
        user.balance -= transaction.value
    }

    user.transactions.push(transaction)
}

function getHigherTransactionByType(type) { // type = 'credit' | 'debit'
    let maxTransaction = { type: 'credit', value: 0.0 }

    for (let transaction of user.transactions) {
        if (transaction.type === type && transaction.value > maxTransaction.value) {
            maxTransaction = transaction
        }
    }

    return maxTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for (transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let credits = 0
    let debits = 0

    for (transaction of user.transactions) {
        if (transaction.type === 'credit') {
            ++credits
        } else if (transaction.type === 'debit') {
            ++debits
        }
    }

    return { credit: credits, debit: debits }
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(`Saldo Atual: ${user.balance}`)
console.log('----------------------------')

console.log(`Maior Crédito: ${getHigherTransactionByType("credit").value}`)
console.log(`Maior Débito: ${getHigherTransactionByType("debit").value}`)

console.log('----------------------------')

console.log(`Média de Transações: ${getAverageTransactionValue()}`)

console.log('----------------------------')

const transactionsCount = getTransactionsCount()
console.log(`Total de Créditos: ${transactionsCount.credit}`)
console.log(`Total de Débitos: ${transactionsCount.debit}`)