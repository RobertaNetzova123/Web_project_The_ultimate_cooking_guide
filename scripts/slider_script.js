/**
 * Created by ProBook on 16.5.2018 г..
 */

var slider_content = document.getElementById('box');
var slider_text = document.getElementById('slider_name');
var recipe = document.getElementById('slider_url');
var image = ['bread', 'boiled_eggs', 'soup', 'pancakes', 'grill'];
var text = ['BREAD', 'BOILED EGGS','CHICKEN SOUP', 'PANCAKES' ,'GRILL'];
var urls = ['"bread.html"', '"boiled_eggs_page.html"', '"chicken_soup_page.html"','"pancakes_page.html"','"grill_page.html"'];
var i = image.length;


function nextImage() {
    if (i < image.length) {
        i++;
    }
    else {
        i = 1;
    }
    slider_content.innerHTML = "<img src=../images/" + image[i - 1] + ".jpg>";
    slider_text.innerHTML = text[i - 1];
    recipe.innerHTML = "<a href = " + urls[i-1] +">Go to recipe</a>";
}
//prev slide

function prevImage() {
    if (i < image.length + 1 && i > 1) {
        i--;
    }
    else {
        i = image.length;
    }
    slider_content.innerHTML = "<img src=../images/" + image[i - 1] + ".jpg>";
    slider_text.innerHTML = text[i - 1];
    recipe.innerHTML = "<a href = " + urls[i-1] +">Go to recipe</a>";

}
