window.scrollTo(0, 0);
setTimeout(letScroll, 4000);

function letScroll() {
    document.querySelector('body').style.overflowY = 'scroll';
}


const pageHeight = window.innerHeight;

function parallax() {
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const text2 = document.getElementById('text2');

    if(window.scrollY > 0) {
        document.getElementById('title').classList.add('fade');
        logo.classList.add('rotate');
    } else {
        document.getElementById('title').classList.remove('fade');
        logo.classList.remove('rotate');
    }

    if (scrollY < pageHeight * 3.2) {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (window.pageYOffset / 15.4 - pageHeight / 5.25) + 'vh)';
    }
    else if (scrollY < pageHeight * 4.2) {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (pageHeight * 3.2 / 15.4 - pageHeight / 5.25) + 'vh)';
        card2.style.transform = 'translateX(30%) rotateY(1deg) translateZ(' + ((window.pageYOffset / 22.5) - pageHeight / 7) + 'px)';
        card2.style.opacity = -8 + window.pageYOffset / 320;
        text2.style.transform = 'translateX(-50%) rotateY(-2deg) translateZ(' + ((window.pageYOffset / 22.5) - pageHeight / 7) + 'px)';
        text2.style.opacity = -8 + window.pageYOffset / 320;
    } else {
        card1.style.transform = 'translateX(-35%) rotateY(-1deg) translateZ(' + (pageHeight * 3.2 / 15.4 - pageHeight / 5.25) + 'vh)'; //try converting px to % or smthin.
        card2.style.transform = 'translateX(30%) rotateY(1deg) translateZ(' + ((pageHeight * 4.2 / 22.5) - pageHeight / 7) + 'px)';
        card2.style.opacity = -8 + pageHeight * 4.2 / 320;
        text2.style.transform = 'translateX(-50%) rotateY(-2deg) translateZ(' + ((pageHeight * 4.2 / 22.5) - pageHeight / 7) + 'px)';
        text2.style.opacity = -8 + pageHeight * 4.2 / 320;
    }
}

window.addEventListener('scroll', parallax);
parallax();
//homeBtn

console.log(window.innerHeight);


const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', learn);

function learn() {
    window.scroll({
        top : window.innerHeight * 2.25,
        left : 0,
        behavior : 'smooth',
    });
}

function roads() {
    location.href = "HTML/road.html";
}

const routeBtn = document.querySelector('#btn');
const innerBtn = document.querySelector('#btn button');

routeBtn.addEventListener('mousedown', function() {
    innerBtn.classList.add('btnClicked');
})

routeBtn.addEventListener('mouseout', function() {
    innerBtn.classList.remove('btnClicked');
})
