/*=============== TELEFON REJIMIDA MENYUNI OCHISH VA YOPISH ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/*=============== OY VA QUYOSH (DARK / LIGHT THEME) ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const sunIcon = "bx-sun";
const moonIcon = "bx-moon";

const savedTheme = localStorage.getItem("selected-theme");

if (savedTheme === "dark") {
  document.body.classList.add(darkTheme);
  themeButton.classList.remove(moonIcon);
  themeButton.classList.add(sunIcon);
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);

    if (document.body.classList.contains(darkTheme)) {
      themeButton.classList.remove(moonIcon);
      themeButton.classList.add(sunIcon);
      localStorage.setItem("selected-theme", "dark");
    } else {
      themeButton.classList.remove(sunIcon);
      themeButton.classList.add(moonIcon);
      localStorage.setItem("selected-theme", "light");
    }
  });
}

/*=============== SCROLL QILGANDA HEADER SOYASI VA YUQORIGA TUGMASI ===============*/
const header = document.getElementById("header");
const scrollUpBtn = document.getElementById("scroll-up");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  // Header soyasi
  if (header) {
    if (scrollY >= 50) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }

  // Yuqoriga qaytish tugmasi
  if (scrollUpBtn) {
    if (scrollY >= 350) {
      scrollUpBtn.classList.add("show-scroll");
    } else {
      scrollUpBtn.classList.remove("show-scroll");
    }
  }

  // Aktiv menyu rangi
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const activeLink = document.querySelector(`[href*="${sectionId}"]`);

    if (activeLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        activeLink.classList.add("active-link");
      } else {
        activeLink.classList.remove("active-link");
      }
    }
  });
});

/*=============== YURAKCHALARNI BOSGANDA QIZIL QILIB TO'LDIRISH ===============*/
const heartIcons = document.querySelectorAll(".gifticon, .newicon");

heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("bx-heart");
    icon.classList.toggle("bxs-heart");
  });
});
