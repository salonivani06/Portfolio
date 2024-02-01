var typed = new Typed(".text", {
    strings: [ "Web Developer", "Frontend Developer..." ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
});
const srLeft = scrollReveal({
    origin: "left",
    distance: '80px',
    duration: 2000,
    reset:true
})
srLeft.reveal(".sub-title",{delay:100})
srLeft.reveal(".contact",{delay:100})
