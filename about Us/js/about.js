(function () {
    const wrap = document.querySelector('#wrap');
    const content = document.querySelector('#wrap .content');
    const scroll = document.querySelector('#wrap .scroll');
    const bar = document.querySelector('#wrap .scroll .Bar');
    let viewHeight=document.documentElement.clientHeight;
    const conHeight=content.clientHeight;


    scroll.style.height=viewHeight+'px';
    bar.style.height=viewHeight/conHeight*viewHeight+'px';
    window.onresize = function(){
        viewHeight=document.documentElement.clientHeight;
        scroll.style.height=viewHeight+'px';
        bar.style.height=viewHeight/conHeight*viewHeight+'px';
        bar.style.top=-content.offsetTop/(content.clientHeight-viewHeight)*(scroll.clientHeight-bar.clientHeight)+'px';
    };

    scrollBar(scroll,bar);
    function scrollBar(oBox,oBar){
        oBar.onmousedown=function (ev){
            const e=ev||window.event;
            if (e.preventDefault) {
                e.preventDefault();
            } else{
                e.returnValue=false;
            }
            const downY=e.clientY-oBar.offsetTop;
            document.onmousemove=function (ev){
                const e=ev||window.event;
                let top=e.clientY-downY;
                if (top<=0) {
                    top=0;
                }
                if (top>=oBox.clientHeight-oBar.clientHeight) {
                    top=oBox.clientHeight-oBar.clientHeight;
                }
                const scale=top/(oBox.clientHeight-oBar.clientHeight);
                const contentY=scale*(content.clientHeight-viewHeight);
                oBar.style.top=top+'px';
                content.style.top=-contentY+'px';

                oAnimations();
            };
            document.onmouseup=function (){
                document.onmousemove=null;
            }
        }
    }

    contact ();
    function contact (){
        wrap.onmousewheel = scrollMove;
        //firefox
        if(wrap.addEventListener){
            wrap.addEventListener('DOMMouseScroll',scrollMove);
        }

        function scrollMove(event) {
            event = event || window.event;
            let flag = '';
            if(event.wheelDelta){
                //ie/chrome
                if(event.wheelDelta > 0){
                    //上
                    flag = 'up';
                }else {
                    //下
                    flag = 'down'
                }
            }else if(event.detail){
                //firefox
                if(event.detail < 0){
                    //上
                    flag = 'up';
                }else {
                    //下
                    flag = 'down'
                }
            }
            switch (flag){
                case 'up':
                    //内容往下走
                    var scrollHei=content.offsetTop+100;
                    if (scrollHei>=0) {
                        scrollHei=0;
                    };
                    if (scrollHei<=-(content.clientHeight-viewHeight)) {
                        scrollHei=-(content.clientHeight-viewHeight);
                    };
                    var scale=scrollHei/(content.clientHeight-viewHeight);
                    var top=scale*(scroll.clientHeight-bar.clientHeight);
                    content.style.top=scrollHei+'px';
                    bar.style.top=-top+'px';
                    break;
                case 'down':
                    //内容往上走
                    var scrollHei=content.offsetTop-100;
                    if (scrollHei>=0) {
                        scrollHei=0;
                    };
                    if (scrollHei<=-(content.clientHeight-viewHeight)) {
                        scrollHei=-(content.clientHeight-viewHeight);
                    };
                    var scale=scrollHei/(content.clientHeight-viewHeight);
                    var top=scale*(scroll.clientHeight-bar.clientHeight);
                    content.style.top=scrollHei+'px';
                    bar.style.top=-top+'px';
                    break;
            }

            oAnimations();
            //取消默认行为

            event.preventDefault && event.preventDefault();
            return false;
        }
    }

    const animationArr = [
        {
            inAnimation:function(){
                let con2Left = document.querySelector('#wrap .content .contentList .con2 .con2_left');
                let con2Right =document.querySelector('#wrap .content .contentList .con2 .con2_right');
                con2Left.style.transform = 'translate3d(0,0,0)';
                con2Right.style.transform = 'translate3d(0,0,0)';
                con2Left.style.opacity = '1';
                con2Right.style.opacity = '1';
            },
            outAnimation:function () {
                let con2Left = document.querySelector('#wrap .content .contentList .con2 .con2_left');
                let con2Right = document.querySelector('#wrap .content .contentList .con2 .con2_right');
                con2Left.style.transform = 'translate3d(-300px,0,0)';
                con2Left.style.opacity = '0';
                con2Right.style.transform = 'translate3d(0,300px,0)';
                con2Right.style.opacity = '0';
            }
        },
        {
            inAnimation:function(){
                let con3H1 = document.querySelector('#wrap .content .contentList .con3 h1');
                let con3H2 = document.querySelector('#wrap .content .contentList .con3 h2');
                let con3LI = document.querySelectorAll('#wrap .content .contentList .con3 ul li');
                con3H1.style.transform ='translate3d(0,0,0)';
                con3H2.style.transform ='translate3d(0,0,0)';
                for (let i=0 ;i < con3LI.length ;i++){
                    con3LI[i].style.transform ='translate3d(0,0,0)';
                    con3LI[i].style.opacity = '1';
                }
                // con3LI.style.transform ='translate3d(0,0,0)';
                con3H1.style.opacity = '1';
                con3H2.style.opacity = '1';
                // con3LI.style.opacity = '1';
            },
            outAnimation:function () {
                let con3H1 = document.querySelector('#wrap .content .contentList .con3 h1');
                let con3H2 = document.querySelector('#wrap .content .contentList .con3 h2');
                let con3LI = document.querySelectorAll('#wrap .content .contentList .con3 ul li');
                con3H1.style.transform ='translate3d(0,160px,0)';
                con3H2.style.transform ='translate3d(0,160px,0)';
                // con3LI.style.transform ='translate3d(0,160px,0)';
                con3H1.style.opacity = '0';
                con3H2.style.opacity = '0';
                // con3LI.style.opacity = '0';
                for (let i=0 ;i < con3LI.length ;i++){
                    con3LI[i].style.transform ='translate3d(0,160px,0)';
                    con3LI[i].style.opacity = '0';
                }
            }
        },
        {
            inAnimation:function(){
                let con4H1 = document.querySelector('#wrap .content .contentList .con4 h1');
                let con4H2= document.querySelector('#wrap .content .contentList .con4 h2');
                let con4Left= document.querySelector('#wrap .content .contentList .con4_left');
                let con4Right = document.querySelector('#wrap .content .contentList .con4_right');
                con4H1.style.transform ='translate3d(0,0,0)';
                con4H2.style.transform ='translate3d(0,0,0)';
                con4Left.style.transform ='translate3d(0,0,0)';
                con4Right.style.transform ='translate3d(0,0,0)';
                con4H1.style.opacity = '1';
                con4H2.style.opacity = '1';
                con4Left.style.opacity = '1';
                con4Right.style.opacity = '1';
            },
            outAnimation:function () {
                let con4H1 = document.querySelector('#wrap .content .contentList .con4 h1');
                let con4H2= document.querySelector('#wrap .content .contentList .con4 h2');
                let con4Left= document.querySelector('#wrap .content .contentList .con4_left');
                let con4Right = document.querySelector('#wrap .content .contentList .con4_right');
                con4H1.style.transform ='translate3d(-300px,0,0)';
                con4H2.style.transform ='translate3d(-300px,0,0)';
                con4Left.style.transform ='translate3d(0,800px,0)';
                con4Right.style.transform ='translate3d(0,800px,0)';
                con4H1.style.opacity = '0';
                con4H2.style.opacity = '0';
                con4Left.style.opacity = '0';
                con4Right.style.opacity = '0';
            }
        },


    ];

    function oAnimations() {
        if(-content.offsetTop> 500){
            animationArr[0].inAnimation()
        }else {
            animationArr[0].outAnimation()
        }
        if(-content.offsetTop> 1350){
            animationArr[1].inAnimation()
        }else {
            animationArr[1].outAnimation()
        }
        if(-content.offsetTop> 2200){
            animationArr[2].inAnimation()
        }else {
            animationArr[2].outAnimation()
        }
    }

})(window);