const intro = document.getElementById('intro');
const text = document.getElementsByClassName('introP');

intro.addEventListener('click', animateIntro);

function animateIntro() {
    intro.classList.add('animateIntro');
    intro.style.height = '0';
    document.querySelector('body').style.overflowY = 'scroll';
    document.querySelector('body').scrollTo(0, 0);

    setTimeout(numberLoad, 500);
}

console.log(text);

for(let i = 0; i < text.length; i++) {
    animateText();
    
    function animateText() {
        text[i].classList.add('textAnimate');
        
        console.log('hey');
    }

    setTimeout(delayText, 700);
    function delayText() {
        text[i].style.opacity = '100%';
    }
}

function numberLoad() {
    let numbers = '1234567890';
    const deathTotal = document.querySelector('#page1 #pageText1 h2');
    let iterations = 0;
    const interval = setInterval(() => { 
        deathTotal.innerText = deathTotal.innerText.split("")
        .map((number, index) => {
            if(index < iterations) {
                return deathTotal.dataset.value[index];
            }

            return numbers[Math.floor(Math.random() * 10)]
            })
            .join("");

        if(iterations >= deathTotal.dataset.value.length){
                clearInterval(interval);
        }    
        iterations += 1 / 3;
    }, 60);
}

function parallax() {
    const pageHeight = window.innerHeight;

    const pageOneText = document.getElementById('pageText1');
    const pages = document.getElementById('pages');
    const roadP = document.getElementById('roadP');
    const roadLine = document.getElementById('roadLine');
    const streetP = document.getElementById('streetP');
    const streetLine = document.getElementById('streetLine');
    const imageText = document.getElementById('imageText');

        pageOneText.style.top = -0.33 * window.pageYOffset + pageHeight / 2;
        pageOneText.style.opacity = 1 - window.pageYOffset / 500;

        if (window.scrollY > pageHeight * 14.4) {
            imageText.style.marginLeft = pageHeight * -3.7 + window.innerWidth / 2;
        } else if (window.scrollY > pageHeight * 10.7) {
            imageText.style.marginLeft = pageHeight * 10.7 - window.pageYOffset + window.innerWidth / 2;
        } else if(window.scrollY > pageHeight * 7) {
            streetP.innerText = 'Since streets have more human activity, it has more safety features to accomodate for pedestrians. An ideal street is lively, nice to look at, and provides value to the city.';
            streetP.style.opacity = '1';
            streetP.style.transform = 'translateY(0%)';
        } else if(window.scrollY > pageHeight * 7 - 300) {
            streetP.style.opacity = '0';
            streetP.style.transform = 'translateY(-20%)';
        } else if(window.scrollY > pageHeight * 6) {
            streetP.innerText = 'Streets are more narrow than roads, and they are lined up with buildings on the sides with wider sidewalks. Streets promotes wealth for the city and encourages economic growth.';
            streetP.style.opacity = '1';
            streetP.style.transform = 'translateY(0%)';
        } else if(window.scrollY > pageHeight * 6 - 300) {
            streetP.style.opacity = '0';
            streetP.style.transform = 'translateY(-20%)';
        } else if(window.scrollY > pageHeight * 5) {
            streetP.innerText = 'While roads serve as routes or pathways between destinations with a greater distance, streets serve as local routes for vehicles and pedestrians.';
            streetP.style.opacity = '1';
            streetP.style.transform = 'translateY(0%)';
        } else if (window.scrollY > pageHeight * 3.5) {
            roadP.innerText = "A well-designed road is safe for all users, including drivers, motorists, and bikers. A good road is fast and reliable, while badly designed road is dangerous or cause traffic congestion.";
            roadP.style.opacity = '1';
            roadP.style.transform = 'translateY(0%)';
        } else if (window.scrollY > pageHeight * 3.5 - 300) {
            roadP.style.opacity = '0';
            roadP.style.transform = 'translateY(-20%)';
        } else if (window.scrollY > pageHeight * 2.5) {
            roadP.innerText = 'Generally, roads are designed for higher speeds. They usually pass through rural or less densely populated areas, with fewer structures directly adjacent to the roadway.';
            roadP.style.opacity = '1';
            roadP.style.transform = 'translateY(0%)';
        } else if (window.scrollY > pageHeight * 2.5 - 300) {
            roadP.style.opacity = '0';
        } else if (window.scrollY > 0) {
            roadP.innerText = 'The purpose of roads is to transport people and goods fast and efficiently. Roads are high-speed thoroughfares, which are connections between 2 places.';
            roadP.style.opacity = '1';
            roadP.style.transform = 'translateY(0%)';
            roadLine.style.width = 0;
            streetLine.style.width = 0;
        }

        if (window.scrollY > 0) {
            roadLine.style.width = -pageHeight / 3 + window.pageYOffset / 4.5;
            streetLine.style.width = -pageHeight - 100 + window.pageYOffset / 4.5;
        }

        /*parallaxText*/
        const parallaxTexts = document.getElementsByClassName('parallaxText');
        // const parallaxShapes = document.getElementsByClassName('parallaxShape');
        const page6 = document.getElementById('page6');

        if (window.scrollY > pageHeight * 14.4) {
            page6.style.background = 'var(--primary)';
        } else {
            page6.style.background = 'black';
        }

        parallaxTexts[0].style.top = (pageHeight * 15.9 - window.pageYOffset) / 1.5;
        parallaxTexts[1].style.top = (pageHeight * 17 - window.pageYOffset) / 0.8;
        parallaxTexts[2].style.top = (pageHeight * 17.3 - window.pageYOffset) / 2;
        parallaxTexts[3].style.top = (pageHeight * 17.6 - window.pageYOffset) / 0.5; 

        /*highways*/
        const imgContainers = document.getElementsByClassName('imgContainer');
        const highwayTexts = document.querySelectorAll('#page8 .text');

        imgContainers[0].style.transform = 'rotateX(3deg) scale(calc(100% + ' + (pageHeight / 30 * 18.7 - window.pageYOffset / 30) + '%))';

        if (window.scrollY > pageHeight * 22.4) {
            imgContainers[1].style.width = 'calc(100% + ' + (pageHeight / 10 * 21.7 - pageHeight * 22.4 / 10) + '%)';
        } else if (window.scrollY > pageHeight * 21.7) {
            imgContainers[1].style.width = 'calc(100% + ' + (pageHeight / 10 * 21.7 - window.pageYOffset / 10) + '%)';
        } else if (window.scrollY > pageHeight * 18.5) {
            highwayTexts[0].classList.add('show');
            highwayTexts[1].classList.add('show');
        } else {
            highwayTexts[0].classList.remove('show');
            highwayTexts[1].classList.remove('show');
        }
}

window.addEventListener('scroll', parallax);

parallax();

//text reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));
