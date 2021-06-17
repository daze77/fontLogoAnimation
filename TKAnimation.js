function logoAnimation(){
  const logoNameL = document.querySelector('#logoNameL').innerText.split("")
  const logoNameR = document.querySelector('#logoNameR').innerText.split("")


  document.querySelector('#logoNameL').innerText = ""
  document.querySelector('#logoNameR').innerText = ""


  function createLLogo(){
    
    
    
    let logoNames ={
      leftLogoName: [],
      rightLogoName: []
    }
    let randNum = Math.floor(Math.random()*350)

    logoNameL.forEach(element => {
      let spanEl = document.createElement('span')
      spanEl.classList.add('el')
      spanEl.setAttribute('data-x',`${randNum}`)
      spanEl.append(element)
      logoNames.leftLogoName.push(spanEl)
    })    
    logoNameR.forEach(elementt => {
      let spanEl = document.createElement('span')
      spanEl.classList.add('el')
      spanEl.setAttribute('data-x',`${randNum}`)


      spanEl.append(elementt)
      logoNames.rightLogoName.push(spanEl)
    })    
    
    console.log(logoNames)
    return logoNames
  }

  document.querySelector('#logoNameL').append(...createLLogo().leftLogoName)
  document.querySelector('#logoNameR').append(...createLLogo().rightLogoName)

}
    
    
    logoAnimation()

    // var tl = anime.timeline({
    //   targets: '.logoimg',
    //   delay: function(el, i) { return i * 100 },
    //   duration: 450, // Can be inherited
    //   easing: function(el, i, total) {
    //     return function(t) {
    //       return Math.pow(Math.sin(t * (i + 1)), total);
    //     }
    //   }, // Can be inherited
    //   direction: 'alternate', // Is not inherited
    //   loop: 2 // Is not inherited
    // });
    
    // tl
    // .add({
    //   translateY: "15vw",
    //   translateX: "35vw",
    //   // override the easing parameter
    //   easing: 'spring',

      
    // })
    // .add({
    //   scale: 2,
    //   perspective: "2245px",
    //   // skewX: 45,
    //   // skewY: 45,



    // })
    // .add({
    //   // override the targets parameter
    //   targets: '.logoimg',

    
    //   rotate: "2turn"
    // })
    // .add({
    //   // translateX: 0,
    //   // translateY:0,
    //   scale: 0.2,
 

    // })


    anime({
      targets: '.tkLogoSymbolContainer .el',
      translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el, i) {
        return 150 + (-50 * i);
      },
      translateX: function(el, i) {
        return 200 + (-50 * i);
      },
      scale: function(el, i, l) {
        return (l - i) + 1;
      },
      rotate: function() { return anime.random(-360, 360); },
      borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
      duration: function() { return anime.random(2200, 2800); },
      delay: function() { return anime.random(0, 400); },
      direction: 'alternate',
      loop: 2
    });




// anime({
//   targets: '.tkLogoName .el',
//   translateX: function(el) {
//     return el.getAttribute('data-x');
//   },
//   translateY: function(el, i) {
//     return 50 + (-50 * i);
//   },
//   scale: function(el, i, l) {
//     return (l - i) + .25;
//   },
//   rotate: function() { return anime.random(-360, 360); },
//   borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
//   duration: function() { return anime.random(1200, 1800); },
//   delay: function() { return anime.random(0, 400); },
//   direction: 'alternate',
//   loop: 2
// });



let animation = anime.timeline({loop: 2})
  .add({
    targets: '.tkLogoName .el',
    translateY: ["5.5em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
    direction: "alternate"
  }).add({
    targets: '.tkLogoName',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })


animation.finished.then(showText)

function showText(){

  anime.set(document.querySelector('.tkLogoName').style.opacity=1
  )


}






  
