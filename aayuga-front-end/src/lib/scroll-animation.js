import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const t1 = gsap.timeline();

  t1
    .to(position, {
      x: 9.35,
      y: 1.61,
      z: -1.51,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -0.56,
      y: 0.03,
      z: -0.72,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    }),
    t1
      .to(position, {
        x: -4.03,
        y: 2.35,
        z: 8.63,
        scrollTrigger: {
          trigger: "#services",
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
        },
        onUpdate,
      })
      .to(target, {
        x: -1.87,
        y: 0.08,
        z: -0.46,
        scrollTrigger: {
          trigger: "#services",
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
        },
      });
      t1
      .to(position, {
        x: -17.47,
        y: 6.22,
        z: 8.91,
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 2,
          immediateRender: false,
        },
        onUpdate,
      })
      .to(target, {
        x: -3.21,
        y: 2.18,
        z: -4.41,
        scrollTrigger: {
          trigger: "#contact",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 2,
          immediateRender: false,
        },
      });
};
