const sec2Top = document.querySelector('.sec02').offsetTop;
const sec3Top = document.querySelector('.sec03').offsetTop
const sec4Top = document.querySelector('.sec04').offsetTop
const sec5Top = document.querySelector('.sec05').offsetTop
const nav = document.querySelectorAll('.gnb > a')
nav[0].addEventListener('click', function(e){
    if(wiw > 750){
    e.preventDefault()
        window.scrollTo({
            top: sec2Top,
            left: 0,
            behavior: "smooth"
        })
    }
})
nav[1].addEventListener('click', function(e){
    if(wiw > 750){
        e.preventDefault()
        window.scrollTo({
            top: sec3Top,
            left: 0,
            behavior: "smooth"
        })
    }
})
nav[2].addEventListener('click', function(e){
    if(wiw > 750){
        e.preventDefault()
        window.scrollTo({
            top: sec4Top,
            left: 0,
            behavior: "smooth"
        })
    }
})
nav[3].addEventListener('click', function(e){
    if(wiw > 750){
        e.preventDefault()
        window.scrollTo({
            top: sec5Top,
            left: 0,
            behavior: "smooth"
        })
    }
})