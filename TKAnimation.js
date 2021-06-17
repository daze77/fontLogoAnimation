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

    var tl = anime.timeline({
      targets: '.logoimg',
      delay: function(el, i) { return i * 100 },
      duration: 400, // Can be inherited
      easing: 'easeOutExpo', // Can be inherited
      direction: 'alternate', // Is not inherited
      loop: 2 // Is not inherited
    });
    
    tl
    .add({
      translateY: 250,
      translateX: 450,
      // override the easing parameter
      easing: 'spring',
    })
    .add({
      opacity: 1,
      scale: 2
    })
    .add({
      // override the targets parameter
      targets: '.logoimg',
      rotate: 180
    })
    .add({
      // translateX: 0,
      // translateY:0,
      scale: 0.75
    })







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



let animation = anime.timeline({loop: 2, opacity: 1})
  .add({
    targets: '.tkLogoName .el',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.tkLogoName',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })


animation.finished.then(goAgain)

function goAgain(){

  anime.set(document.querySelector('.tkLogoName').style.opacity=1
  )


}






  
