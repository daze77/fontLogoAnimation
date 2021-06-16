

    // anime({
    //     targets: '.test',
    //     translateX: 250,
    //     rotate: '1turn',
    //     backgroundColor: '#FFF',
    //     duration: 800
    //   });







    // anime({
    //   targets: '.logoimg',
    //   translateY: -250,
    //   direction: 'alternate',
    //   // translatez:100,
    //   // scale: 1.5,
    //   // rotate: anime.stagger([-360,360]),
    //   // duration: 1000,
    //   easing: 'cubicBezier(.5, .05, .1, .3)',
    //   loop: true,
    // });

    // anime({
    //   targets: '.logoimg',
    //   translateY: -270,
    //   direction: 'alternate',
    //   loop: true,
    //   duration: 1000,
    //   easing: function(el, i, total) {
    //     return function(t) {
    //       return Math.pow(Math.sin(t * (i + 1)), total);
    //     }
    //   }
    // });



    // function randomValues() {
    //   anime({
    //     targets: '.logoimg',
    //     translateY: function() {
    //       return anime.random(0, -270);
    //     },
    //     easing: 'easeInOutQuad',
    //     duration: 750,
    //     complete: randomValues
    //   });
    // }
    
    // randomValues();


    var tl = anime.timeline({
      targets: '.logoimg',
      delay: function(el, i) { return i * 200 },
      duration: 500, // Can be inherited
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
    });


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