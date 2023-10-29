// MENU MOBILE
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});

const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// COUNTERS ===============================
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

// Usando Intersection Observer para detectar quando o elemento está visível
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // O elemento está visível
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-count"));

        // Usando um loop para animar o contador
        let count = 0;
        function updateCount() {
          if (count < target) {
            count++;
            counter.innerText = count;

            requestAnimationFrame(updateCount);
          } else {
            counter.innerText = target;
          }
        }

        updateCount();
      });
    } else {
      // O elemento não está visível
      counters.forEach((counter) => {
        counter.innerText = 0;
      });
    }
  });
});

observer.observe(container);

// CARDS CAROUSEL ===========================================
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

/*=============================================================*/

(function ($) {
  "use strict";

  //Page cursors

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }
  s();
  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  $(document).ready(function () {
    /* Hero Case study images */

    $(".case-study-name:nth-child(1)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(1)").addClass("show");
      $(".case-study-name:nth-child(1)").addClass("active");
    });
    $(".case-study-name:nth-child(2)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(2)").addClass("show");
      $(".case-study-name:nth-child(2)").addClass("active");
    });
    $(".case-study-name:nth-child(3)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(3)").addClass("show");
      $(".case-study-name:nth-child(3)").addClass("active");
    });
    $(".case-study-name:nth-child(4)").on("mouseenter", function () {
      $(".case-study-name.active").removeClass("active");
      $(".case-study-images li.show").removeClass("show");
      $(".case-study-images li:nth-child(4)").addClass("show");
      $(".case-study-name:nth-child(4)").addClass("active");
    });
    $(".case-study-name:nth-child(1)").trigger("mouseenter");
  });
})(jQuery);
