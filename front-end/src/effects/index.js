import ScrollReveal from 'scrollreveal'
const animationElements = {
    'section-title': {
          delay: 300,
          distance: "0px",
          origin: "bottom",
        },
    "hero-title": {
            delay: 500,
            origin: window.innerWidth > 768 ? "left" : "bottom",
          },
    "hero-cta": {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    "about-wrapper__image": {
        delay: 600,
        origin: "bottom",
      },
    "about-wrapper__info": {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    "project-wrapper__text": {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    "project-wrapper__image": {
        delay: 1000,
        origin: window.innerWidth > 768 ? "right" : "bottom",
      },
    "contact-wrapper": {
        delay: 800,
        origin: "bottom",
      },
  };
const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
  };


  // this function for ScrollReveal using in rendering componenet for effect args she is className 
  export function fScrollReveal(...args) {
    args.length<1 && ScrollReveal().reveal(`.${args}`,defaultProps ,animationElements[args] );
    args.length>1 && args.map((arg)=>ScrollReveal().reveal(`.${arg}`,defaultProps ,animationElements[arg]))
};