import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const t1 = gsap.timeline();

  t1
    .to(position, {
      x: 9.35,
      y: 1.61,
      z: -1.51,
      // x:5.93,
      // y:3.50,
      // z:-7.42,
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
      // x:0, y:0, z:0,
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
        // x:5.93,
        // y:3.50,
        // z:-7.42,
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
        // x:0, y:0, z:0,
        scrollTrigger: {
          trigger: "#services",
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
        },
      });
  t1.to(position, {
    x: -18.13,
    y: 6.38,
    z: 8.16,
    scrollTrigger: {
      trigger: "#contact",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  }).to(target, {
    x: -3.83,
    y: 2.33,
    z: -5.16,
    scrollTrigger: {
      trigger: "#contact",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 2,
      immediateRender: false,
    },
  });
};
