var slideIndex1 = 1;
showDivs1(slideIndex1);

function slideBtn1(n) {
    showDivs1(slideIndex1 += n);
}
function showDivs1(n) {
    var i;
    var x = document.getElementsByClassName("slides1");
    if (n > x.length) {slideIndex1 = 1}    
    if (n < 1) {slideIndex1 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex1-1].style.display = "flex";
}

var slideIndex2 = 1;
showDivs2(slideIndex2);

function slideBtn2(n) {
    showDivs2(slideIndex2 += n);
}
function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("slides2");
    if (n > x.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex2-1].style.display = "flex";
}

var slideIndex3 = 1;
showDivs3(slideIndex3);

function slideBtn3(n) {
    showDivs3(slideIndex3 += n);
}
function showDivs3(n) {
    var i;
    var x = document.getElementsByClassName("slides3");
    if (n > x.length) {slideIndex3 = 1}    
    if (n < 1) {slideIndex3 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex3-1].style.display = "flex";
}

var slideIndex4 = 1;
showDivs4(slideIndex4);

function slideBtn4(n) {
    showDivs4(slideIndex4 += n);
}
function showDivs4(n) {
    var i;
    var x = document.getElementsByClassName("slides4");
    if (n > x.length) {slideIndex4 = 1}    
    if (n < 1) {slideIndex4 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex4-1].style.display = "flex";
}