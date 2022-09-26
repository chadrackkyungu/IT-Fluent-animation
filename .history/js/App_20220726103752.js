gsap.from(".title", {
    opacity: 0,
    duration: 1,
    y: -200,
    ease: "Power2.easeInOut",
    stagger: 0.6,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".speech_3", {
    ScrollTrigger: {
        trigger: ".speech_3",
        start: "top center",
        toggleActions: "restart pause none none",
    },
    x: 400,
    rotation: 360,
    duration: 3,
});