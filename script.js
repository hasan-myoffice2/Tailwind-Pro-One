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


document.addEventListener("DOMContentLoaded", () => {
   const accordionItems = document.querySelectorAll(".accordion-item");

   accordionItems.forEach(item => {
      const btn = item.querySelector(".accordion-btn");
      const content = item.querySelector(".accordion-content");
      const icon = item.querySelector(".accordion-icon");

      btn.addEventListener("click", () => {
         // Find the parent group (section container) to handle one-open-at-a-time per group
         const parentGroup = item.parentElement;
         const groupItems = parentGroup.querySelectorAll(".accordion-item");

         // Close all other accordions within the same section
         groupItems.forEach(otherItem => {
            if (otherItem !== item) {
               otherItem.querySelector(".accordion-content").classList.add("hidden");
               otherItem.querySelector(".accordion-btn").classList.remove("bg-blue-50/60", "text-blue-900", "font-medium");
               otherItem.querySelector(".accordion-btn").classList.add("hover:bg-stone-50/50", "text-stone-900");
               otherItem.querySelector(".accordion-icon").classList.remove("rotate-180", "text-blue-600");
               otherItem.querySelector(".accordion-icon").classList.add("text-stone-400");
            }
         });

         // Toggle current accordion
         const isOpen = !content.classList.contains("hidden");

         if (isOpen) {
            content.classList.add("hidden");
            btn.classList.remove("bg-blue-50/60", "text-blue-900", "font-medium");
            btn.classList.add("hover:bg-stone-50/50", "text-stone-900");
            icon.classList.remove("rotate-180", "text-blue-600");
            icon.classList.add("text-stone-400");
         } else {
            content.classList.remove("hidden");
            btn.classList.remove("hover:bg-stone-50/50", "text-stone-900");
            btn.classList.add("bg-blue-50/60", "text-blue-900", "font-medium");
            icon.classList.remove("text-stone-400");
            icon.classList.add("rotate-180", "text-blue-600");
         }
      });
   });
});