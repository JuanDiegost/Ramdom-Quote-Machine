$(document).ready(function() {
  console.log("sddsdds");

  var btnTwiter=$("#twitt"),
  btnGenerate=$("#generate");

  function generate() {
      $.ajax({
        headers: {
          "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(r) {
          var r;
          if (typeof r === 'string') {
           r = JSON.parse(r);
          }
          $("#original").text(r.quote);
          //traslate_text=$("#traslate"),
          $("#author").text("- "+r.author);
          btnTwiter.css("visibility", "visible");
          btnTwiter.on('click', function() {
              if(!inIframe()) {
                openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + r.quote + '" ' + r.author));
              }
            });
        }
      });
    }

      //--------Abrir Iframe-----//
      function inIframe () {
         try {
           return window.self !== window.top;
         } catch (e) {
           return true;
         }
       }
       //--------Abrir url-----//

    function openURL(url){
      window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
    }
    generate();
    btnGenerate.on('click', generate);
});
