 let menuButton = document.getElementById("menu-toggle");
  let menu = document.getElementById("main-nav");
  let menuImage = menuButton.querySelector("img");

  // 2. Put your two image paths here
  let hamburgerImage ="assets/images/icons8-menu-100.png" ;
  let closeImage = "assets/images/icons8-close-100.png";

  
  // 3. This runs every time the button is clicked
  menuButton.onclick = function () {
    if (menu.classList.contains("nav-open")) {
      // Menu is open, so close it and show the hamburger image
      menu.classList.remove("nav-open");
      menuImage.src = hamburgerImage;
    } else {
      // Menu is closed, so open it and show the X image
      menu.classList.add("nav-open");
      menuImage.src = closeImage;
    }
  };








 















