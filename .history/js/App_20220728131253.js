// gsap.from(".title", {
//     opacity: 0,
//     duration: 1,
//     y: -200,
//     ease: "Power2.easeInOut",
//     stagger: 0.6,
// });

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".left__content", {
//     ScrollTrigger: {
//         trigger: ".left__content",
//         start: "top center",
//         markers: true,
//         toggleActions: "restart pause none none",
//     },
//     x: 400,
//     rotation: 360,
//     duration: 3,
// });

// * object
// const marker = {
//         startColor: "purple",
//         endColor: "fuchsia",
//         fontSize: "4rem",
//         indent: 200,
//     },

gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: 500,
    duration: 8, //3
    scrollTrigger: {
        trigger: ".square2", // before [.square] //wen this class is shown [pin] will stop the animation & start scroll
        start: "top 80%", // start: "top center",
        // end: "center 20%", //wen the center of the trigger meet 20% end the animation
        // end: () => `+=${document.querySelector(".square").offsetHeight}`,
        end: "top 30%",
        markers: true,
        // toggleClass: "red",

        scrub: true, // true / 4 second
        pin: ".square", //
        pinSpacing: true, //false

        //                onEnter         onLeave      onEnterBack       onLeaveBack
        //* toggleActions: "  restart           pause         resume          complete",
        toggleActions: "       restart           none          none             none",
    },
});

//* [scrub]  animate only when the user he is scrolling
//* [PIN] Pining allow to sticky something

// gsap.to(".box", { x: 100, duration: 5 });
// gsap.to(".box", { y: 50, duration: 3, delay: 2 });
// gsap.to(".box", { x: 0, duration: 2, delay: 5 });

//* GSAP TIMELINE
gsap.to(".box", { x: 100, duration: 5 });
const tl = gsap.timeline();
tl.to(".box", { x: 500, duration: 2 })
    .to(".box", { y: 200, duration: 3 })
    .to(".box", { x: 0, duration: 2 });