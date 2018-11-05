function viewpager(img,dot,k) {
    if (parseInt(img.style.left) > -6015) {
        var cc = parseInt(img.style.left) - 1203 + "px";
        $(img).animate({left: cc  });
        for (var e = 0; e < dot.length; e++) {
            dot[e].className = "";
        }
        dot[k].className = "yan";

    } else {
        img.style.left = 0 + "px";
        for (var e = 0; e < dot.length; e++) {
           dot[e].className = "";
        }
        dot[k].className = "yan";
    }
}