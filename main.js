
const Backimg = document.querySelector('.Backimg')
const Ctn = document.querySelector('.container2')
const bbt1 = document.querySelector('.bbt1')
        bbt1.addEventListener('click', function () {
            Ctn.classList.add('container2_1')
            Ctn.classList.remove('container2_2', 'container2_3', 'container2_4')
            Backimg.classList.add('Backimg1')
            Backimg.classList.remove('Backimg2', 'Backimg3', 'Backimg4')
        })

const bbt2 = document.querySelector('.bbt2')
        bbt2.addEventListener('click', function () {
            Ctn.classList.add('container2_2')
            Ctn.classList.remove('container2_1', 'container2_3', 'container2_4')
            Backimg.classList.add('Backimg2')
            Backimg.classList.remove('Backimg', 'Backimg3', 'Backimg4')
        })

const bbt3 = document.querySelector('.bbt3')
        bbt3.addEventListener('click', function () {
            Ctn.classList.add('container2_3')
            Ctn.classList.remove('container2_1', 'container2_2', 'container2_4')
            Backimg.classList.add('Backimg3')
            Backimg.classList.remove('Backimg', 'Backimg2', 'Backimg4')
        })

const bbt4 = document.querySelector('.bbt4')
        bbt4.addEventListener('click', function () {
            Ctn.classList.add('container2_4')
            Ctn.classList.remove('container2_1', 'container2_2', 'container2_3')
            Backimg.classList.add('Backimg4')
            Backimg.classList.remove('Backimg', 'Backimg2', 'Backimg3')
        })

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