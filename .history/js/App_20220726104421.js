gsap.from(".title", {
    opacity: 0,
    duration: 1,
    y: -200,
    ease: "Power2.easeInOut",
    stagger: 0.6,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("img", {
    ScrollTrigger: {
        trigger: "img",
        start: "top center",
        markers: true,
        toggleActions: "restart pause none none",
    },
    x: 400,
    rotation: 360,
    duration: 3,
});