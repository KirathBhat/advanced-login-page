document.getElementById("btn2").addEventListener("click", pad);
function pad() {
    document.getElementById("newcont").style.display = "block";
    setTimeout(() => {
        document.getElementById("newcont").style.opacity = "1";
        document.getElementById("newcont").style.padding = "165px 271px";
      }, 50);
    setTimeout(() => {
        document.getElementById("boxOne").style.display = "block";
        setTimeout(() => {
            document.getElementById("boxOne").style.opacity = "1";
        }, 50);
      }, 200);
}; 

document.getElementById("btn4").addEventListener("click", pod);
function pod() {
    document.getElementById("boxOne").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("boxOne").style.display = "none";
    }, 100);
    setTimeout(() => {
        document.getElementById("newcont").style.opacity = "0";
        document.getElementById("newcont").style.padding = "19px 92px";
        setTimeout(() => {
            document.getElementById("newcont").style.display = "none";
        }, 1000);
    }, 200);
}