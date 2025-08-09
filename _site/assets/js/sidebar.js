// Accordion 
function show_sidebar_submenu(num1, num2) {
  var x = document.getElementById("sidebar-submenu-"+num1+"-"+num2);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function toggleSubmenu(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('w3-show');
  el.classList.toggle('w3-hide');
}

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}