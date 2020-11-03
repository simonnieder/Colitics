{
  /* <script src="./scripts/stats-script.js" defer></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
  integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ=="
  crossorigin="anonymous"
></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"></script> */
}

async function animations() {
  gsap.fromTo(
    CSSRulePlugin.getRule("#text-field::before"),
    {
      cssRule: {
        x: "-100%",
      },
      duration: 1,
      ease: Sine.easeOut,
    },
    {
      cssRule: {
        x: "101%",
      },
      delay: 0,
      duration: 1,
      ease: Sine.easeOut,
    }
  );

  gsap.to(".reveal", {
    delay: 0.3,
    opacity: 1,
    duration: 0,
  });
}

animations();
