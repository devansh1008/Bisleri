

//  loder
var tl = gsap.timeline();
tl.from("#page1-loder", {
  top: -1000,
  duration: 1,
  stagger: 1,
});
tl.from(".container1", {
  y: 800,
  duration: 1,
  stagger: 0.2,
});
tl.to(".container1", {
  scale: 0,
  duration: 1,
  stagger: 0.1,
});
tl.from(".text", {
  scale: 0,
  duration: 2,
  stagger: 0.1,
});
tl.to("#page1-loder", {
  top: -1000,
  duration: 2,
});
//  page1
// var tlone = gsap.timeline();


// page 7
function printingtext() {
  var textElements = document.querySelectorAll("#page7 #text h4");

  textElements.forEach(function (element) {
      var words = element.textContent.split(' ');
      var wrappedWords = words.map(function (word) {
          return '<span>' + word + '</span>';
      }).join(' ');
      element.innerHTML = wrappedWords;
  });
}

printingtext();

gsap.registerPlugin(ScrollTrigger);

gsap.from("#page7 #text h4", {
  y: 500,
  opacity: 2,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
      scroller: "body",
      trigger: "#page7",

  }
});
// 
var img1 = document.querySelector("#page1-bottom #one h4");
var imgone = document.querySelector("#page1-bottom #one .img1");

var img2 = document.querySelector("#page1-bottom #two h4");
var imgtwo = document.querySelector("#page1-bottom #two .img2");

var img3 = document.querySelector("#page1-bottom #three h4");
var imgthree = document.querySelector("#page1-bottom #three .img3");

img1.addEventListener("click", function() {
  imgone.style.height = "100vh";
  imgone.style.transition = "all ease 0.6s";
  setTimeout(() => {
    imgone.style.display = "none";
  }, 3000);
});

img2.addEventListener("click", function() {
  imgtwo.style.height = "100vh";
  imgtwo.style.transition = "all ease 0.6s";

  setTimeout(() => {
    imgtwo.style.display = "none";
  }, 3000);
});

img3.addEventListener("click", function() {
  imgthree.style.height = "100vh";
  imgthree.style.transition = "all ease 0.6s";

  setTimeout(() => {
    imgthree.style.display = "none";
  }, 3000);
});






var curser =  document.querySelector("#curser")
var page =  document.querySelector("#page1")
page.addEventListener("mousemove" , function(dets){
   curser.style.left = dets.clientX+"px";
   curser.style.top = dets.clientY+"px";
})

page.addEventListener("mouseenter" , function(){
  curser.style.opacity = "1";
})
page.addEventListener("mouseleave" , function(){
  curser.style.opacity = "0";
})




var lastScrollTop = 0;
var navbar = document.querySelector("#page1 #nav");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-10%";
  } else {
    navbar.style.top = "0%";
  }
  lastScrollTop = scrollTop;
});

var dropdown = document.querySelector("#dropdown")
var menu = document.querySelector(".menu")

menu.addEventListener("mouseenter", function () {
  dropdown.style.display = "block";
})
menu.addEventListener("mouseleave", function () {
  dropdown.style.display = "none";
})

//  page3

var elem = document.querySelectorAll(".elem")

elem.forEach((element) => {

  element.addEventListener("mouseenter", function () {
    element.childNodes[3].style.opacity = 1
  })
  element.addEventListener("mouseleave", function () {
    element.childNodes[3].style.opacity = 0
  })
  element.addEventListener("mousemove", function (dets) {

    element.childNodes[3].style.left = dets.clientX + "px"
  })
})

// page 4

gsap.to("#page4 .img", {
  Transform: "translateX(-350%)",
  buration: 4,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page4",
    // markers: true,
    start: "top 0%",
    end: "top -60%",
    scrub: 2,
    pin: true,

  }
})

var texth1 =  document.querySelector("#page4 #texth1").textContent
var textone =  texth1.split("");
var cutter = "";
textone.forEach(function(e){
    cutter += `<span>${e}</span>`;
})
document.querySelector("#texth1")
