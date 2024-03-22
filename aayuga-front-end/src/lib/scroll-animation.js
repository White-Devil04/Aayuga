import gsap from 'gsap';

export const scrollAnimation = (position, target, onUpdate) => {
    const t1=gsap.timeline();

    t1.to(position,{
        x:9.35,
        y:1.61,
        z:-1.51,
        // x:5.93,
        // y:3.50,
        // z:-7.42,
        scrollTrigger: {
            trigger: '#about',
            start:'top bottom',
            end:'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target,{
        x:-0.56,
        y:0.03,
        z:-0.72,
        // x:0, y:0, z:0,
        scrollTrigger: {
            trigger: '#about',
            start:'top bottom',
            end:'top top',
            scrub: 2,
            immediateRender: false
        },
    }),
    t1.to(position,{
        x:-4.03,
        y:2.35,
        z:8.63,
        // x:5.93,
        // y:3.50,
        // z:-7.42,
        scrollTrigger: {
            trigger: '#services',
            start:'top bottom',
            end:'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target,{
        x:-1.87,
        y:0.08,
        z:-0.46,
        // x:0, y:0, z:0,
        scrollTrigger: {
            trigger: '#services',
            start:'top bottom',
            end:'top top',
            scrub: 2,
            immediateRender: false
        },
    })
};