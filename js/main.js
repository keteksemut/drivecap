$(document).ready(function () {
    // Cache the selector for better performance
    const cityElements = $(".cities-items");
  
    // Use event delegation to improve performance
    cityElements.on('mouseover mouseout', function (event) {
      event.stopPropagation(); // Add this line to stop propagation
        $(event.currentTarget).find('.marquee').css("--animation-status", event.type === "mouseover" ? "running" : "paused");
    });
});
  

// using interSectionObserver

// const marqueeElement = document.querySelector('.cities-items');
// const innerElement = marqueeElement.querySelector('.marquee');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       marqueeElement.style.setProperty('--animation-status', 'running');
//     } else {
//       marqueeElement.style.setProperty('--animation-status', 'paused');
//     }
//   });
// });

// observer.observe(innerElement);
// function marquee() {
//   const container = document.querySelectorAll('.marquee');

//   container.forEach(element => {
//     const observer = new IntersectionObserver((entries) => {
//       const entry = entries[0];
//       const isIntersecting = entry.isIntersecting;
//       element.style.setProperty('--animation-status', isIntersecting ? 'running' : 'paused');
//     }, { threshold: 0 });

//     observer.observe(element);
//   });

//   return container;
// }

// marquee();






// $(document).ready(function () {
//   // Cache the selector for better performance
//   const cityElements = $(".cities-items");

//   // Create an IntersectionObserver instance
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const marqueeElement = entry.target.querySelector('.marquee');

//       if (entry.isIntersecting) {
//         marqueeElement.style.setProperty('--animation-status', 'running');
//       } else {
//         marqueeElement.style.setProperty('--animation-status', 'paused');
//       }
//     });
//   }, {
//     // Adjust threshold as needed for performance or visual preference
//     threshold: 0.5 // Observe an element when 50% or more is in the viewport
//   });

//   // Observe all city elements using the observer
//   cityElements.each(function () {
//     observer.observe(this);
//   });
// });


// function observeMarquee() {
//   const marquees = document.querySelectorAll(".marquee");

//   marquees.forEach(marquee => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           marquee.style.setProperty("--animation-status", "running");
//         } else {
//           marquee.style.setProperty("--animation-status", "paused");
//         }
//       });
//     }, { threshold: 0.00000000000000000000001 });

//     observer.observe(marquee);
//   });
// }

// observeMarquee()

// $(document).ready(function() {
//   $(".marquee").each(function() {
//     const $marquee = $(this);
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           $marquee.css("--animation-status", "running");
//         } else {
//           $marquee.css("--animation-status", "paused");
//         }
//       });
//     }, { threshold: 0.01 });

//     observer.observe($marquee[0]); // Use the DOM element for observe
//   });
// });

// const marqueeElement = document.querySelector('.marquee');
// const innerElements = marqueeElement.querySelectorAll('.marquee-inner');

// const options = {
//   root: null,  // Observe relative to viewport
//   threshold: 0.5, // Start animation when 50% or more is visible
// };

// const handleIntersect = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       marqueeElement.classList.add('running'); // Add 'running' class for animation
//     } else {
//       marqueeElement.classList.remove('running'); // Remove 'running' class to pause
//     }
//   });
// };

// const observer = new IntersectionObserver(handleIntersect, options);
// observer.observe(marqueeElement);