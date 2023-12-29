window.onload = function() {
  Particles.init({ selector: ".background", color: "#7f5af0" });
};

let typedEnglish = null;

let typed = new Typed("#header-subtitle", {
  stringsElement: "#typed-strings",
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true,
  backDelay: 1000,
  loop: true,
});


// let typedEnglish = new Typed("#header-subtitle-english", {
//   stringsElement: "#typed-strings-english",
//   typeSpeed: 50,
//   backSpeed: 50,
//   smartBackspace: true,
//   backDelay: 1000,
//   loop: true,
// });

let btnMode = false;

document.querySelector("#container-btn > div > button:nth-child(1)").addEventListener("click", () => {
  if (btnMode == false) {
    document.querySelector("#container-btn > div > button:nth-child(1)").style.boxShadow = "0px 13px 7px rgb(127 90 240 / 20%) inset";
    btnMode = true;
  } else {
    document.querySelector("#container-btn > div > button:nth-child(1)").style.boxShadow = "none";
    btnMode = false;
  }
});

let btnLang = false;

document.querySelector("#container-btn > div > button:nth-child(2)").addEventListener("click", () => {
  if (btnLang == false) {
    document.querySelector("#container-btn > div > button:nth-child(2)").style.boxShadow = "0px 13px 7px rgb(127 90 240 / 20%) inset";
    btnLang = true;
  } else {
    document.querySelector("#container-btn > div > button:nth-child(2)").style.boxShadow = "none";
    btnLang = false;
  }
});

document.querySelector("#footer-copy span").innerText = new Date().getFullYear();

document.querySelector("#container-mobile-menu").addEventListener("click", () => {
    document.querySelector("#container-mobile-menu").style.opacity = "0";
    document.querySelector("#container-menu").style.right = "0";
    document.querySelector("nav").style.background = "transparent";
    document.querySelector("#container-logo").style.transform = "translateY(-400px)";
    document.querySelector("html").style.overflowY = "hidden";
    document.querySelector("#bckg-mobile-menu").style.display = "block";
});

document.querySelector("#close-mobile-menu").addEventListener("click", () => {
    document.querySelector("#container-mobile-menu").style.opacity = "1";
    document.querySelector("#container-menu").style.right = "-400px";
    document.querySelector("#container-logo").style.transform = "translateY(0px)";
    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("#bckg-mobile-menu").style.display = "none";
});

document.querySelector("#bckg-mobile-menu").addEventListener("click", () => {
    document.querySelector("#container-mobile-menu").style.opacity = "1";
    document.querySelector("#container-menu").style.right = "-400px";
    document.querySelector("#container-logo").style.transform = "translateY(0px)";
    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("#bckg-mobile-menu").style.display = "none";
});


window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll >= "200") {
    document.querySelector("nav").style.boxShadow = "0px 0px 13px 7px rgb(127 90 240 / 11%)";
    } else {
    document.querySelector("nav").style.boxShadow = "none";
    }
});


let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    let st = window.scrollY;
    if (st > lastScrollTop) {
        document.querySelector("nav").style.transform = "translateY(-400px)";
    } else if (st < lastScrollTop) {
        document.querySelector("nav").style.transform = "translateY(0px)";
    }
    lastScrollTop = st <= 0 ? 0 : st; 
  }
);


document.querySelector("#btn-open-container-btn").addEventListener("click", () => {
  document.querySelector("#container-btn").classList.toggle("open")
})


let colorMode = true;


document.querySelector("#btn-mode").addEventListener("click", () => {

  if (colorMode == true) {
    document.documentElement.style.setProperty("--bckg", "#ffffff");
    document.documentElement.style.setProperty("--font-color", "#000000");
    document.documentElement.style.setProperty("--subtitle", "#79767C");

    document.querySelector("#logo-na-icon").style.filter = "invert(0)";

    
    document.querySelector(".carousel-cell:nth-child(1) img").src =
      "images/icons/black-icons/html-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(2) img").src =
      "images/icons/black-icons/css-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(3) img").src =
      "images/icons/black-icons/javascript-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(4) img").src =
      "images/icons/black-icons/react-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(5) img").src =
      "images/icons/black-icons/typescript-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(6) img").src =
      "images/icons/black-icons/vue-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(7) img").src =
      "images/icons/black-icons/node-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(8) img").src =
      "images/icons/black-icons/php-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(9) img").src =
      "images/icons/black-icons/mongoDb-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(10) img").src =
      "images/icons/black-icons/mysql-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(11) img").src =
      "images/icons/black-icons/wordpress-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(12) img").src =
      "images/icons/black-icons/astro-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(13) img").src =
      "images/icons/black-icons/sass-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(14) img").src =
      "images/icons/black-icons/tailwind-icon-black.png";
    document.querySelector(".carousel-cell:nth-child(15) img").src =
      "images/icons/black-icons/bootstrap-icon-black.png";

    document.querySelector("#container-mobile-menu").src =
      "images/icons/black-icons/menu-icon-black.svg";
    document.querySelector("#close-mobile-menu > img").src =
      "images/icons/black-icons/cross-icon-black.svg";
    document.querySelector("#container-btn > button > img").src =
      "images/icons/black-icons/arrow-icon-black.svg";
    document.querySelector(
      "#container-btn > div > button:first-child img"
    ).src = "images/icons/black-icons/dark-light-mode-icon-black.svg";
    document.querySelector(
      "#container-btn > div > button:nth-child(2) img"
    ).src = "images/icons/black-icons/lang-icon-black.svg";
    colorMode = false;

  } else {
    document.documentElement.style.setProperty("--bckg", "#212738");
    document.documentElement.style.setProperty("--font-color", "#ffffff");
    document.documentElement.style.setProperty("--subtitle", "#4F7CAC");

    document.querySelector("#logo-na-icon").style.filter = "invert(1)";

    document.querySelector(".carousel-cell:nth-child(1) img").src =
      "images/icons/white-icons/html-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(2) img").src =
      "images/icons/white-icons/css-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(3) img").src =
      "images/icons/white-icons/javascript-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(4) img").src =
      "images/icons/white-icons/react-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(5) img").src =
      "images/icons/white-icons/typescript-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(6) img").src =
      "images/icons/white-icons/vue-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(7) img").src =
      "images/icons/white-icons/node-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(8) img").src =
      "images/icons/white-icons/php-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(9) img").src =
      "images/icons/white-icons/mongoDb-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(10) img").src =
      "images/icons/white-icons/mysql-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(11) img").src =
      "images/icons/white-icons/wordpress-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(12) img").src =
      "images/icons/white-icons/astro-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(13) img").src =
      "images/icons/white-icons/sass-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(14) img").src =
      "images/icons/white-icons/tailwind-icon-white.png";
    document.querySelector(".carousel-cell:nth-child(15) img").src =
      "images/icons/white-icons/bootstrap-icon-white.png";

    document.querySelector("#container-mobile-menu").src =
      "images/icons/white-icons/menu-icon-white.svg";
    document.querySelector("#close-mobile-menu > img").src =
      "images/icons/white-icons/cross-icon-white.svg";
    document.querySelector("#container-btn > button > img").src =
      "images/icons/white-icons/arrow-icon-white.svg";
    document.querySelector(
      "#container-btn > div > button:first-child img"
    ).src = "images/icons/white-icons/dark-light-mode-icon-white.svg";
    document.querySelector(
      "#container-btn > div > button:nth-child(2) img"
    ).src = "images/icons/white-icons/lang-icon-white.svg";
    colorMode = true;
  }

})

let langTraduce = true;

document.querySelector("#btn-traduce").addEventListener("click", () => {
  if (langTraduce == true) {
  
  document.title = "Nicolas Aguero - Portfolio Web Developer";

  // ---------------
  // Nav
  // ---------------

  document.querySelector("#container-menu > li:nth-child(2) > a").innerText =
    "About me";
  document.querySelector("#container-menu > li:nth-child(3) > a").innerText =
    "Skills";
  document.querySelector("#container-menu > li:nth-child(4) > a").innerText =
    "Projects";

  // ---------------
  // Header
  // ---------------

  document.querySelector("#header-name").innerHTML =
    "Hi, I'm <strong>Nicolás Agüero</strong>";

  document.querySelector("#header-text").innerText =
    "More than 4 years of personal experience in web development and design, complemented by other related knowledge.";

  document.querySelector("#header-btn").innerHTML =
    '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Contact me';

  // ---------------
  // Section About Me
  // ---------------

  document.querySelector("#title-aboutMe").innerText = "About me";

  document.querySelector("#container-about-me-info > p").innerHTML =
    `<span>
      My name is <strong>Nicolás Martín Agüero</strong>, I am 20 years old and I live in Buenos Aires (CABA), <strong>Argentina</strong>.
    </span>
    <span>
      I am a passionate Full-Stack web developer and designer, specialized in front-end (React).
    </span>
    <span>
    I graduated as a <strong>Higher Technician in Web Design and Programming</strong> at the "<strong><a class="hvr-skew" target="_blank" href="https://davinci.edu.ar/carreras/desarrollo-web-y-mobile">Escuela Da Vinci</a></strong>".
    </span>`;

  document.querySelector(
    "#container-about-me-info > a"
  ).innerHTML = `                
  <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.41078 14.6507C8.37216 14.7523 8.32144 14.84 8.25861 14.9132C8.19636 14.9877 8.12028 15.0454 8.03037 15.0869C7.94045 15.1285 7.83036 15.1487 7.70183 15.1487C7.52142 15.1487 7.37213 15.1094 7.25224 15.0315C7.13236 14.9525 7.03668 14.8492 6.9652 14.7194C6.89373 14.5907 6.84186 14.4441 6.80958 14.2831C6.77673 14.1221 6.76116 13.9577 6.76116 13.7915C6.76116 13.6247 6.77673 13.4614 6.80958 13.2992C6.84186 13.1371 6.89373 12.9917 6.9652 12.863C7.03668 12.7332 7.13236 12.6299 7.25224 12.5508C7.37213 12.4718 7.52199 12.4337 7.70183 12.4337C7.85803 12.4337 7.98656 12.4631 8.0857 12.5225C8.18484 12.5831 8.26438 12.6524 8.32432 12.7309C8.38427 12.8099 8.42577 12.8884 8.44882 12.9698C8.47188 13.05 8.48802 13.114 8.49724 13.1602H9.9774C9.91284 12.537 9.69497 12.0557 9.3232 11.7164C8.95201 11.3771 8.42519 11.2046 7.74333 11.2C7.36061 11.2 7.01535 11.2617 6.70929 11.3869C6.40265 11.511 6.13982 11.687 5.92079 11.9132C5.70177 12.1394 5.53346 12.4112 5.41588 12.7303C5.2983 13.0482 5.23893 13.4025 5.23893 13.7897C5.23893 14.1539 5.29484 14.4955 5.40493 14.8111C5.5156 15.1279 5.67871 15.4003 5.89313 15.6317C6.10754 15.8631 6.36865 16.0454 6.67759 16.1793C6.98653 16.312 7.34158 16.3801 7.74333 16.3801C8.10299 16.3801 8.42346 16.3195 8.70474 16.2001C8.98544 16.0795 9.22176 15.9219 9.41311 15.7257C9.60448 15.5295 9.74972 15.3085 9.84886 15.0644C9.948 14.8209 9.99815 14.5728 9.99815 14.3241H8.50358C8.4811 14.4395 8.45055 14.5497 8.41078 14.6507Z" fill="#ffffff"/>
  <path d="M12.4813 14.3177H12.4675L11.6582 11.3193H10.1227L11.596 16.2635H13.2975L14.8404 11.3193H13.2767L12.4813 14.3177Z" fill="#ffffff"/>
  <path d="M16.407 0H0.122925V26H20.1229V3.60712L16.407 0ZM18.3938 24.2683H1.85208V1.73114H15.5159V4.47788H18.3932L18.3938 24.2683Z" fill="#ffffff"/>
  </svg>
  See my Cv
  `;

  document.querySelector("#line-places > div:nth-child(1) > span").innerText =
  "Tertiary";
  document.querySelector("#line-places > div:nth-child(2) > span").innerText =
  "Secondary";
  document.querySelector("#line-places > div:nth-child(3) > span").innerText =
  "Primary";

  // ---------------
  // Section Skills
  // ---------------

  document.querySelector("#title-skills").innerText = "Skills";


  // ---------------
  // Section Projects
  // ---------------

  document.querySelector("#title-projects").innerText = "Projects";

  document.querySelectorAll(".project-spanish").forEach((element) => {
    element.style.display = "none";
  });

  document.querySelectorAll(".project-english").forEach((element) => {
    element.style.display = "block";
  });

  document.querySelectorAll(".see-project").forEach((element) => {
    element.innerText = "See project";
  });

  document.querySelectorAll(".see-code").forEach((element) => {
    element.innerText = "See code";
  });

  langTraduce = false;

} else {

  document.title = "Nicolas Aguero - Portfolio Desarrollador Web";

  // ---------------
  // Nav
  // ---------------

  document.querySelector("#container-menu > li:nth-child(2) > a").innerText =
    "Sobre mí";
  document.querySelector("#container-menu > li:nth-child(3) > a").innerText =
    "Habilidades";
  document.querySelector("#container-menu > li:nth-child(4) > a").innerText =
    "Proyectos";

  // ---------------
  // Header
  // ---------------

  document.querySelector("#header-name").innerHTML =
    "Hola, soy <strong>Nicolás Agüero</strong>";

  document.querySelector("#header-text").innerText =
    "Más de 4 años de experiencia personal en desarrollo y diseño web, complementado con otros conocimientos relacionados.";

  document.querySelector("#header-btn").innerHTML =
    '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Contáctame';

  // ---------------
  // Section About Me
  // ---------------

  document.querySelector("#title-aboutMe").innerText = "Sobre mí";

  document.querySelector("#container-about-me-info > p").innerHTML =
    `<span>
      Mi nombre es <strong>Nicolás Martín Agüero</strong>, tengo 20 años y vivo en Buenos Aires (CABA),
      <strong>Argentina</strong>.
    </span>
    <span> 
    Soy un apasionado desarrollador y diseñador web Full-Stack, especializado en front-end (React).
    </span>
    <span>
      Me recibí en <strong>Técnico Superior en Diseño y Programación Web</strong> en la "<strong><a class="hvr-skew" target="_blank" href="https://davinci.edu.ar/carreras/desarrollo-web-y-mobile">Escuela Da Vinci</a></strong>".
    </span>`;

  document.querySelector(
    "#container-about-me-info > a"
  ).innerHTML = `                
  <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.41078 14.6507C8.37216 14.7523 8.32144 14.84 8.25861 14.9132C8.19636 14.9877 8.12028 15.0454 8.03037 15.0869C7.94045 15.1285 7.83036 15.1487 7.70183 15.1487C7.52142 15.1487 7.37213 15.1094 7.25224 15.0315C7.13236 14.9525 7.03668 14.8492 6.9652 14.7194C6.89373 14.5907 6.84186 14.4441 6.80958 14.2831C6.77673 14.1221 6.76116 13.9577 6.76116 13.7915C6.76116 13.6247 6.77673 13.4614 6.80958 13.2992C6.84186 13.1371 6.89373 12.9917 6.9652 12.863C7.03668 12.7332 7.13236 12.6299 7.25224 12.5508C7.37213 12.4718 7.52199 12.4337 7.70183 12.4337C7.85803 12.4337 7.98656 12.4631 8.0857 12.5225C8.18484 12.5831 8.26438 12.6524 8.32432 12.7309C8.38427 12.8099 8.42577 12.8884 8.44882 12.9698C8.47188 13.05 8.48802 13.114 8.49724 13.1602H9.9774C9.91284 12.537 9.69497 12.0557 9.3232 11.7164C8.95201 11.3771 8.42519 11.2046 7.74333 11.2C7.36061 11.2 7.01535 11.2617 6.70929 11.3869C6.40265 11.511 6.13982 11.687 5.92079 11.9132C5.70177 12.1394 5.53346 12.4112 5.41588 12.7303C5.2983 13.0482 5.23893 13.4025 5.23893 13.7897C5.23893 14.1539 5.29484 14.4955 5.40493 14.8111C5.5156 15.1279 5.67871 15.4003 5.89313 15.6317C6.10754 15.8631 6.36865 16.0454 6.67759 16.1793C6.98653 16.312 7.34158 16.3801 7.74333 16.3801C8.10299 16.3801 8.42346 16.3195 8.70474 16.2001C8.98544 16.0795 9.22176 15.9219 9.41311 15.7257C9.60448 15.5295 9.74972 15.3085 9.84886 15.0644C9.948 14.8209 9.99815 14.5728 9.99815 14.3241H8.50358C8.4811 14.4395 8.45055 14.5497 8.41078 14.6507Z" fill="#ffffff"/>
  <path d="M12.4813 14.3177H12.4675L11.6582 11.3193H10.1227L11.596 16.2635H13.2975L14.8404 11.3193H13.2767L12.4813 14.3177Z" fill="#ffffff"/>
  <path d="M16.407 0H0.122925V26H20.1229V3.60712L16.407 0ZM18.3938 24.2683H1.85208V1.73114H15.5159V4.47788H18.3932L18.3938 24.2683Z" fill="#ffffff"/>
  </svg>
  Ver mi Cv
  `;

  document.querySelector("#line-places > div:nth-child(1) > span").innerText =
  "Terciario";
  document.querySelector("#line-places > div:nth-child(2) > span").innerText =
  "Secundario";
  document.querySelector("#line-places > div:nth-child(3) > span").innerText =
  "Primaria";

  // ---------------
  // Section Skills
  // ---------------

  document.querySelector("#title-skills").innerText = "Habilidades";


  // ---------------
  // Section Projects
  // ---------------

  document.querySelector("#title-projects").innerText = "Proyectos";
  langTraduce = true;

  document.querySelectorAll(".project-spanish").forEach((element) => {
    element.style.display = "block";
  });

  document.querySelectorAll(".project-english").forEach((element) => {
    element.style.display = "none";
  });

  document.querySelectorAll(".see-project").forEach((element) => {
    element.innerText = "Ver proyecto";
  });

  document.querySelectorAll(".see-code").forEach((element) => {
    element.innerText = "Ver código";
  });

}
})


let entryObserverSectionAboutMe = (entry, observe) => {
  if (entry[0].isIntersecting) {
    entry[0].target.classList.remove("entryLeftObserver");
    document.querySelector("#container-about-me-info").classList.remove("entryRightObserver");
  }
  screen.width < 480 && 
  document.querySelector("#container-about-me-info").classList.remove("entryRightObserver");
}

let observerAboutMe = new IntersectionObserver(entryObserverSectionAboutMe, {
  root: null,
  rootMargin: "0px 0px 80px 0px",
  threshold: 1.0,
})
observerAboutMe.observe(document.querySelector("#container-about-me-img"));

screen.width < 480 && document.querySelector("#container-about-me-img").classList.remove("entryLeftObserver")



let entryObserverSectionLine = (entry, observe) => {
  if (entry[0].isIntersecting) {
    entry[0].target.classList.remove("entryTopObserver");
  }
}

let observerLine = new IntersectionObserver(entryObserverSectionLine, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
})
observerLine.observe(document.querySelector("#section-line"));


let entryObserverSectionSkills = (entry, observe) => {
  if (entry[0].isIntersecting) {
    entry[0].target.classList.remove("entryTopObserver");
    document.querySelector(".carousel").classList.remove("entryTopObserver");
  }
}

let observerSkills = new IntersectionObserver(entryObserverSectionSkills, {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 1.0,
})
observerSkills.observe(document.querySelector("#title-skills"));


let entryObserverSectionProjects = (entry, observe) => {
  if (entry[0].isIntersecting) {
    entry[0].target.classList.remove("entryTopObserver");
    document.querySelector("#container-projects").classList.remove("entryTopObserver");
  }
}

let observerProjects = new IntersectionObserver(entryObserverSectionProjects, {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 1.0,
})
observerProjects.observe(document.querySelector("#title-projects"));
