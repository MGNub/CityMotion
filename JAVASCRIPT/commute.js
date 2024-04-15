window.scrollTo(0, 0);
setTimeout(showVideo, 850);
setTimeout(letScroll, 2000);

// $(function() {
//        jQuery.scrollSpeed(100, 20, 'ease-in');
// });

const topVideo = document.getElementById('topVideo');
// let theme = document.documentElement.style.getPropertyValue('--bgColor');

function showVideo() {
    topVideo.style.opacity = '1';
}

function letScroll() {
    document.querySelector('body').style.overflowY = 'scroll';
}



function parallax() {
    const bikeVideo = document.getElementById('bikeVideo');
    const transitVideo = document.getElementById('transitVideo');
    const trafficImg = document.getElementById('trafficImg');
    const bikeHorizontal = document.getElementById('bikeHorizontal');
    
    if(window.scrollY > 0) {
        document.getElementById('title').classList.add('fade');
        logo.classList.add('rotate');
    } else {
        document.getElementById('title').classList.remove('fade');
        logo.classList.remove('rotate');
    }

    if (window.scrollY > window.innerHeight * 6.9 + window.innerWidth * 4) {
        bikeVideo.style.display = 'none';
        transitVideo.style.display = 'block';
    } else if(window.scrollY > window.innerHeight) {
        topVideo.style.display = 'none';
        bikeVideo.style.display = 'block';
        transitVideo.style.display = 'none';
    } else if (window.scrollY > 0) {
        topVideo.style.display = 'block';
        bikeVideo.style.display = 'none';
    }

    if (window.scrollY > window.innerHeight * 3.2 && window.scrollY < window.innerHeight * 4.7) {
        trafficImg.style.left = window.innerWidth + (window.innerHeight/1.2) - window.innerHeight * 1.6;
        trafficImg.style.marginLeft = window.pageYOffset - (window.innerHeight * 3.2);
        console.log('hey');
    }
    if (window.scrollY < window.innerHeight * 1.6) {
        trafficImg.style.left = window.innerWidth + (window.innerHeight/1.2) - window.pageYOffset;
        console.log(window.pageYOffset);

    } else if (window.scrollY < window.innerHeight * 3.2) {
        // trafficImg.style.transform = 'translateX(0vw) translateY(-25%)';
        // trafficImg.style.opacity = 1;
    } else if (window.scrollY > window.innerHeight * 5.3) {
        bikeHorizontal.style.marginLeft = (window.innerHeight * 6.4) + (-1 * window.pageYOffset);
    } else if (window.scrollY > window.innerHeight * 4.6) {
        document.getElementById('page2').style.background = 'rgb(117, 156, 212)'; //rgb(153, 185, 231)
    } 
    // else if (window.scrollY > window.innerHeight * 3.2) {
    //     trafficImg.style.left = -1 * window.pageYOffset - window.innerHeight * 3.2;
    //     console.log('hey');
    //     // trafficImg.style.transform = 'translateX(30vw) translateY(-25%)';
    //     // trafficImg.style.opacity = 0;
    // }

    //scrollProgress
    const scrollProgress = document.getElementById('scrollProgress');
    const circles = document.getElementsByClassName('circle');
    const bikeText = document.querySelector('.bike:nth-child(3) .text');
    
    if (window.scrollY < window.innerHeight * 11.8 + window.innerWidth && window.scrollY > window.innerHeight * 8.8 + window.innerWidth) {
        scrollProgress.style.opacity = 1;
        scrollProgress.style.transform = 'translate(0px, -50%)';
    }
    
    if (window.scrollY > window.innerHeight * 12 + window.innerWidth) {
        scrollProgress.style.opacity = 0;
        scrollProgress.style.transform = 'translate(-50px, -50%)';
    } else if (window.scrollY > window.innerHeight * 10.8 + window.innerWidth) {
        circles[1].style.background = 'rgb(44, 44, 44)';
        circles[2].style.background = 'rgb(218, 218, 218)';
        bikeText.innerHTML = "<h2>Stigma</h1><p>In the states, there is a stigma surrounding cyclists. Since American roads aren't designed for bicycles, and bicycles and cars have to share the same road, drivers and cyclists often get in each other's way, and the media often exaggerates events, elevating the tension even more. A lot of people would assume that anyone riding a bike is doing so for sports-related purposes. If the infrastructure for bicycles weren't basically non-existent, there would definitely be less feud between drivers and cycists.</p>";
        bikeText.classList.remove('bikeHidden');
    } else if (window.scrollY > window.innerHeight * 10.5 + window.innerWidth) {
        bikeText.classList.add('bikeHidden');
    } else if (window.scrollY > window.innerHeight * 9.8 + window.innerWidth) {
        circles[0].style.background = 'rgb(44, 44, 44)';
        circles[1].style.background = 'rgb(218, 218, 218)';
        circles[2].style.background = 'rgb(44, 44, 44)';
        bikeText.innerHTML = '<h2>Commute Trouble</h2><p>While traveling by foot and bicycles are great ways to commute, there are difficulties that come with it depending on the city or area. For example, some cities have a lot of wide stroads that are dangerous to walk across or bike along. Lack of bike lanes in some cities also makes it more difficult and inconvenient for both drivers and bikers. Both pedestrian and bike infrastructure in the US need a serious reform.</p>'; //deterr people from biking or using trains (conclusion after both bike and train.)
        bikeText.classList.remove('bikeHidden');
    } else if (window.scrollY > window.innerHeight * 9.5 + window.innerWidth) {
        bikeText.classList.add('bikeHidden');
    } else if (window.scrollY > window.innerHeight * 8.8 + window.innerWidth) {
        circles[0].style.background = 'rgb(218, 218, 218)';
        circles[1].style.background = 'rgb(44, 44, 44)';
        scrollProgress.style.opacity = 1;
        scrollProgress.style.transform = 'translate(0, -50%)';
        bikeText.innerHTML = '<h2>Walking</h2><p>Traveling by foot is definitely one of the most reliable and healthiest way to commute shorter distances. It allows for an individual to exercise while moving towards their destination at the same time.</p><h2>Biking</h2><p>Along with walking, using a bicycle is also an excellent method of commuting. There are many cities that allow bikes to be rented for a small price or for free, which makes it more accessible, and it is also significantly faster than going on foot, making it a good option for medium and longer distances.</p>';
        bikeText.classList.remove('bikeHidden');
    } else {
        scrollProgress.style.opacity = 0;
        scrollProgress.style.transform = 'translate(-50px, -50%)';
        bikeText.classList.remove('bikeHidden');
    }
    //transitText
    const texts = document.getElementsByClassName('transitText');

    fadeScroll(0, 30);
    fadeScroll(1, 28);
    fadeScroll(2, 26);
    function fadeScroll(text, init) {
        texts[text].style.opacity = window.innerHeight / init - window.pageYOffset / 550;
    }
}

function bikeToggle() {
    const bikeText = document.querySelector('.bike:nth-child(3) .text');
    bikeText.classList.add('bikeHidden');
}

window.addEventListener('scroll', parallax);

parallax();

function btnClicked(btnState) {
    const btn = document.querySelector('#btn button');
    // if(btnState) {
    //     btn.style.background = 'rgb(180, 180, 180)';
    // } else {
    //     style.background = 'transparent';
    // }
}
