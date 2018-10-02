function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initiate() {
    var style1 = document.getElementById("styleen");
    var style2 = document.getElementById("stylekw");

  style1.onclick = function () { swapStyleSheet("english.css") };
  style2.onclick = function () { swapStyleSheet("cornish.css") };
}

window.onload = initiate;
