(
    function (w) {
        w.navigation=function () {
            var key=document.querySelector(".key");
            var keyAgo=key.querySelector(".key_ago");
            var keyLater=key.querySelectorAll(".key_later");
            var nav_background=document.querySelector(".nav_background");
            var navItem=document.querySelectorAll(".nav-list .nav-item");
            var aItem = document.querySelectorAll(".item-anchor");
            var ago=true;

            key.onclick=function () {

                if (ago) {

                    keyAgo.style.opacity = 0;
                    keyLater[0].style.opacity = 1;
                    keyLater[1].style.opacity = 1;
                    nav_background.style.opacity = 1;
                    nav_background.style.backgroundPositionY = "0";
                    for (var i = 0; i < navItem.length; i++) {
                        // navItem[i].style.animation="fadeInUp 1s linear "+i+"s" ;
                        navItem[i].style.transition = "all 1s linear " + (1 + i / 5) + "s";
                        navItem[i].style.opacity = 1;
                    }
                    ago = false;

                } else {
                    vanish();
                    ago = true;
                }
            }
            for (var i = 0;i <aItem.length;i++) {
                aItem[i].onclick=function () {
                    console.log(111)
                    vanish();
                    ago = true;
                }
            }

            function vanish() {
                keyAgo.style.opacity=1;
                keyLater[0].style.opacity=0;
                keyLater[1].style.opacity=0;
                nav_background.style.opacity=.2;
                nav_background.style.backgroundPositionY="-980px";
                for (var i = 0;i < navItem.length;i++){
                    // navItem[i].style.animation="fadeOutDown 1s linear "+i+"s" ;
                    navItem[i].style.transition="all 1s linear "+i/5+"s" ;
                    navItem[i].style.opacity=0;
                }
            }
        }
    }
)(window)