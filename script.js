
// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("hidden");
  e.stopPropagation(); // Prevent the click from closing menu immediately
});

// Close mobile menu if clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.add("hidden");
  }
});

// Optional: close menu when clicking a link inside
const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Gallery Image Modal
function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = src;           // Set clicked image
  modal.classList.remove("hidden");
  modal.style.display = "flex";   // Show modal as flex
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  modal.style.display = "none";   // Hide modal
}

// Close modal when clicking outside the image
document.getElementById("imageModal").addEventListener("click", (e) => {
  if(e.target.id === "imageModal") {
    closeModal();
  }
});

// Video Modal
function openVideoModal(src) {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    modalVideo.src = src;
    modal.classList.remove("hidden");
    modal.style.display = "flex";
    modalVideo.play(); // auto-play when opened
  }
  
  function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    modalVideo.pause();   // pause when closed
    modalVideo.src = "";  // reset source
    modal.classList.add("hidden");
    modal.style.display = "none";
  }
  
  // Close video modal by clicking outside video
  document.getElementById("videoModal").addEventListener("click", (e) => {
    if (e.target.id === "videoModal") closeVideoModal();
  });
  

// Horizontal Scroll Drag for Gallery (Optional)
const scrollContainers = document.querySelectorAll(".scroll-container");
scrollContainers.forEach(container => {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("cursor-grabbing");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("cursor-grabbing");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("cursor-grabbing");
  });

  container.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    container.scrollLeft = scrollLeft - walk;
  });
});
