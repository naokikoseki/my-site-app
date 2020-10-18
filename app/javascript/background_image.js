$(function() {
  let i = 1;
  setInterval(function() {
    if(i > 6) i = 1;
    $("#background").css({ "background-image": "url('/assets/sample"+i+".jpg')"});
    i++;
    }, 2500
  );
});