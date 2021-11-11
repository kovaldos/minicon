// Показ и скрытие элементов страницы Старт
// При натяжке на БУС этот оверкод не нужен
// Сделан для демонстрации верстки
document.addEventListener("DOMContentLoaded", () => {
  const hideOrShowElements = () => {
    const headers = document.querySelectorAll("header");
    const footers = document.querySelectorAll("footer");

    if (headers && footers) {
      const pageTitles = [
        "Карта разработки сайта",
        "Главная",
        "Каталог",
        "Карточка",
      ];
      const breadcrumbs = document.querySelector(".breadcrumbs");

      headers.forEach((header) => {
        if (pageTitles.length) {
          if (document.title == pageTitles[0]) {
            header.classList.add("_display-none");
          }
          if (document.title == pageTitles[1]) {
            breadcrumbs.classList.add("_display-none");
          }
          if (document.title == pageTitles[2]) {
            document.querySelector(".breadcrumbs__link._current").textContent =
              document.title;
          }
        }
      });

      footers.forEach((footer) => {
        if (pageTitles.length) {
          if (document.title == pageTitles[0]) {
            footer.classList.add("_display-none");
          }
        }
      });
    }
  };

  hideOrShowElements();
});

// Показ и скрытие элементов страницы Конец

// ToDo
// Сделать нормальные Хлебные крошки
// Сделать добавление в избранное

// Переключение табов Start

const tabItems = document.querySelectorAll(".tabs__link");
const tabBlocks = document.querySelectorAll(".tabs__item");

tabItems.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    let tabLink = item.getAttribute("href");
    let currentBlock = document.querySelector(tabLink);
    if (!item.classList.contains("_active")) {
      tabItems.forEach((item) => {
        item.classList.remove("_active");
      });
      tabBlocks.forEach((item) => {
        item.classList.remove("_active");
      });
      item.classList.add("_active");
      currentBlock.classList.add("_active");
    }
  });
  document.querySelector(".tabs__link").click();
}

// Переключение табов End

// Burger menu Start

const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    document.querySelector(".header-top__logo-img").classList.toggle("_white");
  });
}

// Burger menu End

// Mask for phone number Start

const inputTel = document.getElementById("tel");

if (inputTel) {
  var phoneMask = IMask(inputTel, {
    mask: "+{7} (000) 000-00-00",
  });
}

// Mask for phone number End

// check password

const passInput = document.getElementById("password");
const passCheckInput = document.getElementById("passwordCheck");
if (passInput && passCheckInput) {
  const passError = document.querySelector(".pass-error");
  passInput.addEventListener("change", () => {
    passCheckInput.addEventListener("change", () => {
      if (passCheckInput.value !== passInput.value) {
        passInput.classList.add("not-the-same");
        passCheckInput.classList.add("not-the-same");
        passError.classList.remove("_hidden");
      } else {
        passInput.classList.remove("not-the-same");
        passCheckInput.classList.remove("not-the-same");
        passError.classList.add("_hidden");
      }
    });
  });
}

// slider1 Start

const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: true,
  // grabCursor: true,
  slidesPerView: 1,
  slidesPerGroup: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
});

// slider1 End



// Accordion Start
const accordion = document.querySelector(".accordion-container");
if (accordion) {
  new Accordion(accordion);
}

// Accordion End

