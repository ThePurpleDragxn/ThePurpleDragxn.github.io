var a = 0;
function show_hide() {
    if(a == 1){
        document.getElementById("phoneNav").style.display="none";
        return a=0;
    } else {
        document.getElementById("phoneNav").style.display="flex";
        return a=1;
    }
}