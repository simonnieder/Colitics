gsap.from(".members", {
  scrollTrigger: {
    trigger: "#parentMembers",
    start: "top 70%",
  },
  ease: Sine.easeOut,
  duration: 0.7,
  stagger: 0.1,
  opacity: 0,
  y: 100,
});

gsap.from("header>h1", {
  ease: Sine.easeOut,
  duration: 1,
  stagger: 0.1,
  opacity: 0,
});

gsap.from("#overview>div", {
  ease: Sine.easeOut,
  duration: 1,
  stagger: 0.1,
  opacity: 0,
  y: 50,
});
