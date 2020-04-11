const cards = document.querySelectorAll('.card')

for (const card of cards) {
    card.addEventListener('click', function () {
        window.location.href = `/courses/${card.getAttribute('id')}`
    })
}