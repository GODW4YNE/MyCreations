const monkeyClose = document.querySelector('.closed');
const monkeyOpen = document.querySelector('.open');

// Add Event LIstener

monkeyClose.addEventListener('click', () => {
    if (monkeyOpen.classList.contains('open')) {
        monkeyOpen.classList.add('active');
        monkeyClose.classList.remove('active');
    }
});

monkeyOpen.addEventListener('click', () => {
    if (monkeyClose.classList.contains('closed')) {
        monkeyClose.classList.add('active');
        monkeyOpen.classList.remove('active');
    }
});