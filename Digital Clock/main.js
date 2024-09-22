function show(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h >= 12){
        session = "PM";
        h -= 12;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;



    var time = h +":" + m + ":" + s + " "+ session;
    document.getElementById("clock").textContent = time;
    document.getElementById("clock").innerText = time;
    
    setTimeout(show, 1000);

};
show();