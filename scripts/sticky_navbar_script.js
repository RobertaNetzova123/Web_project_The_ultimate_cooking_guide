/**
 * Created by ProBook on 16.5.2018 г..
 */

window.onscroll = function() {myFunction()};

var header = document.getElementById("scroll");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}