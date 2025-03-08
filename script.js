function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");

  // Check if we are on mobile
  const isMobile = window.innerWidth <= 768;

  navbar.classList.toggle("expanded");
  // Toggle navbar visibility
  // if (isMobile) {
  //     //// if expanded class has already here, remove it, if don't have add it
  //     navbar.classList.toggle("expanded");
  // } else {
  //     // Desktop: Expand/collapse only
  //     if (navbar.classList.contains("expanded")) {
  //         navbar.classList.remove("expanded");
  //     } else {
  //         navbar.classList.add("expanded");
  //     }
  // }

  // Toggle floating menu button visibility (only for mobile)
  if (isMobile) {
      if (navbar.classList.contains("expanded")) {
          menuBtn.style.display = "none";  // Hide floating button
      } else {
          menuBtn.style.display = "flex";  // Show floating button
      }
  }
}

// Ensure navbar is reset when resizing from mobile to desktop
window.addEventListener("resize", function () {
  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");

  if (window.innerWidth > 768) {
      navbar.classList.remove("expanded");  // Always collapse navbar
      menuBtn.style.display = "none"; // Hide floating button
  } else {
      menuBtn.style.display = "flex"; // Show floating button on mobile
  }
});
