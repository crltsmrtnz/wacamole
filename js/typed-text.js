$(function(){
        $("#typed").typed({
          strings: ["MARKETING DIGITAL", "DISEÑO WEB", "SOCIAL MEDIA", "FOTOGRAFÍA", "BRANDING"],
          typeSpeed: 50,
          backDelay: 2000,
          autoInsertCss: true,
          loop: false,
          loopCount: false,
          callback: function(){ foo(); }
        });
        function foo(){ console.log("Callback"); }
      });


//linea 206 tuped.js para cambiar loop