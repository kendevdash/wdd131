// ==========================================================================
//  WDD 131 – Filtered Temple Album – filtered-temples.js
// ==========================================================================

// Dedication dates and floor areas are real, sourced from Church Newsroom /
// Church News almanac entries and Wikipedia for each temple.
const temples = [
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Salt_Lake_Temple,_Utah_-_Sept_2004.jpg?width=800"
  },
  {
    templeName: "Kirtland",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Kirtland_Temple.jpg?width=800"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/St._George_Temple.jpg?width=800"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Logan_Utah_Temple.jpg?width=800"
  },
  {
    templeName: "Cardston Alberta",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88562,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Cardston_Alberta_Canada_Temple.jpg?width=800"
  },
  {
    templeName: "Laie Hawaii",
    location: "Laie, Hawaii, United States",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Laie_Hawaii_Temple,_Oahu,_Hawaii,_USA.jpg?width=800"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 55000,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Sao_Paulo_Brazil_Temple.jpg?width=800"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Mexico-city-mormon-temple-1441594497.jpg?width=800"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Washington_DC_Temple.JPG?width=800"
  },
  {
    templeName: "Colonia Juárez Chihuahua Mexico",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Colonial_Juarez_Temple.jpg?width=800"
  },
  {
    templeName: "Taipei Taiwan",
    location: "Taipei, Taiwan",
    dedicated: "1984, November, 17",
    area: 9945,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Taipei_Taiwan_Temple-cropped.JPG?width=800"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Temple_mormon_de_Paris_au_Chesnay_le_8_avril_2017_-_11.jpg?width=800"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/LDS_Rome_Temple.jpg?width=800"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Provo_City_Center_Temple_02.jpg?width=800"
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
