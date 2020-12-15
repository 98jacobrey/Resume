var infoIndex = 1;
showInfo(infoIndex);

function newInfo(n){
    showInfo(infoIndex = n)
}

function showInfo(n){
    var i;
    var info = document.getElementsByClassName("info")
    if (n > info.length) {infoIndex = 1}
    if (n < 1) {infoIndex = info.length}
    for(i = 0; i < info.length; i++){
        info[i].style.display = "none"
    }
    info[infoIndex-1].style.display = "block"
}

var expand = document.getElementsByClassName("expand");
var i;

for (i = 0; i < expand.length; i++){
    expand[i].addEventListener("click", function(){
        var content = this.nextElementSibling;
        if (content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block"
        }
    })
}