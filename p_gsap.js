(() => {
  let square = TweenMax.staggerFromTo(
    '.is-square', 
    10, 
    { y:0, x:0, z:0, rotationZ:0, rotationX:0 },
    { x:500, z:400,  rotationZ:700, rotationX:360, ease: "elastic.out(1, 0.3)" });
  square.repeat(-1);
})();

(() => {
  let waku = TweenMax.staggerFromTo(
    '.is-waku', 
    2, 
    { rotationZ:0, rotationX:0, rotationY:0, opacity:1, },
    { 
      rotationZ:20,
      rotationX:-30,
      rotationY:30,

      ease: "power3.out",
    });
  let square_2 = TweenMax.staggerFromTo(
    '.is-square-2', 
    8, 
    { y:0, x:0, z:0, rotationZ:0, rotationX:0, opacity:1, },
    { 
      y:"random(-200, 200, 5)", 
      x:"random(-200, 200, 5)", 
      z:"45",
      rotationZ:"random(-100, 100, 5)",
      rotationX:360,
      ease: "power3.out",
      opacity:0,
      delay:3
    });
})();