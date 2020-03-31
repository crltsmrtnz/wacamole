// Nav bar animate 
//$("body").css({"overflowX": "hidden"});
var logoMarginTop = "";
var logo = "";
var logoWidth = "";
var logoIdMargin = "";
var logoTopWith = "";
var flag = false;
var scroll;

        $(document).ready(function(){
          $("#porfolio").css({"display": "none"});
          $("#nav_img").css({ "display": "none"});
          

          $("header").css({"width":$(window).width() + "px"});

          

          $(window).scroll(function(){
            scroll = $(window).scrollTop();

            if(scroll > 50){
              if(!flag){
                //barra
                var logoWidth = "";
                var logoHeight = "";
                if ($(window).width() < 768) {
                  logo = "logo@3x";
                  logoWidth = "81";
                } else {
                  logo = "Group@2x";
                  logoWidth = "250";
                  $("#logo_id").css({"margin-left":"20%"});
                  $("#menu_id").css({"margin-right":"20%"});
                }
                $("#logo").css({ "margin-top": "0", "width": logoWidth + "px", "height": "29px" }).attr("src","imgs/"+ logo +".svg");

                $("header").css({ "background-color": "#ffffff", "-webkit-box-shadow": "0px 2px 12px 0px rgba(0, 0, 0, 0.07)",
                  "-moz-box-shadow": "0px 2px 12px 0px rgba(0, 0, 0, 0.07)", "box-shadow": "0px 2px 12px 0px rgba(0, 0, 0, 0.07)"});
                
                $("#nav_img").css({ "display": "block", "-webkit-animation": "fadeIn 2s", "animation": "fadeIn 2s" });
                $(".porfolio").css({"display": "block"});
                $("nav").css({ "display": "block" });
                flag = true;
              }
            }else{
              if(flag){
                //header
                var logoMarginTop = "";
                if ($(window).width() < 768) {
                  // logoMarginTop = "25";
                  // logoWidth = "214";
                  // logoHeight = "65.7";
                }else{
                  // logoMarginTop = "50";
                  // logoWidth = "427";
                  // logoHeight = "131";
                }
                // $("#logo_id").css({ "margin-left": "0" });
                $("#menu_id").css({"margin-right":"0"});
                // $("#logo").css({ "margin-top": logoMarginTop + "25px", "width": logoWidth + "214px", "height": logoHeight + "65.7px" }).attr("src", "imgs/wacamole-1.png");
                $("header").css({
                  "background-color": "#ffffff", "-webkit-box-shadow": "",
                  "-moz-box-shadow": "", "box-shadow": ""
                });
                $("#nav_img").css({ "display": "none", "-webkit-animation": "fadeOut 2s", "animation": "fadeOut 2s" });
                $(".porfolio").css({"display": "none"});
                $("nav").css({ "display": "table" });
                flag = false;
              }
            }
          });

        });

        $(window).resize(function () {
          $("header").css({ "width": $(window).width() + "px" });
          $("#banner").css({"height": $(window).height()  + "px"});
          
          if ($(window).width() < 768) {
            logoMarginTop = "25";
            logo = "logo@3x";
            logoTopWith = "81";
            logoWidth = "214";
            logoHeight = "65.7";
            logoIdMargin="0px";
          } else {
            logoMarginTop = "50";
            logo = "Group@2x";
            logoTopWith = "259";
            logoWidth = "427";
            logoHeight = "131";
            logoIdMargin = "20%";
          }
          if ($(window).scrollTop()>50){
            $("#logo").css({ "margin-top": "-10px", "width": logoTopWith + "px", "height": "30px" }).attr("src", "imgs/" + logo + ".svg");
            $("#logo_id").css({ "margin-left": logoIdMargin });
          }else{
            $("#logo").css({
              "margin-top": logoMarginTop + "px", "width": logoWidth + "px", "height": logoHeight+"px"  }).attr("src", "imgs/logo-svg.svg");
            $("#logo_id").css({ "margin-left": "0" });
          }
          
        });
        // Nav bar animate








          // animation img fade in left-right
          $(function(){
              AOS.init();
            }) 
          // end animation

          // interval letter change words
          var intervalID = setInterval(function(){
          // every 4 seconds execute following
          var visibleWord = document.getElementsByClassName('visible')[0];
          if (!visibleWord) {
            return;
          }
          nextWord = visibleWord.nextSibling;
          // check if nextSibling is textnode (whitespace) - if so get next next sibling. 
          if(nextWord.nodeType == 3) nextWord = nextWord.nextSibling;
          // if there is a next node 
          if(!(nextWord == null)) {
            visibleWord.setAttribute('class','hidden');
            nextWord.setAttribute('class','visible');
          } else {
            clearInterval(intervalID);
          }
        }, 3000)