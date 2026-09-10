// ==========================================================================
//  WDD 131 – Temple Album – temples.js
// ==========================================================================

// --- Responsive hamburger menu --------------------------------------------
const menuButton = document.getElementById("menu-button");
const navList = document.getElementById("primary-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  // Swap the icon: ☰ when closed, ✕ when open
  menuButton.innerHTML = isOpen ? "&#10005;" : "&#9776;";
});

// Close the menu after a link is chosen (small screens)
navList.addEventListener("click", (event) => {
  if (event.target.matches("a") && navList.classList.contains("open")) {
    navList.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    menuButton.innerHTML = "&#9776;";
  }
});

// --- Dynamic footer: copyright year + last modified date -----------------
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
