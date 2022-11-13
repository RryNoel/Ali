date = new Date();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = month + "월 " + day + "일"

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