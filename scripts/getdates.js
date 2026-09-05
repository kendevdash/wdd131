// Dynamically display the current (copyright) year in the footer.
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Display the date this document was last modified.
// document.lastModified returns a plain string, so no formatting is needed.
document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
