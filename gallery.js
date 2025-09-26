const options = document.querySelectorAll(".options div");
const input = document.querySelector("input");
const button = document.querySelector("button");
const items = document.querySelectorAll(".view .item");

// Function to show items by category
function showCategory(category) {
  items.forEach(item => {
    const cls = item.className.toLowerCase();

    if (category === "all") {
      item.style.display = "flex"; 
    } 
    else if (category === "wild" && cls.includes("animal")) {
      item.style.display = "flex"; 
    }
    else if (category === "flower" && cls.includes("flower")) {
      item.style.display = "flex"; 
    }
    else if (category === "food" && cls.includes("food")) {
      item.style.display = "flex"; 
    }
    else if (category === "nature" && cls.includes("nature")) {
      item.style.display = "flex"; 
    }
    else {
      item.style.display = "none";
    }
  });
}

// Click on options
options.forEach(option => {
  option.addEventListener("click", () => {
    const category = option.classList[0].toLowerCase(); 
    showCategory(category);
  });
});

// Search button click
button.addEventListener("click", () => {
  const query = input.value.trim().toLowerCase();

  if (query.includes("wild") || query.includes("animal")) {
    showCategory("wild");
  } else if (query.includes("flower") || query.includes("rose")) {
    showCategory("flower");
  } else if (query.includes("food")) {
    showCategory("food");
  } else if (query.includes("nature")) {
    showCategory("nature");
  } else if (query === "all" || query === "") {
    showCategory("all");
  } else {
    alert("No results found!");
  }
});

// Live search typing
input.addEventListener("input", () => {
  const query = input.value.trim().toLowerCase();

  if (query === "") {
    showCategory("all");
  } else if (query.startsWith("w") || query.startsWith("a")) {
    showCategory("wild");
  } else if (query.startsWith("f")) {
    if (query.includes("food")) {
      showCategory("food");
    } else {
      showCategory("flower");
    }
  } else if (query.startsWith("n")) {
    showCategory("nature");
  }
});

// Show all at start
showCategory("all");


// ========================
// LIGHTBOX FUNCTIONALITY
// ========================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const prevBtn = document.querySelector(".lightbox .prev");
const nextBtn = document.querySelector(".lightbox .next");

let currentIndex = 0;
const galleryImages = Array.from(document.querySelectorAll(".view .item img"));

// Open lightbox on image click
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox();
  });
});

function openLightbox() {
  lightbox.style.display = "flex";
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Next image
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  openLightbox();
});

// Prev image
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  openLightbox();
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") closeBtn.click();
  }
});
