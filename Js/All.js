//Scroll Navbar Change 
var myNav = document.querySelector(".navbar");

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 90 || document.documentElement.scrollTop >= 90) {
        myNav.classList.add("nav-bg");
    } else {
        myNav.classList.remove("nav-bg");
    }
};

//CLose Mobil Nav

if (window.innerWidth < 600) {
    var BtnCanvas = document.querySelectorAll(".btn-close-canvas");
    for (let i = 0; BtnCanvas.length; i++) {
        BtnCanvas[i].addEventListener("click", function () {
            document.querySelector('[data-bs-toggle="collapse"]').click();
        });

    }
}


//Navbar active
const sections = document.querySelectorAll("section");
const navli = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }


    })
    navli.forEach(li => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active")
        }
    })
})
















//Type Write
var Text = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

Text.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-words');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new Text(elements[i], JSON.parse(toRotate), period);
        }
    }
};


//Animate Counter on Scroll
var con = true;
const sDataContainer = document.querySelector(".s-datas-container")

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;


window.addEventListener("scroll", () => {
    const sDataContainerHeight = sDataContainer.clientHeight
    const sDataContainerTop = sDataContainer.offsetTop;

    if (con && window.scrollY >= (sDataContainerTop - sDataContainerHeight - 200)) {
        valueDisplays.forEach((valueDisplays) => {

            con = false;
            let startValue = 0;
            let endValue = parseInt(valueDisplays.getAttribute("data-count"));
            let duration = Math.floor(interval / endValue);
            let counter = setInterval(function () {
                startValue += 1;
                valueDisplays.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration)



        });

    }



})

