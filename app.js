const mainContainer = document.querySelector('#mainContainer');
const thanksContainer = document.querySelector('#thanksContainer');
const btn = document.querySelector('#btn');
const rating = document.querySelector('#rating');
const rates = document.querySelectorAll('#btn-voting')

btn.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    thanksContainer.style.display = 'block';
})

rates.forEach((rate) => {
    rate.addEventListener('click',() => {
        rating.innerHTML = rate.innerHTML;
    })
})