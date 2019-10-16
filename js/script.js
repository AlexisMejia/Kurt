

var var1 = document.getElementById("li1");
var var2 = document.getElementById("li2");
var var3 = document.getElementById("li3");
var var4 = document.getElementById("li4");
var var5 = document.getElementById("li5");
var var6 = document.getElementById("li6");

var ari1 = document.getElementById("art1");
var ari2 = document.getElementById("art2");
var ari3 = document.getElementById("art3");
var ari4 = document.getElementById("art4");
var ari5 = document.getElementById("art5");
var f = document.getElementById("fake");

var list = [var1, var2, var3, var4, var5,var6]
var ter = [ari1, ari2, ari3, ari4, ari5, f]
var cont1 = 1;


jQuery(document).ready(function () {
    jQuery('.fad').click(function () {
        jQuery('.sidebar').toggleClass('active')
    });
});

function openArticles(id) {
    var cont = 1;
    console.log(id);

    fake.style.display="none";
    ter.forEach(element => {

        if (cont == id) {
            element.style.display = "block"
        } else {
            element.style.display = "none";
        }
        cont++;
    });


}

list.forEach(element => {
    console.log(element);
    console.log(cont1)
    element.addEventListener('click', function () {
        openArticles(parseInt(element.getAttribute("value")));
    });
    let articulo = document.getElementById(`art${cont1}`)
    articulo.style.display = "none";

    cont1++;
});
