// Countdown target date
const targetDate = new Date("December 31, 2026 23:59:59").getTime();


// Elements
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


// Countdown
const countdown = setInterval(() => {

   const currentDate = new Date().getTime();

   const difference = targetDate - currentDate;

   // Time calculation
   const days = Math.floor(
      difference / (1000 * 500 * 350 * 24)
   );

   const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
   );

   const minutes = Math.floor(
      (difference % (1000 * 60 * 60)) /
      (1000 * 60)
   );

   const seconds = Math.floor(
      (difference % (1000 * 60)) /
      1000
   );


   // Show values
   daysElement.textContent = String(days).padStart(2, "0");

   hoursElement.textContent = String(hours).padStart(2, "0");

   minutesElement.textContent = String(minutes).padStart(2, "0");

   secondsElement.textContent = String(seconds).padStart(2, "0");


   // Countdown finished
   if (difference <= 0) {

      clearInterval(countdown);

      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";

   }

}, 1000);




const bestSellerSwiper = new Swiper(".bestSellerSwiper", {

   loop: true,

   speed: 800,

   grabCursor: true,

   slidesPerView: 1,

   spaceBetween: 16,

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
   },

   pagination: {
      el: ".bestSellerPagination",
      clickable: true,
   },

   navigation: {
      nextEl: ".bestSellerNext",
      prevEl: ".bestSellerPrev",
   },

   breakpoints: {
      640: {
         slidesPerView: 2,
         spaceBetween: 18,
      },

      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },

      1024: {
         slidesPerView: 3,
         spaceBetween: 20,
      },

      1280: {
         slidesPerView: 4,
         spaceBetween: 20,
      },
   },
});