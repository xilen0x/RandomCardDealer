let varDiv = document.querySelectorAll("div");
for (elem of varDiv) {
    elem.addEventListener("onload", function(e){
        console.log(elem);
    });
    
}