var textWrapper = document.querySelector(".title");

//Remplaza cada caracteres de title por un span con la letra que le corresponde
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".title .letter",
  //Va de 100px hacia abajo hasta su posición inicial
  translateY: [100, 0],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 2000,
  /* calcula el retraso para cada elemento. El 
  primer elemento tiene un retraso de 4800 ms, y cada elemento posterior 
  tiene un incremento de 40 ms en el retraso. */
  delay: (el, i) => 4800 + 200 * i,
});

TweenMax.to(".box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
  delay: 1,
});

TweenMax.from("img", 4, {
  scale: "2",
  ease: Expo.easeInOut,
  delay: 0,
});

TweenMax.to(".wrapper-img", 2.4, {
  width: "400",
  height: "500",
  ease: Expo.easeInOut,
  delay: 3.6,
});

TweenMax.from(".img", 0.4, {
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 3.4,
});

TweenMax.to(".left", 2, {
  x: "-400",
  rotation: -10,
  ease: Expo.easeInOut,
  delay: 3.8,
});

TweenMax.to(".right", 2, {
  x: "400",
  rotation: 10,
  ease: Expo.easeInOut,
  delay: 3.8,
});

TweenMax.staggerFrom(
  ".menu > div, .hero-container > div",
  2,
  {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2,
  },
  0.1
);
