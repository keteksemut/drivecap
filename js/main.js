// $(document).ready(function () {
//     // Cache the selector for better performance
//     const cityElements = $(".cities-items");
  
//     // Use event delegation to improve performance
//     cityElements.on('mouseover mouseout', function (event) {
//       event.stopPropagation(); // Add this line to stop propagation
//         $(event.currentTarget).find('.marquee').css("--animation-status", event.type === "mouseover" ? "running" : "paused");
//     });
// });
