gsap.from(".title", {
    opacity: 0,
    duration: 1,
    y: -200,
    ease: "Power2.easeInOut",
    stagger: 0.6,
});

gsap.registerPlugin(ScollTrgigger);

gsap.to(".section_3", {
    scollTrigger: {
        trigger: "section_3",
        toggleActions: "restart pause none none",
    },
    x: 400,
    rotation: 360,
    duration: 3,
});