var wWidth = window.outerWidth;
var wHeight = window.outerHeight;
if (wWidth <= 900 && wHeight <= 720) {
  document.getElementById("bt2button1").setAttribute("onclick","arrow_to_2()");
  document.getElementById("bt2").appendChild(document.createElement("div"));
  document.getElementById("bt2").getElementsByTagName("div")[7].setAttribute("id","bt2downscroll");
  var downscroll = document.getElementById("bt2downscroll");
  downscroll.style.height = "10%";
  if (wWidth >= wHeight) {		/*służy do zaokrąglania kuleczek na dole*/
    downscroll.style.width = "18%";
    downscroll.style.margin = "0 41%";
  }
  if (wWidth < wHeight) {
    downscroll.style.width = "28%";
	downscroll.style.margin = "0 36%";
  }
  downscroll.style.boxSizing = "border-box";
  downscroll.style.padding = "10px";
  downscroll.appendChild(document.createElement("div"));
  downscroll.appendChild(document.createElement("div"));
  downscroll.appendChild(document.createElement("div"));
  downscroll.getElementsByTagName("div")[0].setAttribute("id","bt2s1");
  downscroll.getElementsByTagName("div")[1].setAttribute("id","bt2s2");
  downscroll.getElementsByTagName("div")[2].setAttribute("id","bt2s3");
  downscroll.getElementsByTagName("div")[0].setAttribute("class","bt2s");
  var i, tagsbt2s, lentagsbt2s;
  tagsbt2s = downscroll.getElementsByTagName("div");
  lentagsbt2s = tagsbt2s.length;
  for (i=0; i<lentagsbt2s ;i++) {
	  tagsbt2s[i].setAttribute("class","bt2s");
	  tagsbt2s[i].style.height = "100%";
	  tagsbt2s[i].style.width = "31%";
	  tagsbt2s[i].style.float = "left";
	  tagsbt2s[i].style.boxSizing = "border-box";
	  tagsbt2s[i].style.borderRadius = "50%";
	  tagsbt2s[i].style.margin = "0 1%";
	  tagsbt2s[i].style.backgroundColor = "#ddd";
	  tagsbt2s[i].style.transition = "background-color 1s linear";
  }
  tagsbt2s[0].style.backgroundColor = "#1ca71c";
  document.getElementById("bt2d3").style.width = "15%";
  document.getElementById("bt2d5").style.width = "15%";
	
  function arrow_to_2() {
	  document.getElementById("bt2imgs1").style.transform = "rotate(180deg)";
	  document.getElementById("bt2d3").style.marginLeft = "0";
	  document.getElementById("bt2d2").style.display = "none";
	  document.getElementById("bt2d4").style.display = "block";
	  document.getElementById("bt2d5").style.display = "block";
	  tagsbt2s[1].style.transition = "background-color 1s linear";
	  tagsbt2s[1].style.backgroundColor = "#1ca71c";
	  tagsbt2s[0].style.transition = "background-color 0.5s linear";
	  tagsbt2s[0].style.backgroundColor = "#ddd";
	  document.getElementById("bt2button1").setAttribute("onclick","arrow_back_1()");
	  document.getElementById("bt2button2").setAttribute("onclick","arrow_to_3()");
  }
  function arrow_back_1() {
	  document.getElementById("bt2imgs1").style.transform = "rotate(0deg)";
	  document.getElementById("bt2d4").style.display = "none";
	  document.getElementById("bt2d5").style.display = "none";
	  document.getElementById("bt2d2").style.marginLeft = "15%";
	  document.getElementById("bt2d3").style.marginLeft = "0";
	  document.getElementById("bt2d2").style.display = "block";
	  tagsbt2s[0].style.transition = "background-color 1s linear";
	  tagsbt2s[0].style.backgroundColor = "#1ca71c";
	  tagsbt2s[1].style.transition = "background-color 0.5s linear";
	  tagsbt2s[1].style.backgroundColor = "#ddd";
	  document.getElementById("bt2button1").setAttribute("onclick","arrow_to_2()");
  }
  function arrow_to_3() {
	  document.getElementById("bt2imgs2").style.transform = "rotate(180deg)";
	  document.getElementById("bt2d4").style.display = "none";
	  document.getElementById("bt2d3").style.display = "none";
	  document.getElementById("bt2d6").style.marginRight = "15%";
	  document.getElementById("bt2d5").style.marginLeft = "0";
	  document.getElementById("bt2d6").style.display = "block";
	  tagsbt2s[2].style.transition = "background-color 1s linear";
	  tagsbt2s[2].style.backgroundColor = "#1ca71c";
	  tagsbt2s[1].style.transition = "background-color 0.5s linear";
	  tagsbt2s[1].style.backgroundColor = "#ddd";
	  document.getElementById("bt2button2").setAttribute("onclick","arrow_back_2()");
  }
  function arrow_back_2() {
	  document.getElementById("bt2imgs2").style.transform = "rotate(0deg)";
	  document.getElementById("bt2d6").style.display = "none";
	  document.getElementById("bt2d5").style.marginLeft = "0";
	  document.getElementById("bt2d3").style.marginLeft = "0";
	  document.getElementById("bt2d4").style.display = "block";
	  document.getElementById("bt2d3").style.display = "block";
	  tagsbt2s[1].style.transition = "background-color 1s linear";
	  tagsbt2s[1].style.backgroundColor = "#1ca71c";
	  tagsbt2s[2].style.transition = "background-color 0.5s linear";
	  tagsbt2s[2].style.backgroundColor = "#ddd";
	  document.getElementById("bt2button2").setAttribute("onclick","arrow_to_3()");
  }
}