// ==========================================================================
//  WDD 131 – Filtered Temple Album – filtered-temples.js
// ==========================================================================

// The first 7 entries are the assignment's starter data (unchanged). The
// remaining entries were added to reach 10+; their dedication dates and
// floor areas are real, sourced from Church Newsroom / Church News almanac
// entries and Wikipedia for each temple.
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/salt-lake-temple.webp"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl: "images/st-george-temple.webp"
  },
  {
    templeName: "Kirtland",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl: "images/kirtland-temple.webp"
  },
  {
    templeName: "Colonia Juárez Chihuahua Mexico",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl: "images/colonia-juarez-temple.webp"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/rome-italy-temple.webp"
  }
];

// --- Render temple cards ---------------------------------------------------
const container = document.querySelector("#temple-cards");

function displayTemples(templeList) {
  container.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("figure");

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" width="800" height="600" loading="lazy">
      <figcaption>
        <h2>${temple.templeName}</h2>
        <p>${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;

    container.appendChild(card);
  });
}

displayTemples(temples);

// --- Filters -----------------------------------------------------------
const filters = {
  home: (templeList) => templeList,
  old: (templeList) => templeList.filter((temple) => parseInt(temple.dedicated) < 1900),
  new: (templeList) => templeList.filter((temple) => parseInt(temple.dedicated) > 2000),
  large: (templeList) => templeList.filter((temple) => temple.area > 90000),
  small: (templeList) => templeList.filter((temple) => temple.area < 10000)
};

const filterLinks = document.querySelectorAll(".nav-list a");

filterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    filterLinks.forEach((otherLink) => otherLink.classList.remove("active"));
    link.classList.add("active");

    displayTemples(filters[link.id](temples));
  });
});

// --- Mobile hamburger navigation -------------------------------------------
const menuButton = document.getElementById("menu-button");
const navList = document.getElementById("primary-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuButton.innerHTML = isOpen ? "&#10005;" : "&#9776;";
});

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
