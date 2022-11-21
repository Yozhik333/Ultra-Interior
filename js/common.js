const mainSwiper = new Swiper('.main-swiper', {
	effect: 'fade',
	fadeEffect: {
    crossFade: true
  },
	speed: 500,
	autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const bestsellerSwiper = new Swiper(".bestseller-swiper", {
	slidesPerView: 4,
	grid: {
		fill: 'column',
		rows: 2,
	},
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
			grid: {
				fill: 'row',
				rows: 2
			},
    },
		480: {
      slidesPerView: 2,
      spaceBetween: 10,
			grid: {
				fill: 'row',
				rows: 2
			},
    },
		1024: {
			slidesPerView: 4,
			spaceBetween: 10,
			grid: {
				fill: 'column',
				rows: 2,
			},
    },
	},
});

const trustSwiper = new Swiper('.trust-swiper', {
  slidesPerView: 4.5,
	spaceBetween: 94,
	freeMode: true,
  loop: true,
	speed: 3000,
	autoplay: {
    delay: 0001,
    disableOnInteraction: false
  },
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
		1024: {
			slidesPerView: 4.5,
			spaceBetween: 94,
    },
	},
});

// ACCORDION
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
	} else {
      panel.style.maxHeight = panel.scrollHeight + "px";
	} 
  });
}