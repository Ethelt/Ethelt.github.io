if (!(window.outerWidth <= 900 && window.outerHeight <= 720)) {
  document.getElementById("zdj1").style.backgroundImage="url(graf/gzdj1.jpg)";
  document.getElementById("zdj2").style.backgroundImage="url(graf/gzdj2.jpg)";
  document.getElementById("zdj3").style.backgroundImage="url(graf/gzdj3.jpg)";
} 
else {
  document.getElementById("zdj1").style.backgroundImage="url(graf/gzdj1_m.jpg)";
  document.getElementById("zdj2").style.backgroundImage="url(graf/gzdj2_m.jpg)";
  document.getElementById("zdj3").style.backgroundImage="url(graf/gzdj3_m.jpg)";
}
/*Zmień format zdjęcia z png na wysoko kompresyjny np jpeg 2000*/