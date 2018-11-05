window.onload = function () {
     var yin = document.getElementById("yin");
     var nei = document.getElementById("yin").getElementsByTagName("div");
     var wen = document.getElementById("wen").getElementsByTagName("li");

     for(var i = 0 ; i<wen.length ; i++){
         wen[i].id = i ;
         wen[i].onmouseover = function () {
             for (var e = 0 ; e <wen.length ; e++){
                 nei[e].style.display = "none";
             }
             yin.style.zIndex = 3 ;
             $(nei[this.id]).slideDown(500);
         }
         wen[i].onmouseout = function () {
            $(nei).slideUp(500);
            setTimeout(function () {
                yin.style.zIndex = 2;
            },500)
         }
     }

     var box_left = document.getElementById("box_left").getElementsByTagName("li");
     var yin2 = document.getElementById("yin2");
     var nei2 = document.getElementById("yin2").getElementsByTagName("div");
     var box = document.getElementById("box");
     var yuan = document.getElementById("yuan").getElementsByTagName("span");

     for(var i = 0 ; i < box_left.length ; i++){
         box_left[i].id = i ;
         box_left[i].onmouseover = function () {
             for(var e = 0 ; e<box_left.length ; e++){
                 nei2[e].style.display = 'none';
             }
             yin2.style.display = "block";
             nei2[this.id].style.display = "block";
         }
         nei2[i].onmouseout = function () {
             yin2.style.display = "none";
         }
     }

     var  bottom_left = document.getElementById("bottom_left");
     var  bottom_right = document.getElementById("bottom_right");
     var  img = document.getElementById("img");
     var  ii  = document.getElementById("img").getElementsByTagName("img");
     var  k = 0 ;


         for (var w = 0 ; w <ii.length ; w++){
             ii[w].id = w ;
         }

         for ( var  s = 0; s < yuan.length; s++) {
             yuan[s].id = s ;
             yuan[s].onmousedown = function () {
                 for (var e = 0; e < yuan.length; e++) {
                     yuan[e].className = "";
                     this.className = 'yan';
                     img.style.left = this.id * (-1203) + "px";
                 }
                 k = parseInt(this.id);
             }
         }


                bottom_right.onclick = function () {
                    // if (parseInt(img.style.left) > -6015) {
                    //     var cc = parseInt(img.style.left) - 1203 + "px";
                    //     $(img).animate({left: cc  });
                    //     k = k + 1 ;
                    //     for (var e = 0; e < yuan.length; e++) {
                    //         yuan[e].className = "";
                    //     }
                    //     yuan[k].className = "yan";
                    //
                    // } else {
                    //     img.style.left = 0 + "px";
                    //     k = 0 ;
                    //     for (var e = 0; e < yuan.length; e++) {
                    //         yuan[e].className = "";
                    //     }
                    //     yuan[k].className = "yan";
                    // }
                    viewpager(img,yuan,k);
                    k = k + 1 ;
                };
                bottom_left.onclick = function () {
                    if (parseInt(img.style.left) < 0) {
                        var dd = parseInt(img.style.left) + 1203 + "px";
                        $(img).animate({left:dd})
                        k = k - 1 ;
                        for (var e = 0; e < yuan.length; e++) {
                            yuan[e].className = "";
                        }
                        yuan[k].className = 'yan';

                    } else {
                        img.style.left = -6015 + "px";
                        k = 5 ;
                        for (var e = 0; e < yuan.length; e++) {
                            yuan[e].className = "";
                        }
                        yuan[k].className = "yan";
                    }
                }

                var timer = setInterval(bottom_right.onclick, 2000);
                box.onmouseover = function () {
                    clearInterval(timer);
                }
                box.onmouseout = function () {
                    timer = setInterval(bottom_right.onclick, 2000);
                }


                var main_box = document.getElementById("main_box");
                var hheight = document.documentElement.clientHeight;

                window.onscroll =function () {
                    var scrollTop = document.documentElement.scrollTop;
                    if (scrollTop >= hheight){
                        main_box.style.display = "block";
                    }else{
                        main_box.style.display = "none";
                    }
                }

                main_box.onclick = function () {
                        document.documentElement.scrollTop = 0;
                }


}