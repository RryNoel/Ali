const arrowUp = document.querySelector('.bt5');
const home = document.querySelector('.container')
        arrowUp.addEventListener('click', function() {
            home.scrollIntoView({behavior: "smooth", block:"center"})
})

document.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        arrowUp.classList.add('show');
    } else {
        arrowUp.classList.remove('show');
    }
});

const leftm = document.querySelector('.leftmenu')

    document.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            leftm.style.position = 'fixed';
            leftm.style.top = '224px';
        } else {
            leftm.style.position = 'relative';
            leftm.style.top = '27%';
        }
        if (window.scrollY > 1617) {
            leftm.style.position = 'relative';
            leftm.style.top = '1263px';
        }
    });
