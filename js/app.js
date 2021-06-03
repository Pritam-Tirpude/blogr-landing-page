const productAnchor = document.querySelector("#product-anchor");
const productContent = document.querySelector(".product-content");
const productArrowIcon = document.querySelector(".arrow-light");
const companyAnchor = document.querySelector("#company-anchor");
const companyContent = document.querySelector(".company-content");
const companyArrowIcon = document.querySelector(".arrow-light-company");
const connectAnchor = document.querySelector("#connect-anchor");
const connectContent = document.querySelector(".connect-content");
const connectArrowIcon = document.querySelector(".arrow-light-connect");
const arrowDarkProduct = document.querySelector(".arrow-dark-product");
const arrowDarkCompany = document.querySelector(".arrow-dark-company");
const arrowDarkConnect = document.querySelector(".arrow-dark-connect");
const hamburgerMenu = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinksLI = document.querySelectorAll(".nav-links li");
const editorImg = document.querySelector(".editor");

productAnchor.addEventListener("click", () => {
  productAnchor.classList.toggle("active");

  if (productAnchor.classList.contains("active")) {
    productContent.style.opacity = "1";
    productContent.style.pointerEvents = "all";
    productContent.style.zIndex = "1";
    productArrowIcon.style.transform = "rotate(180deg)";
    arrowDarkProduct.style.transform = "rotate(180deg)";
  } else {
    productContent.style.opacity = "0";
    productContent.style.zIndex = "0";
    productContent.style.pointerEvents = "none";
    productArrowIcon.style.transform = "rotate(0deg)";
    arrowDarkProduct.style.transform = "rotate(0deg)";
  }
});

companyAnchor.addEventListener("click", () => {
  companyAnchor.classList.toggle("active");

  if (companyAnchor.classList.contains("active")) {
    companyContent.style.opacity = "1";
    companyContent.style.zIndex = "1";
    companyContent.style.pointerEvents = "all";
    companyArrowIcon.style.transform = "rotate(180deg)";
    arrowDarkCompany.style.transform = "rotate(180deg)";
  } else {
    companyContent.style.opacity = "0";
    companyContent.style.zIndex = "0";
    companyContent.style.pointerEvents = "none";
    companyArrowIcon.style.transform = "rotate(0deg)";
    arrowDarkCompany.style.transform = "rotate(0deg)";
  }
});

connectAnchor.addEventListener("click", () => {
  connectAnchor.classList.toggle("active");

  if (connectAnchor.classList.contains("active")) {
    connectContent.style.opacity = "1";
    connectContent.style.pointerEvents = "all";
    connectArrowIcon.style.transform = "rotate(180deg)";
    arrowDarkConnect.style.transform = "rotate(180deg)";
  } else {
    connectContent.style.opacity = "0";
    connectContent.style.pointerEvents = "none";
    connectArrowIcon.style.transform = "rotate(0deg)";
    arrowDarkConnect.style.transform = "rotate(0deg)";
  }
});

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  if (navLinks.classList.contains("open")) {
    navLinks.style.zIndex = "1";
    mobileMenu.src = "../images/icon-close.svg";
  } else {
    navLinks.style.zIndex = "0";
    mobileMenu.src = "../images/icon-hamburger.svg";
  }

  navLinksLI.forEach((link) => {
    link.classList.toggle("fade");
  });
});
