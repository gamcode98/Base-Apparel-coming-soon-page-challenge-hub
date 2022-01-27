import contactFormValidations from "./form.js";
import responsiveImg from "./responsive_image.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  contactFormValidations();
  responsiveImg(
    "hero-image",
    "1024",
    "./assets/images/hero-desktop.jpg",
    "./assets/images/hero-mobile.jpg"
  );
});
