const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const loginLink = document.querySelector(".login");
  const signUpBtn = document.querySelector(".sign-up");
  const introHeader = document.querySelector(".intro-header");
  const introBtns = document.querySelector(".intro-btns");

  //Toggle NAv
  burger.addEventListener("click", () => {
    burger.classList.toggle("close");
    navLinks.style.display = "block";

    if (!burger.classList.contains("close")) {
      navLinks.style.display = "none";
      signUpBtn.style.display = "none";
      loginLink.style.display = "none";
      introHeader.style.display = "block";
      introBtns.style.display = "block";
    } else {
      signUpBtn.style.display = "block";
      loginLink.style.display = "block";
      introHeader.style.display = "none";
      introBtns.style.display = "none";
    }
  });
};
navSlide();

//Animation
const slides = document.querySelectorAll(".slide");
const navHeader = document.querySelector("nav");
const introHeader = document.querySelector(".intro-header");
const introBtns = document.querySelector(".intro-btns");
const header = document.querySelector(".future-heading");
const futureTextContent = document.querySelector(".future-text-content");
const futureIllustration = document.querySelector(".future-illustration");
const mobileIllustration = document.querySelector(".mobile-illustration");
const infrastructureText = document.querySelector(".infrastructure-text");
const laptopIllustration = document.querySelector(".illustration-laptop");
const toolsTextContent = document.querySelector(".tools-text-content");
const footerContent = document.querySelector(".footer-content");
const slideTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "power2.inOut" },
});
const elasticTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "elastic.out" },
});
const backTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "back.out" },
});
const bounceTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "bounce.out" },
});

gsap.config({ nullTargetWarn: false });

elasticTimeline.fromTo(
  navHeader,
  { opacity: 0, x: "50%" },
  { opacity: 1, x: "0%" }
);
slideTimeline.fromTo(
  introHeader,
  { opacity: 0, x: "-20%" },
  { opacity: 1, x: "0%" },
  "+=1"
);
slideTimeline.fromTo(
  introBtns,
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1 },
  "-=1"
);

let options = {
  threshold: 0.1,
};

let observer = new IntersectionObserver(slideAnim, options);

function slideAnim(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      slideTimeline.fromTo(
        header,
        { opacity: 0, x: "-20%" },
        { opacity: 1, x: "0%" },
        { onComplete: "done" }
      );
      slideTimeline.fromTo(
        futureIllustration,
        { opacity: 0, x: "-20%" },
        { opacity: 1, x: "0%" },
        "+=0.1"
      );
      slideTimeline.fromTo(
        futureTextContent,
        { opacity: 0, x: "-20%" },
        { opacity: 1, x: "0%" },
        "+=0.2"
      );

      elasticTimeline.fromTo(
        mobileIllustration,
        { opacity: 0, x: "-50%" },
        { opacity: 1, x: "0%" },
        "+=1.2"
      );

      slideTimeline.fromTo(
        infrastructureText,
        { opacity: 0, x: "20%" },
        { opacity: 1, x: "0%" },
        "-=1"
      );

      backTimeline.fromTo(
        laptopIllustration,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1 },
        "+=1.4"
      );

      backTimeline.fromTo(
        toolsTextContent,
        { opacity: 0, x: "50%" },
        { opacity: 1, x: "0%" },
        "-=1"
      );

      bounceTimeline.fromTo(
        footerContent,
        { opacity: 0, y: "10%" },
        { opacity: 1, y: "0%" },
        "+=1"
      );
    }
  });
}

slides.forEach((slide) => {
  observer.observe(slide);
});
