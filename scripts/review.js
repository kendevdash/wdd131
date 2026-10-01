// ==========================================================================
//  WDD 131 – Product Review Form – review.js
// ==========================================================================

// Count how many reviews have been submitted on this browser, persisted
// across visits in localStorage.
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent = reviewCount;

// --- Dynamic footer: copyright year + last modified date -----------------
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
