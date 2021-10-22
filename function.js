function create(){
    x = document.getElementById("team").value;
    z = "imgs/"+x+".png";
    document.getElementById("third").style.backgroundImage = `url("${z}")`;
}
function download(){
    x = document.getElementById("team").value;
    x.toLowerCase();
    z = "imgs/"+x+".png";
    document.getElementById("download").href = z;
}