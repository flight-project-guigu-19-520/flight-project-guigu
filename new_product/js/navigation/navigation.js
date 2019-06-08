(function (w) {
        w.navigation=function () {
            console.log(1)
            var key=document.querySelector(".key");
            var keyAgo=key.querySelector(".key_ago");
            var keyLater=key.querySelectorAll(".key_later");
            var navWrap = document.querySelector(".nav-wrap");
            var aItem = document.querySelectorAll(".item-anchor");
            var navBackground=document.querySelector(".nav_background");
            var ago=true;
            key.onclick = function () {
                if(ago){
                    keyAgo.style.display="none";
                    keyLater[0].style.display="inline-block";
                    keyLater[1].style.display="inline-block";
                    navWrap.style.top="0";
                    navBackground.style.opacity="1";
                    ago=false;
                }else{
                    vanish();
                    ago=true;
                }
            };

            for (var i = 0;i <aItem.length;i++) {
                aItem[i].onclick=function () {
                    console.log(111);
                    vanish();
                    ago = true;
                }
            }

            function vanish() {
                keyAgo.style.display="block ";
                keyLater[0].style.display="none";
                keyLater[1].style.display="none";
                navWrap.style.top="-650px";
                navBackground.style.opacity=".2";
            }
        }
    }
)(window);