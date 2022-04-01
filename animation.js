// Photos animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".photo", {
    duration: 1.2,  
    opacity: 0, 
    stagger: .35 
})

// First Timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".fc1",
        start: "top center"
    }
})

tl.from(".ft1", {
    duration: .9,
    y: "100px",
    opacity: 0
})
.from(".fd1", {
    duration: .75,
    y: "100px",
    opacity: 0
})
.from(".fl1", {
    duration: .9,
    y: "100px",
    opacity: 0
})

// -Second
const tlSecond = gsap.timeline({
    scrollTrigger: {
        trigger: ".fc2",
        start: "top center"
    }
})

tlSecond.from(".ft2", {
    duration: .9,
    y: "100px",
    opacity: 0
})
.from(".fd2", {
    duration: .9,
    y: "100px",
    opacity: 0
})
.from(".fl2", {
    duration: .9,
    y: "100px",
    opacity: 0
})

// Third

const tlThird = gsap.timeline({
    scrollTrigger: {
        trigger: ".fc3",
        start: "top center"
    }
})

tlThird.from(".ft3", {
    duration: .9,
    y: "100px",
    opacity: 0
})
.from(".fd3", {
    duration: .9,
    y: "100px",
    opacity: 0
})
.from(".fl3", {
    duration: .9,
    y: "100px",
    opacity: 0
})