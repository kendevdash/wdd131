const places = [
  {
    name: "Kakum National Park",
    region: "Central Region",
    type: "Nature",
    image: "images/kakum.webp",
    description: "Visitors can walk on the famous canopy walkway, enjoy the rainforest, and see different plants and animals."
  },
  {
    name: "Cape Coast Castle",
    region: "Central Region",
    type: "History",
    image: "images/cape-coast-castle.webp",
    description: "Visitors can tour the castle, see the old rooms and dungeons, and learn about Ghana's history."
  },
  {
    name: "Elmina Castle",
    region: "Central Region",
    type: "History",
    image: "images/elmina-castle.webp",
    description: "Visitors can explore the castle, learn about its history, and see important historical areas inside the building."
  },
  {
    name: "Mole National Park",
    region: "Savannah Region",
    type: "Wildlife",
    image: "images/mole-national-park.webp",
    description: "Visitors can go on wildlife tours and have the opportunity to see elephants and other animals."
  },
  {
    name: "Wli Waterfalls",
    region: "Volta Region",
    type: "Nature",
    image: "images/wli-waterfalls.webp",
    description: "Visitors can hike through the natural surroundings and enjoy the beautiful waterfall and scenery."
  },
  {
    name: "Manhyia Palace",
    region: "Ashanti Region",
    type: "Culture",
    description: "Visitors can learn about Ashanti history, culture, traditional leadership, and the Asante royal family."
  },
  {
    name: "Kwame Nkrumah Memorial Park",
    region: "Greater Accra Region",
    type: "History",
    description: "Visitors can learn about Kwame Nkrumah, Ghana's independence, and important events in the country's history."
  },
  {
    name: "Aburi Botanical Gardens",
    region: "Eastern Region",
    type: "Nature",
    description: "Visitors can walk around the gardens, see different plants and trees, and enjoy the peaceful environment."
  },
  {
    name: "Lake Bosomtwe",
    region: "Ashanti Region",
    type: "Nature",
    description: "Visitors can enjoy the lake scenery, explore the surrounding communities, and learn about the cultural importance of the lake."
  },
  {
    name: "Shai Hills",
    region: "Greater Accra Region",
    type: "Wildlife",
    description: "Visitors can explore the hills, enjoy the natural environment, and look for wildlife in the reserve."
  },
  {
    name: "Larabanga Mosque",
    region: "Savannah Region",
    type: "Culture",
    description: "Visitors can see the traditional architecture and learn about the history and culture connected to the mosque."
  },
  {
    name: "Paga Crocodile Pond",
    region: "Upper East Region",
    type: "Wildlife",
    description: "Visitors can see crocodiles and learn about the traditional relationship between the crocodiles and the local community."
  },
  {
    name: "Boti Falls",
    region: "Eastern Region",
    type: "Nature",
    description: "Visitors can hike to the waterfall, enjoy the forest surroundings, and take pictures of the beautiful scenery."
  },
  {
    name: "Akosombo Dam",
    region: "Eastern Region",
    type: "History",
    description: "Visitors can see the dam, enjoy views around the Volta River, and learn about its importance to Ghana's electricity production."
  },
  {
    name: "National Museum of Ghana",
    region: "Greater Accra Region",
    type: "Culture",
    description: "Visitors can see historical and cultural objects and learn more about Ghana's history, people, and traditions."
  }
];

function displayPlaces(placeList, targetSelector = "#places") {
  const container = document.querySelector(targetSelector);

  if (!container) {
    return;
  }

  if (placeList.length === 0) {
    container.innerHTML = "<p>No places were found.</p>";
    return;
  }

  container.innerHTML = placeList.map(place => `
    <article class="place-card">
      ${place.image ? `<img src="${place.image}" alt="${place.name}" loading="lazy" width="400" height="260">` : ""}
      <h2>${place.name}</h2>
      <p><strong>Region:</strong> ${place.region}</p>
      <p><strong>Type:</strong> ${place.type}</p>
      <p>${place.description}</p>
    </article>
  `).join("");
}

displayPlaces(places);

// The home page only shows the places that currently have a photo,
// so "Featured Places" always looks complete even while most of the
// 15 place objects are still waiting on images.
const featuredPlaces = places.filter(place => place.image);
displayPlaces(featuredPlaces, "#featured-places");

function filterPlaces(category) {
  if (category === "all") {
    displayPlaces(places);
  } else {
    const filteredPlaces = places.filter(
      place => place.type.toLowerCase() === category
    );

    displayPlaces(filteredPlaces);
  }
}

const placeFilter = document.querySelector("#place-filter");

if (placeFilter) {
  placeFilter.addEventListener("change", () => {
    filterPlaces(placeFilter.value);
  });
}

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
  });
}

function showVisitMessage() {
  const message = document.querySelector("#visit-message");

  if (!message) {
    return;
  }

  const previousVisit = localStorage.getItem("lastVisit");

  if (previousVisit) {
    message.textContent = `Welcome back! Your last visit was ${previousVisit}.`;
  } else {
    message.textContent = "Welcome to Explore Ghana! This is your first visit.";
  }

  localStorage.setItem("lastVisit", new Date().toLocaleString());
}

showVisitMessage();

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = `${new Date().getFullYear()}`;
}
