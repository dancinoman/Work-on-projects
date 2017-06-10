

 src="https://code.jquery.com/jquery-3.2.1.min.js"
 integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
 src="http://code.jquery.com/jquery-3.2.1.js"
 integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
 crossorigin="anonymous">


 $(document).ready(function(){
       $("#happyMusic").trigger("pause");

        //When user click on button, another one appears and so on...
        $("#button1").click(function(){
              $("#button2").show();
              $("#button1").css({
                    'width': '100px',
                    'height': '60px',
                    'font-size': '17px'
                  });
              $("#happyB").css( 'margin-top', '0px');
        });

        $("#button2").click(function(){
              $("#button3").show();
              $("#button2").css({
                   'width' :    '100px',
                   'height':    '60px',
                   'font-size': '17px',
                 });
              $("#wish1").css( 'margin-top', '0px');
        });

        $("#button3").click(function(){
              $("#button4").show();
              $("#button3").css({
                   'width':     '100px',
                   'height':    '60px',
                   'font-size': '17px',
                 });
              $("#wish2").css( 'margin-top', '0px');
        });

        $("#button4").click(function(){
          $("#button1, #button2, #button3, #button4").hide();
          /*$("#button5").show();*/
          $("body").css({
                'background-repeat':   'no-repeat',
                'background-position': 'top',
                'background-size':     '100%',
                'background-image':     'url("https://media.giphy.com/media/14mSeK935HLtjq/giphy.gif")'
          })

          $("#happyMusic").trigger("play");
      });

   });
