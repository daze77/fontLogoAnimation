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
      translateY: -250,
      // override the easing parameter
      easing: 'spring',
    })
    .add({
      opacity: .8,
      scale: 2
    })
    .add({
      // override the targets parameter
      targets: '.logoimg',
      rotate: 180
    })
    .add({
      translateX: 0,
      scale: 0.75
    })
  //   .add({

  
  //     targets: '.tkLogoName .el',
  //     translateY: -200,
  //     translateX: 200,
  //     delay: anime.stagger(300,{easing: 'easeOutQuad'}) // increase delay by 100ms for each elements.
  
  
  // });


    // var relativeEl = document.querySelector('.logoimg'); relativeEl.style.transform = 'translateX(100px)';

    // anime({
    //   targets: '.logoimg',
    //   translateX: {
    //     value: '*=2.5', // 100px * 2.5 = '250px'
    //     duration: 1000
    //   },
    //   width: {
    //     value: '-=20px', // 28 - 20 = '8px'
    //     duration: 1800,
    //     easing: 'easeInOutSine'
    //   },
    //   rotate: {
    //     value: '+=2turn', // 0 + 2 = '2turn'
    //     duration: 1800,
    //     easing: 'easeInOutSine'
    //   },
    //   direction: 'alternate'
    // });



 


    
    

    // anime({
    //   targets: '.tkLogoName .el',
    //   translateY: -200,
    //   translateX: 200,
    //   delay: anime.stagger(300,{easing: 'easeOutQuad'}) // increase delay by 100ms for each elements.
    // });
  

// tl.add({

  
//     targets: '.tkLogoName .el',
//     translateY: -200,
//     translateX: 200,
//     delay: anime.stagger(300,{easing: 'easeOutQuad'}) // increase delay by 100ms for each elements.


// })






anime({
  targets: '.tkLogoName .el',
  translateX: function(el) {
    return el.getAttribute('data-x');
  },
  translateY: function(el, i) {
    return 50 + (-50 * i);
  },
  scale: function(el, i, l) {
    return (l - i) + .25;
  },
  rotate: function() { return anime.random(-360, 360); },
  borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
  duration: function() { return anime.random(1200, 1800); },
  delay: function() { return anime.random(0, 400); },
  direction: 'alternate',
  loop: 2
});